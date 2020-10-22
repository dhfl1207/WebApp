//variable.js
let var1 = 10;
var1 = "hello";
//let var1 = 20; //3,4번 줄의 차이는 뭐지?
//console.log(typeof var1); //typeof는 뭔라고?/ 타임을 보여주는 변수인 것 같음

// var var2 = 20;
// console.log(var2);

// var var2 = "hello"

//const는 값이 바뀔 수 없다 상수(값이 유지된는 것)르 이용할 때 사용한다 .
// const var2 = "20";
// var2 = 20;

let num1 = 10;
let num2 = "10";
num2 = 10;

if (num1===num2) { //===은 값과 타입이 동일한지도 보겟다는 것 
    //console.log('same');// 한 문장은 ;이 없어도 오류는 안난다, 옆으로 두 문장을 쓸거면 ; 으로 구분
} else {
    //console.log('diff');
}

num2++;

//Boolean도 있다.
let trueOrFalse = true;
if (trueOrFalse) {
   // console.log(true);
}

//num2 = 0;
num2 = null;
let num3;
if(num3) {  //num2가 값이 숫자면 true, 0이거나null이면 false임
    //console.log (true);
} else {
    //console.log(false);
}
//console.log(typeof num3); //값이 없고 선언만 되어 있어서 undefined 나옴

let person = {
    name: 'Hong',
    age: 20,
    score: 80
}

person.hobby = 'reading';

//console.log(person.name)
//console.log(person.age)
//console.log(person)

let persons = [person, {
    name:'Kwak', 
    age:25, 
    score: 90
    }];//동일한 타입들을 넣을 것
//console.log(persons[0].age + persons[1].age);

persons.push({
    name:'Choi', 
    age: 27, 
    score:100
}); //push 메소드로 배열을 추가, persons라는 배열변수 들어가있다.

persons[persons.length] = {
name:'Park',
age: 22,
score: 88
}// 배열 추가하는 방법

//console.log('persons length :'+ persons.length);

//for(let i =0; i < persons.length; i++) {
for(let per of persons){ //p는 변수, 변수 이름은 마음대로 선언하면 돼, persons의 내용을 하나씩 담겠다
    //console.log(per.name + ',' + per.age + ','+ per.score);
}


let ulTag = document.createElement('ul');

for (str of persons) {
    console.log(str.name);
    let liTag = document.createElement('li');
    liTag.innerHTML = str.name;
    ulTag.append(liTag);
}
let show = document.getElementById('show');
show.append(ulTag);
// console.log(ulTag)
