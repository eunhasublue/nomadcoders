// 방법 1
// id="login-form" 인 tag의 정보를 가져옴
// const loginForm = document.getElementById("login-form");

// input이랑 button을 끌어옴
// document 대신에 loginForm에서 찾기
// const loginInput = loginForm.querySelector(".input");
// const loginButton = loginForm.querySelector(".button");

// 방법 2
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장    하고 싶을 때 사용
// 중요한 정보를 담는 것이 아니기도 하기 때문.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// const loginButton = document.querySelector("#login-form button");

/*
onLoginSubmit({information})
1. 첫번째 인수로 발생할 일에 대해 우리가 필요로 할만한 정보들을 주는 것
*/
function onLoginSubmit(event) {
  /*
   preventDefault : 어떤 event의 기본 행동이든지, 발생되지 않도록 막는 것
    - 아래 함수에서 우리가 하는 일은 브라우저가 기본 동작을 실행하지 못하게 막는 것뿐
    - preventDefault 호출하면, 브라우저의 기본 동작을 막아줌
  */
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // input에 입력된 내용을 가져오는 방법
  // user 이름을 변수로 저장해주고 h1 태그안에 넣어줄 것임
  const userName = loginInput.value;

  /*
localStorage
1. 우리가 브라우저에 무언가를 저장할 수 있게 해줌, 그래서 나중에 가져다 쓸 수 있음.
2. localStorage에 뭐가 들어있는지 알고싶으면 출력해서 개발자도구에서 보면 됨.
3. localStorage.setItem(key, value) : localStorage에 정보를 저장할 수 있음 
4. localStorage.getItem(key) : 저장된 정보를 가져올 수 있음
5. localStorage.removeItem(key) : 저장된 정보를 삭제할 수 있음
*/
  localStorage.setItem(USERNAME_KEY, userName);
  //   greeting.classList.remove(HIDDEN_CLASSNAME);

  paintGreeting(userName);
  /*
  아래 텍스트를 넣어주는 작업은 둘다 같은 의미
  ${} 
  - 두가지 규칙이 있음
  1. 변수와 string을 결합하고 싶거나, 변수를 string 안에 집어넣고 싶다면 ${변수명} 이렇게 하면 됨
  2. `` (백틱 기호) 로 감싸줘야 함
  */
  //   greeting.innerText = "Hello " + userName;
  //   greeting.innerText = `Hello ${userName}`;

  // preventDefault 호출하고, input을 submit하면 새로고침이 안됨
  console.log(loginInput.value);
  //   if (userName === "") {
  //     alert("Please wrtie your name");
  //   } else if (userName.length > 15) {
  //     alert("Your name is too long.");
  //   }
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // loginButton 클릭 시, 2번째 인수인 함수가 실행됨.
  // input type="submit" 으로 했기 때문에 아래 이벤트 리스너는 더이상 필요없음
  // loginButton.addEventListener("click", onLoginBtnClick);
  // 브라우저는 우선 onLoginSubmit 함수를 호출하고, 브라우저가 함수를 실행시키고 있긴 하지만, 브라우저는 브라우저 내에서 event로부터 정보를 잡아내서
  // onLoginSubmit 실행 버튼을 누르고 있음
  // addEventListener : 첫번째 인수는 지금 막 벌어진 일들에 대한 정보가 됨
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // 새로고침 할 경우
  // show the greetings
  paintGreeting(savedUsername);
}

/*
submit event가 발생하면, 브라우저가 알아서 onLoginSubmit 함수를 실행시킴
onLoginSubmit() : 옆에 괄호을 더하면 브라우저가 보자마자 자동으로 이 function을 실행시켜버림
addEventListener : 함수를 바로 실행시키는 것이 아닌, "submit(지정한) event"가 발생할때만 해당 funciton을 실행시킴.

배운 것
우리가 아무것도 하지 않음으로써, JS가 어떤 정보(event object를 담은 정보를)를 담은 채로 함수를 호출함
function onLoginSubmit(event)
*/

/* 
addEventListener를 만들고 거기에 함수를 줬다는걸 js가 보게되면, js는 누군가가 클릭할때, 우리를 위해 함수를 실행함
handleLinkClick 함수를 내가 실행시키는 것이 아님 
handleLinkClick() 괄호를 추가하면, 이 함수는 한번만 실행하고 끝남. 우린 그걸 원하지 않음
우리는 JS한테 함수 이름만 주고 실행하는건 JS 몫임.
하지만, 가끔 우리는 기본 동작을 막아야할 필요가 있음
가끔은 무엇이 클릭됐는지 어디가 클릭됐는지 등 정보를 알고 싶을 때가 있음.
그럴때, JS는 단순히 함수를 실행시키기만 하는게 아니라 JS는 함수를 실행시킴과 동시에 그 함수 첫번째 인수로 객체를 넣어 줌 : handleLinkClick({object})
그리고 이 객체에는 방금 일어난 이벤트에 대한 여러 정보가 담겨 있음 : handleLinkClick({information about the event that just happened})
그래서 우리가 하는건 함수에 event만 받기만 하면 됨
중요한 것은 addEventListener 안에 있는 함수는 직접 실행하지 않는다는 것임. 브라우저가 해주는 것임
브라우저는 실행만 시키는 것이 아닌, event에 대한 정보도 줌
*/
function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
  //   alert("click");
}
const link = document.querySelector("a");
link.addEventListener("click", handleLinkClick);
