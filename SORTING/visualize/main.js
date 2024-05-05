function main ()
{
window.onload = update_sizeValue(); // display the bars with init value when the page onload
window.onload = speed_manager();
window.onload = update_select_sort();

// Event handling
size.addEventListener('change', () => update_sizeValue());

randomize.addEventListener('click', () => {
    barsHeight = random_generator();
    arrayBars = random_diplay(barsHeight);
});

run.addEventListener('click', () => run_visualizer(arrayBars, barsHeight));

reset.addEventListener('click', () => reset_visualizer());

speed.addEventListener('change', () => speed_manager());

sortSelect.addEventListener('change', () => update_select_sort());

}
main();

/*
- after , I will handle the speed updating
-I learn how to update think a write a specific function for all button and operation that we want. by separating function
- how and when to use correctly style in js
- how to manipulate local and global variable ?! often use return value
- I learn how to use the window.onload = update_sizeValue();
- how to structure  a project : first layout, ...
*/