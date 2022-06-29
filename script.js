'use strict';

let numberOfSquares = 256;

const container = document.querySelector('.container');
const input = document.querySelector('form');
console.log(input);
const renderGrid = function () {
  container.innerHTML = '';
  container.setAttribute(
    'style',
    `grid-template-columns: repeat(${Math.sqrt(numberOfSquares)}, 1fr)`
  );
  for (let i = 0; i < numberOfSquares; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
  }
};

renderGrid();

container.addEventListener('mouseover', function (event) {
  const hoveredSquare = event.target.closest('.square');
  if (!hoveredSquare) return;
  hoveredSquare.style.backgroundColor = 'black';
});

input.addEventListener('submit', function (event) {
  event.preventDefault();
  const value = +this.querySelector('input').value;
  if (value > 100) return;
  numberOfSquares = value * value;
  renderGrid();
});
