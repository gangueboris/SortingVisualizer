
// Sorting function 
function bubble(arrayBars, barsHeight)
{
  let bubbleColorsSet = ['#fff', '#ff0040', '#FFA500'];
  let bubbleTargetSet = ['comparaison', 'swap','sorted'];

    for (let i = 0; i < barsHeight.length-1; i++)
    {
      for (var j = 0; j < barsHeight.length -1 -i; j++)
      {
        //Display the comparaison
        bar_stateUpdate(arrayBars[j], barsHeight[j], bubbleColorsSet[0]);                      
        bar_stateUpdate(arrayBars[j+1], barsHeight[j+1],bubbleColorsSet[0]); 
 
        if (barsHeight[j] > barsHeight[j+1]) // comparaison
        {
            [barsHeight[j], barsHeight[j+1]] = [barsHeight[j+1], barsHeight[j]];     // swap

            // Display the swap
            bar_stateUpdate(arrayBars[j],  barsHeight[j], bubbleColorsSet[1]);                  
            bar_stateUpdate(arrayBars[j+1], barsHeight[j+1], bubbleColorsSet[1]);             
        }

         // set to the old color
        bar_stateUpdate(arrayBars[j], barsHeight[j], "linear-gradient(#3c77e6, #00aaff, #0ef)");                 
        bar_stateUpdate(arrayBars[j+1], barsHeight[j+1], "linear-gradient(#3c77e6, #00aaff, #0ef)"); 
      }
      
      // display the sorted state
      bar_stateUpdate(arrayBars[j], barsHeight[j],bubbleColorsSet[2]);                            
    }
    bar_stateUpdate(arrayBars[0], barsHeight[0],bubbleColorsSet[2]);                             
    enable_buttons();
  return [bubbleColorsSet, bubbleTargetSet];
}
