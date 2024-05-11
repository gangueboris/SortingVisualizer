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
const checkboxInput = document.getElementById('checkboxInput');
const td1 = document.getElementById('td1');
const td2 = document.getElementById('td2');
const td3 = document.getElementById('td3');
const td4 = document.getElementById('td4');
const td5 = document.getElementById('td5');
const descriptContainer = document.querySelector('.work-container');
const contentToggle = document.querySelector('.content-toggle');
const marginBar  = 0.1; // in %
const time = 1000; //ms
let currentDelay = 0;
let delayTime = 0;

const bubbleAdv = ["Simple to Understand and Implement", "No Extra Space Required","Can Perform Well on Nearly Sorted Data", "Stable Sorting"];
const bubbleDis = ["Inefficient for Large Datasets", "Not Suitable for Almost Sorted Data"];
const selectionAdv = ["No Extra Space Required","Can Perform Well on Nearly Sorted Data", "Stable Sorting"];
const selectionDis = ["Not Adaptive", "Doesn't adapt to the input data", "Inefficient for Large Datasets"];
const insertionAdv = ["Efficient for Small Datasets and Nearly Sorted Data","Simple Implementation","In-Place Sorting", "Adaptive"];
const insertionDis = ["Not Suitable for Randomized Input", "Inefficient for Large Datasets", "Requires Multiple Swaps"];
const heapAdv = ["Guaranteed Worst-case Time Complexity", "Efficient for Large Datasets","In-Place Sorting","Stable Sorting"];
const heapDis = ["Complex Implementation","Not Suitable for Small Datasets", "Not Adaptive", "Not Suitable for Small Datasets"];
const mergeAdv = ["Efficient for Large Datasets", "Guaranteed Worst-case Time Complexity","Stable Sorting"];
const mergeDis = ["Requires Additional Space", "Complex Implementation", "Not Adaptive(doesn't take advantage of pre-existing order in the input data)", "Not In-place"];
const quickAdv = ["Efficient for Large Datasets", "Fastest Sorting Algorithm in Practice", "In-place Sorting", "Adaptive(takes advantage of pre-existing order in the input data)"];
const quickDis = ["Not Guaranteed Worst-case Time Complexity", "Complex Implementation","Recursive Nature", "Instability"];

const bubbleTC = ["Best case: Ω(n)", "Average case: Θ(n²)", "Worst case: O(n²)"];
const selectionTC = ["Best case: Ω(n²)", "Average case: Θ(n²)", "Worst case: O(n²)"];
const insertionTC = ["Best case: Ω(n)", "Average case: Θ(n²)", "Worst case: O(n²)"];
const heapTC = ["Best case: Ω(nlogn)", "Average case: Θ(nlogn)", "Worst case: O(nlogn)"];
const mergeTC = ["Best case: Ω(nlogn)", "Average case: Θ(nlogn)", "Worst case: O(nlogn)"];
const quickTC = ["Best case: Ω(nlogn)", "Average case: Θ(nlogn)", "Worst case: O(n²)"];


const tableContent = {
    'BUBBLE':{timeComplexity:bubbleTC , spaceComplexity: 'O(1)', advantages: bubbleAdv, disadvantages: bubbleDis},
    'SELECTION':{timeComplexity:selectionTC, spaceComplexity: 'O(1)', advantages: selectionAdv, disadvantages: selectionDis},
    'INSERTION':{timeComplexity: insertionTC, spaceComplexity: 'O(1)', advantages: insertionAdv, disadvantages: insertionDis},
    'HEAP':{timeComplexity:heapTC , spaceComplexity: 'O(1)', advantages: heapAdv, disadvantages: heapDis},
    'MERGE':{timeComplexity: mergeTC , spaceComplexity: 'O(n)', advantages: mergeAdv, disadvantages: mergeDis},
    'QUICK':{timeComplexity: quickTC, spaceComplexity: 'O(1)', advantages:quickAdv, disadvantages: quickDis},
   };
   
