// get informations
const size = document.getElementById('size');
const size_p = document.getElementById('size_p');
const speed = document.getElementById('speed');
const speed_p = document.getElementById('speed_p');
const sortSelect = document.getElementById('sort-select');
const colorCodeContainer = document.querySelector('.color-code');
const run = document.querySelector('.run');
const randomize = document.querySelector('.randomize');
const visualizer = document.querySelector('.visualizer');
const reset = document.querySelector('.reset');
const buttons = document.querySelectorAll('.btn');
const marginBar  = 0.1; // in %
const time = 1000; //ms
let currentDelay = 0;
let delayTime = 0;


// Random generator elements function 
function random_generator() 
{
    const sizeValue = size.value;
    let arrayHeight = [];
    let uniqueValues = new Set(); // Use a Set to ensure uniqueness
 
    // Loop until we have enough unique values
    while (uniqueValues.size < sizeValue) 
    {
       let randomNumber = Math.floor(Math.random() * (size.max) + 1);//Math.floor(Math.random() * sizeValue) + 1; // Generate a random number between 1 and sizeValue
      if (!uniqueValues.has(randomNumber)) 
       {
          uniqueValues.add(randomNumber);
          arrayHeight.push(randomNumber);
      }
    }
    return arrayHeight;
 }
 


// display the random values
function random_diplay(arrayHeight)
{  
    const sizeValue = size.value;

    visualizer.innerHTML = '';
    let arrayBars = [];
    for (let i = 0; i < sizeValue; i++)
    {
        let bar = document.createElement('div');
        bar.style = `margin:0% ${marginBar}%; background:linear-gradient(#3c77e6, #00aaff, #0ef); width: ${100 / sizeValue - (2 * marginBar)}%; height:${arrayHeight[i]}%; border-radius: 4px 4px 0 0`;
        arrayBars.push(bar);
        visualizer.appendChild(bar); 
    }
    return arrayBars;
}

// handle the size updating...  when the size change, the random nbres change. I will add to an event listner
function update_sizeValue()
{
    size_p.innerText = 'SIZE : ' + size.value;
    barsHeight = random_generator();
    arrayBars = random_diplay(barsHeight);
}

// disabled buttons diseable buttons when the algo is running so I need the time that should take the algo to run

function disable_buttons() 
{
    buttons.forEach(button => {
        button.style = 'background-color:transparent;'
        if (button.classList.contains('run')) button.innerText = 'RUNNING ...';
        button.disabled = true;
    });
}


function enable_buttons () 
{
    window.setTimeout(function(){
        buttons.forEach(button =>{
            button.style = 'background-color: #8080ff;' // Add the 'unselected-effect' class
            if (button.classList.contains('run')) button.innerText = 'RUN';
            button.disabled = false;
        });
    },currentDelay += delayTime);   // wait this delay before executing the function.  Which time I must put there ?!
}

function bar_stateUpdate(bar, barHeight, color)
{ 
    window.setTimeout (() => bar.style = `margin: 0% ${marginBar}%; height: ${barHeight}%; background: ${color};width: ${100/size.value - (2 * marginBar)}%;  border-radius: 10px 5px 0 0;`,currentDelay += delayTime);
}

function speed_manager ()
{
    //delayTime = speed.value *0.01 *1000;   // Update the delayTime (the display time ) based on the speed.
    switch (parseInt(speed.value))
    {
        // min delay :  500ms, max:delay: 10ms // step: 122,5 ms
        case 1:
            delayTime = 0.5 * time; // 1000 ms 0.5 frame  
            break;

        case 2:
            delayTime = 0.3775 * time;
            break;

        case 3:
            delayTime = 0.255 * time; 
            break;
    
        case 4:
            delayTime = 0.1325 * time; 
            break;

        case 5:
            delayTime = 0.01 * time;
            break;
    }
    speed_p.innerText = 'SPEED : ' + speed.value ;
}


