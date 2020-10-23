// object_date.js
// document.getElementById('result').innerHTML = new Date();
//Date도 오브젝트로 값이 정해져있어 

//버튼 누르면 나오게 하기 
let showBtn = document.getElementById('showBtn');
showBtn.onclick = function () { //클릭하면 function이 작동하게 
    let year = document.querySelector('input[name="year"]').value; //년도 입력값 가지고 옴
    let month = document.querySelector("input[name='month']").value; // 달의 입역값
    let day = document.querySelector("input[name='day']").value; // 일의 입력값 
    // console.log(year, month, day); //받은 값을 console에 보여줌 
    let today = new Date(year, month, 0); //시스템 날짜로 지난달 마지막 날을 보여준다
    console.log(today.getDay()); //요일을 숫자로 알려줌
    console.log(today.getDate());  //지난달 말일을 알려줌
    document.getElementById('result').innerHTML = today; 
    
    // 달력만들기
    // 해당월의 전체일수: totalDay
    // 해당월의 1일의 요일정보: firstDay
    let totalDay = ; //전체 날 수 구하기
    let firstDay = new Date(year, month, 1); //첫 째날 구하기 
    let calTag = '<table border="1">';
    calTag += '<tr><td/><td/><td/>';
    for (let i = 0; i < totalDay; i++) {
        calTag += '<td>' + (i + 1) + '</td>';
        if (i % 7 == 6) {  //일주일 단위로 밑으로 내리기
            calTag += '</tr><tr>';
        }
    }
    calTag += '</tr></table>';
//id result 안에다가 달력
    document.getElementById('result').innerHTML = calTag;
}