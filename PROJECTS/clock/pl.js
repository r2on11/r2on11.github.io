
setInterval(sClock, 1000)

var hourHand = document.querySelector('[data-hour-hand]');
var minuteHand = document.querySelector('[data-minute-hand]');
var secondHand = document.querySelector('[data-second-hand]');

function sClock() {
  var currentDate = new Date();
  var secondsRatio = currentDate.getSeconds() / 60;
  var minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  var hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(hourHand, hoursRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(secondHand, secondsRatio);
}

function setRotation(element,rotationRatio) {
  element.style.setProperty ('--rotation', rotationRatio * 360);
}

sClock();