//event.js

let buttons = document.querySelectorAll('#new>button');
console.log(buttons);

for(let i = 0; i<buttons.length; i++) {
    buttons[i].onclick = clickFunc; //func을 이용한 버젼 
    buttons[i].onmouseover = mouseoverFunc;
    buttons[i].onmouseout = mouseoutFunc;

    // buttons[i].onclick = function() {
    //     alert(this.innerHTML); //html값을 경고 창으로 주세요
    //    // this로 하면 이 오브젝트의 값을 달라는 말, buttons[i] = this
    // }
};

function clickFunc() {
    alert(this.innerHTML);
}
function mouseoverFunc() {
    this.style.background = 'yellow'; 
}
function mouseoutFunc() {
    this.style.background = '';
}


let onBtn = document.getElementById('turnOn');
onBtn.onclick = function() {
    let img = document.querySelector('#show>img'); 
    img.setAttribute('src', '../images/on.gif');
}
onBtn.onmouseover = function() {
    onBtn.style.background = 'yellow';
    onBtn.style.color = 'red';
}
onBtn.onmouseout = function() {
    onBtn.style.background = '';
    onBtn.style.color = 'black';
}
console.log(onBtn);
// 
let offBtn = document.getElementById('turnOff');
offBtn.onclick = function() {
    let img = document.querySelector('#show>img'); 
    img.setAttribute('src', '../images/off.gif');
}
offBtn.onmouseover = function() {
    offBtn.style.background = 'green';
    offBtn.style.color = 'white';
}
offBtn.onmouseout = function() {
    offBtn.style.background = '';
    offBtn.style.color = 'black';
}