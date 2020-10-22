//function.js

//1.
function sumFunc(var1, var2) { //():실행하세요 js는 괄호 안에 변수 선언을 할 필요가 없다 밑에서 let으로 할거니깐
    let num1, num2;
    num1 = var1;
    num2 = var2;
    let result = num1 + num2;

    console.log(result);
    // return result; //return을 왜?/ 괄호 안에 있으면 삭제 가능, 밖에 있으면 return이 있어야 결과를 출력할 수 있다.  
}
let a = sumFunc(33, 44);

//2.
let multiFunc = function () { //mulfiFunc의 기능
    let num1 = 10,
        num2 = 20;
    return num1 * num2;
}
console.log(multiFunc());


//
function callBackFunc(func, val1) { //func정의 구문을 매게값으로 넣을 수 있다
    return func() + val1;
}
b = callBackFunc(multiFunc, 11);
console.log(b);

document.write(b);




//
function myFun(v1, v2) {
    let sumFunc = 0;
    let i = v1;
    let j = v2;

    // if (i <= j) {
    //     for (i = v1; i < j + 1; i++) {
    //         sumFunc += i;
    //         //sumFunc = sumFunc + i; 
    //     }
    // }else if (j < i) {
    //     for (j = v2; j < i + 1; j++) {
    //         sumFunc += j;
    //     }
    // }

    for (i = v1; i < j; i++) {
        sumFunc += i;
    }
    for (j = v2; j < i + 1; j++) {
        sumFunc += j;
    }

    return sumFunc;
}
// let c = myFun(1,5)
console.log(myFun(5, 1));


// // sum = myFunc2(1,5)
// let multiFunc = function () { //mulfiFunc의 기능
//     let num1 = 10,
//         num2 = 20;
//     return num1 * num2;
// }
// console.log(multiFunc());

//
let myFunc2 = function () {
    let sumFunc = 0;
    let i = 1,
        j = 5;
    if (i < j) {
        for (i = 0; i < j + 1; i++) {
            sumFunc += i;
        }
    } else if (j < i) {
        for (j = 1; j < i; j++) {
            sumFunc += j;
        }
    }
    return sumFunc; //위치를 살펴보자
}
console.log(myFunc2()); // 왜 안나오지?