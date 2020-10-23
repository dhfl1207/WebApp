//object_ary.js
let apples = ['apple'];

apples[apples.length] = 'banana'; //배열 추가
apples[apples.length] = 'mango';

apples.push('melon') //배열 마지막에 추가
apples.push('strawberry')

apples.unshift('grape'); //unshift는 맨 앞에 추가

apples.pop(); //배열의 마지막것을 제거
apples.pop();

apples.shift(); //배열의 첫 번째것을 제거

// delete apples[1]; //자리 값의 것을 제거, undefined이 된다. undefined을 빼달라는 것을 추가해줘야해
apples.splice(1, 1, 'new apple', 'new mango'); 
// index: 1에서 하나 삭제, 여러개도 삭제 가능, 삭제한 자리에 대체도 가능 'new apple'

for(let fruit of apples) {
    console.log(fruit);
}

let fruits = ['apple', 'banana', 'mango', 'melon', 'grape'];
let newFr = fruits.slice(0, 3); //잘라서 새로운 배열로 만들어줌
console.log(fruits);
console.log(newFr);

for(let i = 0; i<fruits.length; i++) {
} //인덱스를 사용하고 싶으면

for(let fruit of fruits) {
}//요소들을 사용하고 싶으면\

console.clear(); //이 전의 로그들 지우기


//forEach 반복, 배열 일때만 사용할 수 있다. 
let tags = '<ul>';
fruits.forEach(function(a, b, c) {  //a=?배열의 요소 b=인덱스 값 c=배열 자체
    tags += '<li>' + a + '</li>'
    // if ( b%2 == 0) { //짝수의 요소만 
    //     console.log(a, b);
    // }
});
tags += '</ul>';
console.log(tags);

let newBtn = document.getElementById('new');
newBtn.innerHTML += tags; //+=은 기존의 내용이랑 같이 

//연습
let intAry = [3, 5, 2, 6, 4, 8, 6];
let sum = 0;
// for(i of intAry) {
// sum += i;
//} 랑 같은 결과가 나오게 만들어보기
// intAry.forEach(function(a) {
//     sum += a;
// });
// console.log(sum);

intAry.forEach(function(a, b) {
    // if (a%2 != 0) {
    //     sum += a;
    // }
    if (b%2 == 1) {
        sum += a;
    }
});
console.log(sum);

//
let per1 = { //얘가 필드
    name:'Hong',
    age: 20, 
    hobby:'reading'
    
}
let per2 = { //얘가 필드
    name:'Hwang',
    age: 21, 
    hobby:'sleeping'
}
let per3 = { //얘가 필드
    name:'Kwak',
    age: 22, 
    hobby:'wirting'
}

let name = per1.name;  //per1은 오브젝트 
name = per1['name']; //name이라는 필드의 값을 가져오세요  = Hong
let age = per1['age'];

function getField(obj, field) {
   return obj[field]; // 해당되는 필드를 동적으로 가지고 오고 싶을 때 
//    return obj.field; 이렇게 쓰면 안돼 
}
name = getField(per1, 'name');//per1의 네임을 가지고 와서 
age = getField(per1,'age');

for(field in per1) { //for in은 오브젝트 안에 있는 필드 수 만큼 반복하면서 필드를 가지고 오겟다
    console.log(field);
}
console.log(age);

//
console.clear();
let persons = [per1, per2, per3]; //오브젝트를 배열에 담을 것

let newTag = '<table border=1>';
for(person of persons) { //of는 배열의 (건수만큼)요소를 하나씩 가지고 온다.
    newTag += '<tr>';
    for (field in person) { //필드마다 하나씩 돈다
        if(field == 'name') {
            newTag += '<td style="color:blue;">' + person[field] + '</td>';
        } else if (field == 'age') {
            newTag += '<td style="font-weight: bold;">' + person[field] + '</td>';
        } else {
            newTag += '<td>' + person[field] + '</td>';
        }
        // console.log(person[field]);  
    }
    newTag += '<td><button class="btn">OK</button></td></tr>';
}
newTag += '</table>';
newBtn.innerHTML = newTag;
//css의 선택자 방식으로 클래스명이 btn인 요소를 가지고 옴.
let btns = document.querySelectorAll('.btn');
console.log(btns);

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        let trTag = this.parentNode.parentNode;
        trTag.style.background = 'yellow';
        // console.log(this.parentNode.parentNode.remove());
    }
}

//css의 선택자를 tr로 찾아온다. 
let trs = document.getElementsByTagName('tr'); //td는 한칸 별로 
for(let i = 0; i<trs.length; i++) {
    trs[i].onmouseover = function() {
        this.style.background = 'cyan';
    }
    trs[i].onmouseout = function() {
        this.style.background = '';
    }
}