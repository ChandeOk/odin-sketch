'use strict';

let squares = 32;

const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.add('square');
  container.appendChild(div);
}

container.addEventListener('mouseover', function (event) {
  const hoveredSquare = event.target.closest('.square');
  if (!hoveredSquare) return;
  hoveredSquare.style.backgroundColor = 'black';
});