const descript = {
        'BUBBLE': "In each pass, it compares adjacent elements and swaps them if they are in the wrong order (smaller element comes after a larger one). The larger element essentially 'bubbles' up to its correct position at the end of the array. This process continues for all passes through the array.\n\nLoop Invariant: After each iteration of the loop, the largest element seen so far is guaranteed to be at the end of the sorted sub-array",
        'SELECTION':"Selection sort works by repeatedly finding the smallest element in the unsorted part of the list. It then swaps that tiny element all the way to the front of the unsorted section, effectively putting it in its final sorted position. This process continues, shrinking the unsorted section with each pass and building the sorted section from the beginning of the list.\n\nLoop Invariant: After each pass, the first i elements (where i is the current iteration number) are guaranteed to be sorted in ascending order.",
        'INSERTION': "Insertion sort works like organizing cards in your hand. Imagine starting with an empty sorted section at the beginning. You take each element from the unsorted portion and insert it into the correct position within the sorted section. To find the correct position, you compare the element with the ones already sorted. This way, you gradually build the sorted section one element at a time, ensuring each element is placed in its rightful position relative to the sorted elements before it.\n\n Loop invariant: After each iteration (pass) through the unsorted portion of the array, the sub-array from index 0 up to, but not including, the current index (i), is guaranteed to be sorted in ascending order.",
        'HEAP': "Heap sort first builds a special tree structure called a max-heap from the entire array, where the largest element bubbles up to the top. Then, it repeatedly extracts the largest element (now at the root) from the heap, swaps it with the last element in the unsorted section, and rebuilds the heap on the remaining elements. This process continues, progressively shrinking the unsorted section and placing the largest elements at the end of the array, effectively building the sorted portion in descending order.\n\nLoop invariant: After each extraction of the maximum element and subsequent heap maintenance, the sub-array from the end of the sorted portion (initially the entire array) up to, but not including, the current index (i), is guaranteed to be a valid max-heap.",
        'MERGE':"Merge sort is a divide-and-conquer sorting algorithm. It works by recursively breaking down the unsorted list into sub-lists containing a single element each (considered already sorted). Then, it repeatedly merges these sub-lists in pairs, comparing elements from each and inserting the smaller one into the final sorted list. This merging process continues until all sub-lists are combined into a single, fully sorted list.\n\nLoop invariant: After each comparison between elements from the two sub-lists being merged, all elements processed so far in the output (sorted) list are guaranteed to be in ascending order.",
        'QUICK': "Quick sort is a divide-and-conquer sorting algorithm. It picks an element (often the last) as the pivot and rearranges the array. Elements smaller than the pivot bubble up to its left, while larger ones sink to its right, effectively creating two sub-arrays. The magic happens next: Quick sort recursively sorts these sub-arrays independently, leveraging the already-positioned pivot as a boundary.\n\nLoop invariant: After each iteration of the loop that compares elements with the pivot, all elements to the left of the current index i (excluding the pivot) are guaranteed to be less than the pivot.",
    };

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

function swap (arrayBars, barsHeight, i, j, firstC, secondC)
{
     //Display before the swap 
     bar_stateUpdate(arrayBars[i], barsHeight[i], firstC); 
     bar_stateUpdate(arrayBars[j], barsHeight[j], firstC);

     [barsHeight[i], barsHeight[j]] = [barsHeight[j], barsHeight[i]];  // swap

    // display state after the swaps
     bar_stateUpdate(arrayBars[i], barsHeight[i], firstC);
     bar_stateUpdate(arrayBars[j], barsHeight[j], firstC);

     // reset the color bar to the original color
     bar_stateUpdate(arrayBars[i], barsHeight[i], secondC);
     bar_stateUpdate(arrayBars[j], barsHeight[j], secondC);
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
            //delayTime = 0.3775 * time;
            delayTime = 1/2*0.5 * time;
            break;

        case 3:
            //delayTime = 0.255 * time; 
            delayTime = 1/3*0.5 * time;
            break;
    
        case 4:
            //delayTime = 0.1325 * time; 
            delayTime = 1/4*0.5 * time;
            break;

        case 5:
            //elayTime = 0.01 * time;
            delayTime = 1/5*0.5 * time;
            break;
    }
    speed_p.innerText = 'SPEED : ' + speed.value +'x';
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
            const quickColors = ['#f00', '#fff'];
            const quickTarget = ['pivot','traversal  + swap'];
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
            const selectionTargetSet = ['traversal', 'current min', 'sorted'];
            colorCode(selectionColorsSet,  selectionTargetSet);
            break;

        case 'QUICK':
            const quickColors = ['#f00', '#fff'];
            const quickTarget = ['pivot','traversal  + swap'];
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
        enable_buttons();
        barsHeight = random_generator();
        arrayBars = random_diplay(barsHeight);
    }
   
}

