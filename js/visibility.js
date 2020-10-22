let divTag1 = document.createElement('div');
divTag1.setAttribute('class', 'v1');
let img1 = document.createElement('img');
img1.setAttribute('src', '../images/pic1.jpg');
divTag1.append(img1);
console.log(divTag1);


let divTag2 = document.createElement('div');
divTag2.setAttribute('class', 'v2');
let img2 = document.createElement('img');
img2.setAttribute('src', '../images/pic1.jpg');
divTag2.append(img2);


let divTag3 = document.createElement('div');
divTag3.setAttribute('class', 'v3');
let img3 = document.createElement('img');
img3.setAttribute('src', '../images/pic1.jpg');
divTag3.append(img3);


let divTag4 = document.createElement('div');
divTag4.setAttribute('class', 'v2');
let img4 = document.createElement('img');
img4.setAttribute('src', '../images/pic1.jpg');
divTag4.append(img4);

// let bdy = document.querySelectorAll('body');
// bdy[0].append( divTag1, divTag2, divTag3, divTag4);
//밑에 써주니까 삭제함




let divTag = document.createElement('div');
divTag.setAttribute('class', 'row');

let ulTag = document.createElement('ul');
ulTag.setAttribute('id', 'first');

let liTag1 = document.createElement('li');

let liTag2 = document.createElement('li');

let liTag3 = document.createElement('li');

let liTag4 = document.createElement('li');

let liTag5 = document.createElement('li');

let liTag6 = document.createElement('li');

ulTag.append(liTag1, liTag2, liTag3);


let olTag = document.createElement('ol');
olTag.setAttribute('id', 'last');

liTag1.innerHTML = 'menu1';

liTag2.innerHTML = 'menu2';

liTag3.innerHTML = 'menu3';

liTag4.innerHTML = 'sub1';

liTag5.innerHTML = 'sub2';

liTag6.innerHTML = 'sub3';

olTag.append(liTag4, liTag5, liTag6);

divTag.append(ulTag, olTag);

let bdy = document.querySelectorAll('body');
bdy[0].append(divTag, divTag1, divTag2, divTag3, divTag4);


