// basic2.js
let num1, num2, num3, result;

num1 = 10;
//num1 = "nice";
num2 = 20;
num3 = 6;
result = num1 * num2 + num3;

// if(num1 > num2 || num1 > num3) {
//     alert('large');
// } else {
//     alert('small')
// }

result = 0;
for (let i = 1; i <= 100; i++) {
    //if (i % 15 == 0)
    // continue
    if (i % 3 == 0 || i % 5 == 0 && i % 15 != 0)
        result += i;
}
console.log(result);


let cnt = 0;
result = 0;
while (cnt < 15) {
    result += cnt;
    cnt++;
}
console.log(result);
console.clear();

let intAry = [2, 3, 4, 5, 6, 7];
result = 0;
for (num of intAry) {
    console.log(num);
    result += num;
}
console.log(result);

let strAry = ['hello', 'nice', 'good', 'beautiful'];
for (str of strAry) {
    console.log(str);
}

let days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
let tag2 = document.createElement('ul');

// 1. 
//<ul><li>일요일</li><li>월요일</li>...<
// let ulTags = '<ul>';
// for (let i=0; i<days.length; i++) {
//     ulTags += '<li>' + days[i] + '</li>';
// }
// ulTags += '</ul>';
// console.log(ulTags);
// document.write(ulTags);

2.
for (str of days) {
    console.log(str);
    let tag = document.createElement('li'); //태그 만들어주기
    tag.innerHTML = str;
    tag2.append(tag);
    
}
let show = document.getElementById('show');
show.append(tag2);
// 화면에 띄워주는 연결