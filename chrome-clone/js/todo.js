const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// 추가한 todo list를 저장하려면 배열이 필요함
// toDos 배열이 빈 배열일 경우
// 1. newTodo를 작성하고 form을 submit 할때마다, newTodo를 toDos 빈 배열에 그냥 push 하게됨
// 2. 그리고, toDo를 저장할 때, 새로운 toDo들만 포함하고 있는 array를 저장하는 것임
// 3. 해당 toDos 배열은 이전의 toDo 들을 갖고 있지 않음
// 4. 전에 있던 toDo들은 localStorage에 들어있고,
// 5. 새로운 toDo들은 사용자가 입력하는 것들임
// - 해결 방법
// 1, const를 let으로 바꿔서 update 가능하게 하고 localStorage에 toDo가 들어있으면
// ★ 여기에서 toDos는 항상 빈 배열로 시작함. 우리가 원하는 것은 우리가 toDos array를 시작할 때, localStorage에 있는 이전의 TOdO들로 하고 싶은 것
let toDos = [];

// saveTodo() 역할은 localStorage에 toDos array의 내용을 넣는 것
function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// todolist Delete
// event를 파라미터로 넣은 이유 : 어떤 button이 클릭되었는지 알기 위해
function deleteTodo(event) {
  // 아래 코드로 인하여, 여러 li중 어떤 li가 클릭됐는지 정보를 알 수 있다.
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //우리가 클릭한 li.id와는 다른 toDo를 남기기 위한 작업
  saveTodos();
}

//  li에 todo list add 동작 함수
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  //   input의 value를 비우기 전의 값을 나타냄.
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  // todo list를 삭제하기 위해 객체로 만들어서, 각각에 id 부여하여 li item을 구별하고 싶은 것임
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), //id 부여하는 방법
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveTodos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

//localStorage에 값이 존재한다면
if (savedTodos !== null) {
  //localStorage는 string으로 값을 가지고 있기 때문에, js에서 사용 가능한 object로 변경하기 위한 작업
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  // JS에서는 배열에 있는 각각의 item에 대해 함수를 실행할 수 있게 해줌
  // forEach는 함수를 실행하게 해주는데, array에 있는 각각의 item에 대해서 실행해줌
  // 가장 좋은 건 처리되고 있는 item이 어떤 것인지 아는 것임
  // js에서는 event 인수를 제공하는 것처럼, 지금 처리되고 있는 item 또한 제공해줌.
  // parsedToDos에 있는 각각의 item에 대해서 console를 한다는 의미
  parsedToDos.forEach(paintToDo);
}

// 같은 문법, 의미
// 1. parsedToDos.forEach((item) => console.log("this is", item));
// 2. function sayHello(itme) {
//   console.log("this is", item);
// }

/*
filter()
삭제할 시, 지우고 싶은 item을 빼고 새 array를 만드는 것인데, item을 지우는 게 아니라 item을 제외 하는 것임
예전 배열은 그대로 있고, 지우고 싶은 item을 제외하고 새 배열을 만드는 것임
또한, filter(함수) --> 인수로 넣은 함수는 반드시 true를 리턴해야 됨.
false를 리턴하면 그 item은 새 배열에 포함되지 않음.
!! 지우고 싶은 item을 제외 !!
*/

/*
1. To-Do-List 작성시 localStorage 에 저장이 됩니다.
2. 근데 저장이 될때 string data type 으로 저장이 되요. (예: "[a,b,c,d,e]")
3. 그래서 JSON.parse()를 통해 string data type을 object로 바꾼거에요. 근데 이 Object는 Array 같이 바뀌었어요. 즉 index를 통해 value를 access할수 있어요
예: "[a,b,c,d]" (string) => [a, b, c, d] (array);
array[0] = a; array[1] = b; array[2] = c; array[3] = d
5. array 형태가 된 값을 parsedToDos 라는 const variable 에다가 넣어놨어요.
6. 이 상태에서 parsedToDos 는 array 형태라고 가정했을때 .foreach() 라는 function 을 사용할수 있는데 이건 mdn 웹사이트 가면 나오지만 그냥 단순히 array 에 들어있는 모든 값을 iterate (순찰(?)) 할수 있는 function 입니다.
7. 즉 index 0 부터 마지막 index 까지 한바뀌 도는건데 돌면서 그 값들을 item 라는 곳 또는 element에 (이름은 정하기 나름) 저장이 되는거에요.
ex)
Array = [ a, b, c, d]
Array.foreach( (item) => console.log(item))
// output:
a
b
c
d
여기서 부터 설명이 좀 어려운데 밑에 있는 웹사이트 가서 editor로 좀 놀아보시면 .foreach()가 이해 되실거에요. for loop 이나 while loop 으로 할수 있는 기능을 더 짧은 코드로 할수 있게 만든것 같아요 ^^
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
