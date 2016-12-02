
document.addEventListener("DOMContentLoaded", function(event) {
var seconds = 0;
var timerSeconds;
var minutes = 0;
var timerMinutes;
var hours = 0;
var timerHours;
var digitalS = document.getElementById("digiSeconds");
var digitalM = document.getElementById("digiMinutes");
var digitalH = document.getElementById("digiHours");

//Increment seconds, minutes, and hours each time secondsTimer fires, target DOM element, perform transform
function clockHands() {
  seconds += 6;
  digitalS.innerHTML = seconds / 6;
  var sec = document.getElementById("second");
  var min = document.getElementById("minute");
  var hour = document.getElementById("hour");
  sec.style.transform = "rotate(" + seconds + "deg)";

  if(seconds >= 361) {
    minutes += 6;
    digitalM.innerHTML = minutes / 6 + " :";
    min.style.transform = "rotate(" + minutes + "deg)";
    seconds = 6;
    digitalS.innerHTML = 1;
  }
  if(minutes >= 361) {
    hours += 30;
    digitalH.innerHTML = hours / 30 + " :";
    hour.style.transform = "rotate(" + hours + "deg)";
    minutes = 6;
    digitalM.innerHTML = 1 + " :";
  }
  if(hours >= 721) {
    hours = 0;
      digitalH.innerHTML = 0 + " :";
  }
}

//Call secondsHand function every 100ms
var secondsTimer = setInterval(clockHands, 100);

});
