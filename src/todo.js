const toDoForm = document.querySelector(".todo-form");
const toDoList = document.querySelector(".todo-list");
const doIt = toDoList.querySelector(".do-it");
const end = toDoList.querySelector(".end");
const doInput = toDoForm.querySelector("input");

const localToDo = "ToDo";

// preventdefault
function preventEnter(event) {
  event.preventDefault();
  const inputValue = doInput.value;
  paintToDo(inputValue);
  doInput.value = "";
}
toDoForm.addEventListener("submit", preventEnter);

// 할일에 적은것 가져오기

let toDos = []; // 할일 목록을 기록할 배열

function paintToDo(value) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = `${value}`;

  const delBtn = document.createElement("button");
  delBtn.textContent = "삭제";
  delBtn.addEventListener("click", doItRemove);

  li.appendChild(span);
  li.appendChild(delBtn);

  const newId = toDos.length + 1;

  li.id = newId;

  doIt.appendChild(li);

  const toDoObj = {
    value,
    id: newId,
  };

  toDos.push(toDoObj);
  saveToDos();
}

function loadToDos() {
  const loadToDo = localStorage.getItem(localToDo);

  if (loadToDo) {
    const parsedToDos = JSON.parse(loadToDo);
    parsedToDos.forEach((toDo) => paintToDo(toDo.value));
  }
}

function saveToDos() {
  localStorage.setItem(localToDo, JSON.stringify(toDos));
}

function doItRemove(event) {
  const remove = event.target.parentNode;
  const update = toDos.filter((todo) => {
    return todo.id !== remove.id * 1;
  });
  doIt.removeChild(remove);

  toDos = update;
  saveToDos();
}
function init() {
  loadToDos();
  console.log(toDos);
}

init();
