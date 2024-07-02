"use strict";

const presentDay = document.getElementById("day");
const presentTime = document.getElementById("time");

setInterval(function () {
  const now = new Date();
  const currentTimeUTC = now.toUTCString().split(" ");
  const currentTime = currentTimeUTC[4];
  const currentDay = now.toLocaleString("en-us", { weekday: "long" });

  // console.log(currentTimeUTC);
  presentDay.textContent = currentDay;
  presentTime.textContent = currentTime;
}, 1000);
