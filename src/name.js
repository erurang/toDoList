const form = document.querySelector(".name-form");
const input = form.querySelector("input");
const hi = document.querySelector(".hi");

// localstorage 의 키와 Css 스타일조정

const userName = "username";
const show = "show";
const hide = "hide";

// 엔터키를 누르면 제출이벤트가 생성되지 않도록

function preventEnter(event) {
  event.preventDefault();
  const inputValue = input.value;
  // 엔터를 누르면 제출 이벤트를 방지하는 대신에 인풋값을 받아서 보여주는 함수실행
  paintName(inputValue);
  saveName(inputValue);
}

form.addEventListener("submit", preventEnter);

// Input값을 받고 localstorage에 저장하는 함수
function saveName(value) {
  localStorage.setItem(userName, value);
}

// localstorage에 값이 있으면 가져와서 Load
function loadName() {
  const user = localStorage.getItem(userName);
  if (user) {
    paintName(user);
  }
}

// localstorage 키 삭제

function removeName() {
  localStorage.removeItem(userName);
  hi.classList.add(hide);
  form.classList.add(show);
}

// localstorage에 값이 있을때 가져와서 표현하기
function paintName(value) {
  form.classList.add(hide);
  hi.textContent = `안녕하세요 ${value}`;

  // 삭제 버튼 추가
  const btn = document.createElement("button");
  btn.textContent = "재설정";
  hi.append(btn);

  btn.addEventListener("click", removeName);
}

function init() {
  loadName();
}

init();
