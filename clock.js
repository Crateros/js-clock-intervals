
var seconds = 0;
var minutes = 0;
var hours = 0;

//Increment seconds each time secondsTimer fires, target DOM element, perform transform
function secondsHand() {
  seconds += 6;
  var sec = document.getElementById("second");
  sec.style.transform = "rotate(" + seconds + "deg)";
  if(seconds > 360) {
    seconds = 6;
  }
  console.log('seconds:', seconds);
}

//Call secondsHand function every 100ms
var secondsTimer = setInterval(secondsHand, 100);

//Increment minutes each time minutesTimer fires, target DOM element, perform transform
function minutesHand() {
  minutes += 6;
  var min = document.getElementById("minute");
  min.style.transform = "rotate(" + minutes + "deg)";
  if(minutes > 360) {
    minutes = 6;
  }
  console.log('minutes:', minutes);
}

//Call minutesHand function every 600ms
var minutesTimer = setInterval(minutesHand, 6000);

//Increment hours each time minutesTimer fires, target DOM element, perform transform
function hoursHand() {
  hours += 30;
  var hour = document.getElementById("hour");
  hour.style.transform = "rotate(" + hours + "deg)";
  if(hours > 360) {
    hours = 30;
  }
  console.log('hours: ', hours);
}
//Call hoursHand function every 3600ms
var hoursTimer = setInterval(hoursHand, 36000);
