import './style.css'

let state = 0;

const button = document.getElementById('button');

button.onclick = () => {
  state (state + 1);
  button.innerHTML = state;
}