function update_table_content ()
{
   td1.innerText = `${sortSelect.value}`;
   td3.innerText = tableContent[`${sortSelect.value}`].spaceComplexity;
   const currentAdv = tableContent[`${sortSelect.value}`].advantages;
   const currentDis = tableContent[`${sortSelect.value}`].disadvantages;

   const TC = tableContent[`${sortSelect.value}`].timeComplexity;
   // Create ul
   const ulTC = document.createElement('ul');
   const ulAdv = document.createElement('ul');
   const ulDis = document.createElement('ul');
   
  
   for (let i = 0; i < TC.length; i++)
   {
     let liTC = document.createElement('li');
     liTC.innerText = TC[i];
     ulTC.appendChild(liTC);
   }
   for (let i = 0; i < currentAdv.length; i++)
   {
      let liAdv = document.createElement('li');
      liAdv.innerText = currentAdv[i];
      ulAdv.appendChild(liAdv);
   }

   for (let i = 0; i < currentDis.length; i++)
   {
      let liDis = document.createElement('li');
      liDis.innerText = currentDis[i];
      ulDis.appendChild(liDis);
   }
   td2.innerHTML = '';
   td4.innerHTML = '';
   td5.innerHTML = '';

   td2.appendChild(ulTC);
   td4.appendChild(ulAdv);
   td5.appendChild(ulDis);

   descriptContainer.innerText = '';
   descriptContainer.innerText = descript[`${sortSelect.value}`];


   // for the adv and dis , I will handle that by using list
   /*
    - For adv and dis, I would like to display that in a list:
    - I would like when list  is displayed: others elements will be center
    - I will test by adding ul and li list

       *** to do ***
    - reseach dis && adv elements (Done)
    - do also the window onload (Done)
    - to add, I need to create a li, add text and append child to ul (Done)
    - research + code for the how it works / description.
   */
   
}


function  update_learnMore()
{
    if (!checkboxInput.checked) 
    {
       contentToggle.style.display = 'none';
       contentToggle.style.maxHeight = '0';
    }
    else
    {
      contentToggle.style.display = 'flex';
      contentToggle.style.maxHeight = contentToggle.scrollHeight + 'px';
    }
}

/*
------------- to do ---------------
- add the value of the select sort element
- and update the colors on the randomize
- so if I have the value of the select, call random and change the color bar
- I would like to display the color code of the current select element


- when sorted select changed, change directly the color code.
- at the end of each sorting function, I will create a list of colorList && targetList in which I add color and target
- fnd solution for merge sort and quick sort
- I will call the colorCode with values in it in switch case before.
-
- I need to add
- for each color, I will create a block color [8*8px] (done)
- under each I will put the target (done)

-- Now I would like to add a stop button, to stop the excecution of the visualizer
- T do that , I need to take the setTimeOut to clear and call enable_buttons()
*/


/*
- I need to select every td and change it based on the value of 
sort-select
- I need to select also the paragraph of how it works and do the same.
- For advantages and disadvantages, make a list.

*** Approch ***
- First I will handle the changing based on the value of sort-select
- Second I will hidden and event when click on learn more
content.bubble.timeComplexity

*/
