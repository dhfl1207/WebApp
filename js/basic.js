//int cnt = 0;
let cnt = 0;
let sum = 0;
//인덱스값이 짝수인 경우의 합
for(let i=0; i<10; i++) {
    //console.log(i + "Hello, World");
    if (i % 2 == 0 )
        sum += i;
}
console.log('합계:' + sum);

sum = "Hello";
console.log(sum);

let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('index[0] : ' + ary[0]);

sum = 0;

for(let i=0; i<10; i++) {
    if (i % 2 == 1 )
        sum += i;
}
console.log("배  열의 홀수 합계 : " + sum)

document.write("<ul>");
for (let i = 0; i <5; i++) {
    document.write('<li><b>반갑습니다</b></li>');
}
document.write("</ul>");

document.write('<h3>마우스를 올리면 선명하게 보입니다.</h3>')
document.write('<div><a href="http://www.google.com">구글 웹 사이트</a></div>')
document.write('<p></p>')
document.write('<div><img src="../images/pic1.jpg"></img> </div>')
