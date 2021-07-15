// import { getAllInfo } from './app';

let state = {
     value: ''
};

function render() {
     const root = document.getElementById("root");
     // const div = document.createElement("div");
     const input = document.createElement("input");
     const button = document.createElement("button");

     root.appendChild(input);
     root.appendChild(button);

     //  div.innerHTML = `${getAllInfo("자바스크립트")}`;
     button.innerText = '버튼 클릭!';
     button.value = button.nodeName;

     button.onclick = e => handleClick(e.target.value.toLowerCase());

     input.addEventListener('keydown', e => handleChange(e.target.value));
}

function handleChange(e) {
     console.log(e);
}

function handleClick(e) {
     console.log(' success click');
}

window.addEventListener('onLoad', render());