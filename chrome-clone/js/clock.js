/*
Interval : '매번' 일어나야 하는 무언가
ex) 매 2초마다

*/

const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

/*
setInterval()
1. 해당 함수는 2개의 인수를 받는다
- 첫번째 인수 : 내가 실행하고자 하는 함수
2. 두번째 인수 ; 호출되는 함수 간격을 몇 ms로 할지 쓰면 됨
*/
getClock();
setInterval(getClock, 1000);

/*
padStart()
1. string에 쓸 수 있는 함수
2. padStart(2, "0") : string의 길이를 두자리로 만들고, 두자리가 아니면 앞쪽에 0을 추가하는 코드 
*/
