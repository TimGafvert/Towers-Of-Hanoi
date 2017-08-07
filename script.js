/* global $ */
$(document).ready(function () {
  const logic = new Logic()
  const display = new Display(logic)
  display.init()

  // Why have 2 listener setup functions?
  // Since these are called synchronously,
  // their contents could be dropped into one function
  //
  // display.listen()
  // display.listen2()
  //
  // We are already calling an init method on the Display object, to presumably
  // bootstrap our game. The listener setup can be called from there, reducing
  // clutter in this script.

})
