const date = document.getElementById("date");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

//?  FUNCTION FOR TIMER

let time = setInterval(function () {
  let now = new Date();
  console.log(now.getDate);
  date.innerText = now.getDate();
  hours.innerText = now.getHours();
  minutes.innerText = now.getMinutes();
  seconds.innerText = now.getSeconds();
}, 1000);
