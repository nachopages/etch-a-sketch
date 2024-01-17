const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "#333333";


const inputRange = document.getElementById('inputRange');
const inputColor = document.getElementById('colorPicker');
const buttons = document.querySelectorAll('button');
const grid = document.getElementById('grid');
const p = document.getElementById('currentSize');
inputRange.value = 16;
inputColor.value = "#333333"
let size;
let color = DEFAULT_COLOR;
let mode;

inputRange.addEventListener('input', (e) => {
    size = e.target.value;
    uploadSize(size);
    reloadGrid();
})

const setUpGrid = (value) => {
    grid.style.gridTemplateColumns = `repeat(${value}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${value}, 1fr)`
    for (let i = 0; i < value * value; i++) {
        let div = document.createElement('div');
        div.classList = 'grid-element'
        div.addEventListener('mouseover', paintDiv);
        grid.append(div);
    }
}

const uploadSize = (value) => { p.innerHTML = `${value} X ${value}` }

const clearGrid = () => { grid.innerHTML = '' }

const reloadGrid = () => {
    clearGrid();
    setUpGrid(size);
}

inputColor.addEventListener('input', (e) => {
    color = e.target.value;
})

for (const button of buttons) {
    button.addEventListener('click', () => {
        for (const otherButton of buttons) {
            otherButton.classList.remove('active');
        }
        button.className = 'active';
        mode = button.id;
        console.log(mode);
    })
}

const paintDiv = (e) => {
    if (mode === 'colorMode') {
        e.target.style.backgroundColor = color;
    } else if (mode === 'eraser') {
        e.target.style.backgroundColor = '#fafbfd';
    } else {

    } {

    }
}

window.onload = () => {
    setUpGrid(DEFAULT_SIZE);
    uploadSize(DEFAULT_SIZE);
}