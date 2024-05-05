function insertion (arrayBars, barsHeight)
{
    let insertioncolorsSet = ['#fff', '#f00', '#FFA500'];
    let insertionTargetSet = ['traversal', 'breakpoint','sorted'];
  
    for (var i = 0; i < barsHeight.length; i++)
    {
        const currentBar = barsHeight[i];
        let j = i-1;

        bar_stateUpdate(arrayBars[i], barsHeight[i],insertioncolorsSet[1]); 

        while (j >= 0 && barsHeight[j] > currentBar)
        {
           bar_stateUpdate(arrayBars[j], barsHeight[j],insertioncolorsSet[0]); 
           barsHeight[j+1] = barsHeight[j];
           bar_stateUpdate(arrayBars[j+1], barsHeight[j+1],insertioncolorsSet[2]); 
           j--;
        }
        barsHeight[j+1] = currentBar;
        bar_stateUpdate(arrayBars[j+1], barsHeight[j+1],insertioncolorsSet[1]); 
        bar_stateUpdate(arrayBars[j+1], barsHeight[j+1],insertioncolorsSet[2]); 
    }
    bar_stateUpdate(arrayBars[i-1], barsHeight[i-1],insertioncolorsSet[2]); 
    enable_buttons();
}
