//array.js

let intAry = [34, 52, 58, 22, 19, 30];
//1. index를 활용해서 배열의 총합.
// let sum = 0;
// for(i=0; i<intAry.length; i++){
//     sum += intAry[i]
// }
// console.log(sum);

//2. 확장 for를 활용. for ... of ..
// let sum = 0;
// for(let plus of intAry) {
//     //console.log(plus);
//     sum += plus;
//     //console.log(sum);
// }
// console.log(sum);

//3. 숫자 리스트 document 영역에 리스트로 보여주세요. ul. li
// let ulTag = document.createElement('ul');

// for(ary of intAry) {
//     console.log(ary);
//     let liTag = document.createElement('li');
//     liTag.innerHTML = ary;
//     ulTag.append(liTag);
// }
// let show = document.getElementById('show');
// show.append(ulTag);

//4. 숫자 35, 88을 배열의 마지막 위치에 추가.
// intAry.push(35);
// intAry.push(88);
//console.log(intAry);

//5. 합을 리스트의 마지막에 보여주세요.
let sum = 0;
for(let plus of intAry) {
    //console.log(plus);
    sum += plus;
    //console.log(sum);
}
// console.log(sum);


let ulTag = document.createElement('ul');

for(ary of intAry) {
    // console.log(ary);
    let liTag1 = document.createElement('li');
    liTag1.innerHTML = ary;
    ulTag.append(liTag1);
}
let liTag2 = document.createElement('li');
liTag2.innerHTML = '배열의 합 = ' + sum;
ulTag.append(liTag2);

// let show = document.getElementById('show');
// show.append(ulTag);



//교수님 실습
let boolAry = [true, false, true, 'a', 0];
let times = 0;
for(let var1 of boolAry) {
    if (var1) {
        //console.log(times++);
    }
} //이거는 뭐지???
//console.log(times);


let p1 = {
    name : 'hong',
    age : 15
}
let p2 = {
    name : 'hwang',
    age : 20
}
let p3 = {
    name : 'park',
    age : 22
}
let persons = [];
persons.push(p1);
persons.push(p2);
persons.push(p3);

// let tableTag = '<table border=1>';
// tableTag += '<tr><th>이름</th><th>나이</th></tr>'; //+=는 왜 ??
// for(let p of persons) [
//     tableTag += '<tr><td>'+ p.name + '</td><td>' + p.age + '</td></tr>'
// ]
// tableTag += '</table>'
// console.log(tableTag);
// let show = document.getElementById('show');
// show.innerHTML = tableTag;

//위랑 똑같은거 createElement로 만들어보기..../ border도 추가하기
let tableTag = document.createElement('table');
let trTag1 = document.createElement('tr')
let trTag2 = document.createElement('tr')
let trTag3 = document.createElement('tr')

for(let p of persons) {
    //console.log(p.name);
    //console.log(p.age);
    let tdTag1 = document.createElement('td');
    tdTag1.innerHTML = p.name;
    let tdTag2 = document.createElement('td');
    tdTag2.innerHTML = p.age

    trTag1.append(tdTag1, tdTag2);
}
 console.log(trTag1, );
let show = document.getElementById('show');
show.append(trTag1);
