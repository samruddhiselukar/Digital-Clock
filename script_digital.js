setInterval(() => {
  const date = new Date();

  let hours = String(date.getHours()).padStart(2, 0);
  const mins = String(date.getMinutes()).padStart(2, 0);
  const seconds = String(date.getSeconds()).padStart(2, 0);
  if (hours === "0") {
    hours = "12";
  }
  if (hours > "12") {
    hours -= "12";
    document.getElementById("am_pm").innerHTML = "PM";
  }
  // hours.padStart(2, 0);
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = mins;
  document.getElementById("seconds").innerHTML = seconds;
  // const am_pm =
  //   hours >= 12
  //     ? (document.getElementById("am_pm").innerHTML = "PM")
  //     : (document.getElementById("am_pm").innerHTML = "AM")
}, 1000);
