//add a stopwatch to track how long you have been playing. 
var startTime;
function begin() {
  // CHANGE THE TIME HERE 
  startTime = 00 + ":" + 05;
  startTimer();
}
begin();


function startTimer() {
  $("#alert").hide();
  var presentTime = startTime
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if (s == 59) { m = m - 1 }
  if (m < 0) {
    $("#alert").show();
    return
  }

  startTime = m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);

}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
  if (sec < 0) { sec = "59" };
  return sec;
}