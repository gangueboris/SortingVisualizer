/*This function sort heapify only three nodes.When we apply recursion,the algorithm will apply max on node to node but it's doesnt looks behind.
So to max heapify, an array, we must apply maxHeapify form buttom  to top.
*/
function max_heapify (arrayBars, barsHeight, size, index)
{
    let largestIndex = index;
    let leftChild = 2 * index + 1;
    let rightChild = 2 * index + 2;

    if (leftChild < size && barsHeight[leftChild] > barsHeight[largestIndex])
    {
        largestIndex = leftChild;
    }
    if (rightChild < size && barsHeight[rightChild] > barsHeight[largestIndex])  
    {
        largestIndex = rightChild;
    }
    //bar_stateUpdate(arrayBars[largestIndex], barsHeight[largestIndex], "#fff");                             // largest  value 

    if (largestIndex !== index)
    {
        swap(arrayBars, barsHeight, largestIndex, index, 'blue', "linear-gradient(#3c77e6, #00aaff, #0ef)");
        max_heapify (arrayBars, barsHeight, size, largestIndex);
    }
   return;
}

function heap (arrayBars, barsHeight)
{
    const heapColorsSet = ['#00f','#fff', '#FFA500'];
    const heapTargetSet = ['parent & maxChild','maxValue and swap','sorted'];

   // Build maxheap
    for (let i = Math.floor(barsHeight.length / 2) -1; i >= 0; i--)
    {
        max_heapify (arrayBars, barsHeight, barsHeight.length, i);
    }
     
    for (let size = barsHeight.length - 1; size > 0; size--)
    {
       bar_stateUpdate(arrayBars[0], barsHeight[0], "#fff"); // show the largest element at the top before the swap
       bar_stateUpdate(arrayBars[size], barsHeight[size], "#fff"); // show the element to swap with

       bar_stateUpdate(arrayBars[0], barsHeight[0], "linear-gradient(#3c77e6, #00aaff, #0ef)");
       bar_stateUpdate(arrayBars[size], barsHeight[size], "linear-gradient(#3c77e6, #00aaff, #0ef)");

        [barsHeight[0], barsHeight[size]] = [barsHeight[size], barsHeight[0]];
        bar_stateUpdate(arrayBars[size], barsHeight[size], '#FFA500'); // sorted color 

        max_heapify (arrayBars,barsHeight, size, 0);
    }
    bar_stateUpdate(arrayBars[0], barsHeight[0], '#FFA500');
    enable_buttons();
    return [heapColorsSet, heapTargetSet];
}

/*
- sorted color: orange
- display the swap of the max at the top: #fff
- display the swap of maxheapify : blue (current with maxChild)
- display maxheapify with linear-gradient
- I think, I  need to put a color for maxHeapify
 */