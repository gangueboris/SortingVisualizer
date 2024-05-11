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
    return [insertioncolorsSet, insertionTargetSet];
}

/*
*** Characteristic of insertion sort to show **
- display the current i (red)
- display the current compare j (#fff)
- display the step by step range (orange)
- I showing where is placed the current i elements (red after orange)

** Color code **
- red : the current i
- white : the j for the ranging
- orange : sorted elements.

NB: For the analyse, I can add to show the importante state.
 */