function merge (arrayBars, barsHeight, l, r)
{
    if (l < r)
    {
        const mid = l + Math.floor((r-l)/2);
        bar_stateUpdate(arrayBars[mid], barsHeight[mid], '#fff');
        merge (arrayBars,barsHeight, l, mid);
        merge (arrayBars,barsHeight, mid+1, r);
        mergeBoth (arrayBars,barsHeight, l, r, mid);
    }
    
}

function mergeBoth (arrayBars,barsHeight, l, r, mid)
{
    let leftArray = barsHeight.slice(l, mid+1);
    let rightArray = barsHeight.slice(mid+1, r+1);
    let i = 0, j = 0, currentIndex = l;

    while (i < leftArray.length && j < rightArray.length)
    {
        if (leftArray[i] < rightArray[j])
        {
            barsHeight[currentIndex] = leftArray[i];
            bar_stateUpdate(arrayBars[currentIndex], barsHeight[currentIndex], '#FFA500');
            i++; 
        }
        else
        {
            barsHeight[currentIndex] = rightArray[j];
            bar_stateUpdate(arrayBars[currentIndex], barsHeight[currentIndex], '#FFA500');
            j++;
        }
        currentIndex++;
    }
     
    while (i < leftArray.length)
    {
        barsHeight[currentIndex] = leftArray[i];
        bar_stateUpdate(arrayBars[currentIndex], barsHeight[currentIndex], '#FFA500');
        i++;
        currentIndex++;
    }
    while (j < rightArray.length)
    {
        barsHeight[currentIndex] = rightArray[j];
        bar_stateUpdate(arrayBars[currentIndex], barsHeight[currentIndex], '#FFA500');
        j++;
        currentIndex++;
    }
}


/*
- left part red
- right part blue
- merge orange
 */