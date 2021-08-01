let container = document.querySelector('#container');
const btn = container.children[0];
const text = container.children[1];

const red = '#ff0000';
const blue = '#0000ff';

let status = true;

btn.addEventListener('click', () => {
  if (status === true) {
    text.style.color = blue;
    status = false;
  } else {
    text.style.color = red;
    status = true;
  }
});
