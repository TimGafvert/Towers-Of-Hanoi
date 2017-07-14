/* global $ */
$(document).ready(function () {
  const logic = new Logic()
  const display = new Display(logic)
  display.init()
  display.listen()
  display.listen2()

})
