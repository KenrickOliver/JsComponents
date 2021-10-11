// Clock Functionality

const hour = document.getElementById("clock-hour");
const minutes = document.getElementById("clock-minutes");
const seconds = document.getElementById("clock-seconds");

const clock = () => {
  let date = new Date();

  let hh = date.getHours() * 30;
  let mm = date.getMinutes() * 6;
  let ss = date.getSeconds() * 6;

  //adding rotation to clock hands
  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minutes.style.transform = `rotateZ(${mm}deg)`;
  seconds.style.transform = `rotateZ(${ss}deg)`;
};
setInterval(clock, 1000);

// Date and Time functionality
const textHour = document.getElementById("text-hour");
const textMinutes = document.getElementById("text-minutes");
const textAmPm = document.getElementById("text-ampm");
const dateDay = document.getElementById("date-day");
const dateMonth = document.getElementById("date-month");
const dateYear = document.getElementById("date-year");

const clockText = () => {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ampm;
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  //switch to 12 hour instead of 24 hours for more readable time
  if (hh >= 12) {
    hh = hh - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  // Chek if its was 12 AM
  if (hh == 0) {
    hh = 12;
  }

  // Since using 12 hours instad of 24, show 0s before
  //Os before hours
  if (hh < 10) {
    hh = `0${hh}`;
  }
  //Os before minutes
  if (mm < 10) {
    mm = `o${mm}`;
  }

  //Show am or pm
  textAmPm.innerHTML = ampm;

  //Show day, month and year
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  dateDay.innerHTML = day;
  dateMonth.innerHTML = `${months[month]},`;
  dateYear.innerHTML = year;

  //Showing the Time
  textHour.innerHTML = `${hh}:`;

  //Show minutes
  textMinutes.innerHTML = `${mm}`;
};

setInterval(clockText, 1000);
