const clock = document.querySelector(".clock");

function handleTime() {
  const timeNow = new Date();
  const year = timeNow.getFullYear();
  let month = timeNow.getMonth();
  month += 1;
  const date = timeNow.getDate();
  const hours = timeNow.getHours();
  const minutes = timeNow.getMinutes();
  const seconds = timeNow.getSeconds();

  clock.innerText = `${year}년 ${month}월 ${
    date < 10 ? `0${date}일` : `${date}일`
  }  
  
  ${hours < 10 ? `0${hours}` : `${hours}`}:${
    minutes < 10 ? `0${minutes}` : `${minutes}`
  }:${seconds < 10 ? `0${seconds}` : `${seconds}`}
  `;
}

function init() {
  setInterval(handleTime, 1000);
}

init();
