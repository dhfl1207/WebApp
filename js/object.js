//object.js
let person1 = {
    firstName: 'Kildong',
    lastName: 'Hong',
    age: 15,
    setName: function (name) {
        this.firstName = name;
    },
    fullName: function() {
        return this.firstName + ', ' + this.lastName;
    }
}

person1.firstName;
console.log(person1.lastName);
person1.setName('Nice');
console.log(person1.fullName()); 
//function에서 ()는 꼭 필요

// document.getElementById();
let str = new String('hello');
let newStr = str.replace('ll','rr');
console.log(newStr);

console.log(str.length); //5


//
let text = 'Please locate where "locate" occurs!😊';

let loc = text.indexOf('locate'); //indexOf는 문자열에서 같은 값의 위치 찾는 것
//lastIndexOf(); 뒤에서 부터 찾음

if(loc != -1) {
    console.log(loc);  //?
} else {
    console.log("값을 찾을 수 없습니다.")
}

let substring = text.substring(0, 6); 
//substring 앞 숫자는 포함하고 뒷 숫자는 포함하지 않는 범위에 있는 값을 찾아준다. 
console.log(substring);
let subStr = text.substr(7, 6);
console.log(subStr);

let strSlice = text.slice(-15, -9);
console.log(strSlice);
console.log(text);

let url = 'https://www.daum.net';
let firstPos = url.indexOf('.');
let lastPos = url.lastIndexOf('.');
console.log(url.substring(firstPos + 1, lastPos));
console.log(url.substring(lastPos + 1));

let ary = 'apple,melon,mango,banana';
let strAry = ary.split(','); //,를 기준으로 잘라서 배열에 넣어준다.
for(let str of strAry) {
    console.log(str);
}

let str1 = 'Scroll this window to see the "fixed" effect.';
let str1Ary = str1.split(' '); //띄어쓰기 단위로 자르기
let newText = document.getElementById('new');
for(let str of str1Ary){
    newText.innerHTML += '<button>' + str + '</button>';
}