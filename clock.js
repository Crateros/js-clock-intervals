
var seconds = 0;
var minutes = 0;
var hours = 0;

//Increment seconds, minutes, and hours each time secondsTimer fires, target DOM element, perform transform
function clockHands() {
  seconds += 6;

  var sec = document.getElementById("second");
  var min = document.getElementById("minute");
  var hour = document.getElementById("hour");
  sec.style.transform = "rotate(" + seconds + "deg)";
  console.log('seconds:', seconds);
  if(seconds > 360) {
    minutes += 6;
    min.style.transform = "rotate(" + minutes + "deg)";
    console.log('minutes:', minutes);
    seconds = 6;
  }
  if(minutes > 360) {
    hours += 30;
    hour.style.transform = "rotate(" + hours + "deg)";
    console.log('hours:', hours);
    minutes = 6;
  }
  if(hours > 360) {
    hours = 30;
  }
}

//Call secondsHand function every 100ms
var secondsTimer = setInterval(clockHands, 1000);
//
// //Increment minutes each time minutesTimer fires, target DOM element, perform transform
// function minutesHand() {
//   min.style.transform = "rotate(" + minutes + "deg)";
//   if(minutes > 360) {
//     minutes = 6;
//   }
//
// }
//
// //Call minutesHand function every 600ms
// var minutesTimer = setInterval(minutesHand, 600);
//
// //Increment hours each time minutesTimer fires, target DOM element, perform transform
// function hoursHand() {
//   hours += 30;
//   var hour = document.getElementById("hour");
//   hour.style.transform = "rotate(" + hours + "deg)";
//   if(hours > 360) {
//     hours = 30;
//   }
//
// }
// //Call hoursHand function every 3600ms
// var hoursTimer = setInterval(hoursHand, 36000);
