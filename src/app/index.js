// import { getAllInfo } from './app';

let state = {
     value: ''
};

const root = document.getElementById("root");
const input = document.createElement("input");
// const div = document.createElement("div");
const button = document.createElement("button");

root.appendChild(input);
root.appendChild(button);

//  div.innerHTML = `${getAllInfo("자바스크립트")}`;
// button.value = button.nodeName;
button.innerText = '버튼 클릭';

function render() {
     button.onclick = e => handleClick(e);
     input.addEventListener('keydown', e => handleChange(e));
}

function handleChange(e) {
     setState({ value: e.target.value });
     console.log(state.value);
}

function handleClick(e) {
     console.log(state.value);

     const ul = document.createElement('ul');
     const li = document.createElement('li');

     root.appendChild(ul);
     ul.appendChild(li);

     li.innerText = state.value;

     e.preventDefault();
     input.value = '';
}

function setState(newState) {
     state = { ...state, ...newState };
     render();
}

window.addEventListener('onLoad', render());