//opacity.js
//<body><div>Hello</div></body>
// <div class='background'>
let divTag = document.createElement('div'); //div 요소를 만들어서 divTag에 넣어줌
// divTag.innerHTML = 'Hello';     //tag에 값 넣음
divTag.setAttribute('class', 'background'); //background라는 class 만듬?

// <div class='box'>
let divBox = document.createElement('div');
divBox.setAttribute('class', 'box');

// <p>HTML5 웹 프로그래밍</p>
let pTag = document.createElement('p');
pTag.innerHTML = 'HTML5 웹 프로그래밍';

// divTag>divBox>pTag
divTag.append(divBox);
divBox.append(pTag);

console.log(divTag);

let bdy = document.querySelectorAll('#bdy');
console.log(bdy);

bdy[0].append(divTag);