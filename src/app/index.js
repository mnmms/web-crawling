// import { getAllInfo } from './app';


function render() {
const root = document.getElementById("root");
// const div = document.createElement("div");
const input = document.createElement("input");
const button = document.createElement("button");

//  div.innerHTML = `${getAllInfo("자바스크립트")}`;
button.innerText = '버튼 클릭!';

root.appendChild(input);
root.appendChild(button);
}

window.addEventListener("onLoad", render());