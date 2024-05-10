function selection (arrayBars, barsHeight)
{
    let selectionColorsSet = ['#fff', '#ff0040', '#FFA500'];
    let selectionTargetSet = ['traversal', 'currentMinValue', 'sorted'];

    for (var i = 0; i < barsHeight.length ; i++)
    {
       let minIndex = i;
       bar_stateUpdate(arrayBars[minIndex], barsHeight[minIndex], selectionColorsSet[1]); // current minIndex

       for (let j = i+1; j < barsHeight.length; j++)
       {
        bar_stateUpdate(arrayBars[j], barsHeight[j], selectionColorsSet[0]);             // iterator
        bar_stateUpdate(arrayBars[j], barsHeight[j], "linear-gradient(#3c77e6, #00aaff, #0ef)");

         if (barsHeight[j] < barsHeight[minIndex])
         {
            // update the color of the minIndex
            bar_stateUpdate(arrayBars[minIndex], barsHeight[minIndex], "linear-gradient(#3c77e6, #00aaff, #0ef)");
            minIndex = j;
            bar_stateUpdate(arrayBars[minIndex], barsHeight[minIndex], selectionColorsSet[1]);             // current minIndex
         }
       }
       if (minIndex !== i)
       {
         bar_stateUpdate(arrayBars[i], barsHeight[i], selectionColorsSet[0]);
         bar_stateUpdate(arrayBars[minIndex], barsHeight[minIndex], selectionColorsSet[0]);         
        [barsHeight[i], barsHeight[minIndex]] = [barsHeight[minIndex], barsHeight[i]];
        bar_stateUpdate(arrayBars[i], barsHeight[i], selectionColorsSet[2]);
        bar_stateUpdate(arrayBars[minIndex], barsHeight[minIndex], "linear-gradient(#3c77e6, #00aaff, #0ef)");
       }
       else // the actual i is the min
       {
        bar_stateUpdate(arrayBars[i], barsHeight[i], selectionColorsSet[2]);
       }
    }
    bar_stateUpdate(arrayBars[i-1], barsHeight[i-1],selectionColorsSet[2]);
    enable_buttons();
}


/*
*** Characteristic of selection sort to show ***
- display the current min element (red)
- display the j lookuping of the smallest element (#fff)
- double #fff : swap
- sorted elements (orange)


** color code **
- white : traversing
- orange : sorted elements
- red : current minvalue
 */
