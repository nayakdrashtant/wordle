/*
require('./bootstrap');
let grid = document.querySelector('#game');
let fragment = document.createDocumentFragment();
let guessesAllowed = 4;
let wordLength = 3;
let generateGrid = () => {
    Array.from({length: guessesAllowed}).forEach(() => {
        let row = document.createElement('div');
        row.classList.add('row');
        Array.from({length: wordLength}).forEach(() => {
            let tile = document.createElement('div');
            tile.classList.add('tile');
            row.appendChild(tile);
        });


        fragment.appendChild(row);
    });
    grid.appendChild(fragment);
}

generateGrid();
*/
import game from "./game";
document.addEventListener('alpine:init', () => {
    Alpine.data('game', () => game);
});
