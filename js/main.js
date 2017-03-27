function setTimeNow() {

  var hh, mm, ss;
  var rotateH, rotateM, rotateS;

  // get time
  var now = new Date();

  // convert to hh, mm, ss
  hh = now.getHours();
  mm = now.getMinutes();
  ss = now.getSeconds();

  // convert hours from 24 to 12 hours (0-23 -> 0-11)
  if (hh >= 12) {
    hh = hh - 12;
  }

  // convert to rotations (degrees)
  // these extra variables were completely unnecessary,
  // but I kept getting confused when I was writing out the math... so...
  var hourSeconds = hh * 60 * 60;  // hours digit converted to seconds
  var minuteSeconds = mm * 60;     // minutes digit converted to seconds
  var secondSeconds = ss;          // yeah, I know.
  var hourSecondsFull = 12 * 60 * 60;   // full sweep of hour hand, in seconds
  var minuteSecondsFull = 60 * 60;      // full sweep of minute hand, in seconds
  var secondSecondsFull = 60;           // full sweep of second hand, in seconds

  rotateH = ((hourSeconds + minuteSeconds + secondSeconds) / hourSecondsFull)   * 360;
  rotateM =               ((minuteSeconds + secondSeconds) / minuteSecondsFull) * 360;
  rotateS =                                (secondSeconds  / secondSecondsFull) * 360;

  // set css rotations
  $('#pivotHour').css({
    transform: "rotate(" + rotateH + "deg)"
  });

  $('#pivotMinute').css({
    transform: "rotate(" + rotateM + "deg)"
  });

  $('#pivotSecond').css({
    transform: "rotate(" + rotateS + "deg)"
  });

} // end setTimeNow

$(document).ready(function(){

  setTimeNow();

}); // end document ready
