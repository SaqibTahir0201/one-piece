const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`JANUARY  1 ${currentYear + 1} 00:00:00`);

function updateCountdownTime() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24); //@ DAYS
  const h = Math.floor(diff / 1000 / 60 / 60) % 24; //@ HOURS
  const m = Math.floor(diff / 1000 / 60) % 60; //@ MINUTES
  const s = Math.floor(diff / 1000) % 60; //@ SECONDS

  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}

setInterval(updateCountdownTime, 1000);