function run_visualizer (arrayBars, barsHeight)
{
    disable_buttons();
    switch(sortSelect.value)
    {
        case 'BUBBLE':
            const bubbleColorTarget = bubble(arrayBars, barsHeight);
            colorCode(bubbleColorTarget[0], bubbleColorTarget[1]);

            break;
        case 'INSERTION':
           const insertionColorTarget = insertion(arrayBars, barsHeight);
           colorCode(insertionColorTarget[0], insertionColorTarget[1]);
            break;
        case 'SELECTION':
            const selectionColorTarget = selection(arrayBars, barsHeight);
            colorCode(selectionColorTarget[0], selectionColorTarget[1]);
            break;
        case 'QUICK':
            const quickColors = ['#f00','#FFA500', '#fff'];
            const quickTarget = ['pivot', 'range less than pivot', 'traversal'];
            colorCode(quickColors, quickTarget);
            quick(arrayBars, barsHeight, 0, barsHeight.length-1);
            enable_buttons();
            break;
        case 'MERGE':
            const mergeColors = ['#fff','#FFA500'];
            const mergeTarget = ['split', 'sorted'];
            colorCode(mergeColors, mergeTarget);
            merge(arrayBars, barsHeight, 0, barsHeight.length-1);
            enable_buttons();
            break;
        case 'HEAP':
            const heapColorTarget = heap(arrayBars, barsHeight);
            colorCode (heapColorTarget[0], heapColorTarget[1]);
            break;
    }
    currentDelay = 0; // initialize currentDelay for the comming running
}


function colorCode (colorList, targetList)
{
    colorCodeContainer.innerHTML = '';
    for (let i = 0; i < colorList.length; i++)
    {
        let colorTargetContainer = document.createElement('div');
        colorTargetContainer.style = `padding: 0 10px; display: flex;  align-items: center; flex-direction: column;`;

        let colorBar = document.createElement('div');
        colorBar.style = `height: 18px; width: 18px; background:${colorList[i]}; margin-bottom:5px`;;

        let targetBar = document.createElement('div');
        targetBar.innerText = targetList[i];

        colorTargetContainer.appendChild(colorBar);
        colorTargetContainer.appendChild(targetBar);
        colorCodeContainer.appendChild(colorTargetContainer);
    }
   
}

function update_select_sort ()
{
    barsHeight = random_generator();
    arrayBars = random_diplay(barsHeight);

    switch(sortSelect.value)
    {
        case 'BUBBLE':
            const bubbleColorsSet = ['#fff', '#ff0040', '#FFA500'];
            const bubbleTargetSet = ['comparaison', 'swap','sorted'];
            colorCode( bubbleColorsSet, bubbleTargetSet);
            break;

        case 'INSERTION':
            const insertioncolorsSet = ['#fff', '#f00', '#FFA500'];
            const insertionTargetSet = ['traversal', 'breakpoint','sorted'];
            colorCode(insertioncolorsSet, insertionTargetSet);
            break;

        case 'SELECTION':
            const selectionColorsSet = ['#fff', '#ff0040', '#FFA500'];
            const selectionTargetSet = ['traversal', 'currentMinValue', 'sorted'];
            colorCode(selectionColorsSet,  selectionTargetSet);
            break;

        case 'QUICK':
            const quickColors = ['#f00','#FFA500', '#fff'];
            const quickTarget = ['pivot', 'range less than pivot', 'traversal'];
            colorCode(quickColors, quickTarget);
            break;
        case 'MERGE':
            const mergeColors = ['#fff','#FFA500'];
            const mergeTarget = ['split', 'sorted'];
            colorCode(mergeColors, mergeTarget);
            break;
        case 'HEAP':
            const heapColorsSet = ['#00f','#fff', '#FFA500'];
            const heapTargetSet = ['parent & maxChild','maxValue and swap','sorted'];
            colorCode (heapColorsSet, heapTargetSet);
            break;
    }
}

function reset_visualizer ()
{
    if(run.innerHTML === 'RUNNING ...')
    {
        barsHeight = random_generator();
        arrayBars = random_diplay(barsHeight);
        enable_buttons();
    }
   
}
