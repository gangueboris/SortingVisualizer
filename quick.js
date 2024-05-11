function partition (arrayBars, barsHeight, low, high)
{
    const pivot = barsHeight[high];
    let i = low -1;
    bar_stateUpdate(arrayBars[high], barsHeight[high], '#f00'); // display the pivot

    for (var j = low; j < high; j++)
    { 
        bar_stateUpdate(arrayBars[j], barsHeight[j], '#fff');
        bar_stateUpdate(arrayBars[j], barsHeight[j], "linear-gradient(#3c77e6, #00aaff, #0ef)");

       if (barsHeight[j] < pivot)
       {
            //i > 0 ? bar_stateUpdate(arrayBars[i], barsHeight[i], "linear-gradient(#3c77e6, #00aaff, #0ef)") : bar_stateUpdate(arrayBars[0], barsHeight[0], "linear-gradient(#3c77e6, #00aaff, #0ef)"); // update the position of the i
            i++;
            // display the swap
            swap(arrayBars, barsHeight, i, j,'#fff', "linear-gradient(#3c77e6, #00aaff, #0ef)");
       }
    }
    swap(arrayBars, barsHeight, i+1, high,'#fff', "linear-gradient(#3c77e6, #00aaff, #0ef)");
   
    //bar_stateUpdate(arrayBars[i+1], barsHeight[i+1], "linear-gradient(#3c77e6, #00aaff, #0ef)");

    return i + 1;  // return pivot index;  
}

// My color code are: sorted items: '#FFA500; lessThanPivot : "#fff"; greaterThanPivot: '#000'; pivot: "#f00";

function quick (arrayBars, barsHeight, low, high)
{
    if (low < high)
    {
        let pivotIndex = partition(arrayBars, barsHeight, low, high);
        quick (arrayBars, barsHeight,low, pivotIndex - 1);
        quick (arrayBars, barsHeight,pivotIndex + 1, high);
    }
}


/*
*** Characteristic of quick sort to show ***
- current pivot , where the pivot is placed (red)
- display j, which is lookuping of the element which is less than pivot (#fff)
- display the current i range (orange)
- display of the current recursion


** color code **
- white : traversing
- orange : sorted elements
- red : current minvalue
 */
