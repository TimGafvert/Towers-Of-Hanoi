class View {
  constructor (model) {
    this.model = model   // store the model as a property
  }
  init () {   // target relevant elements
    this.inputs = {  // inputs here
      ringSmallDisplay :$('#ringSmall'),
      ringMediumDisplay : $('#ringMedium'),
      ringLargeDisplay : $('#ringLarge'),
      handDisplay,
      pole1Display : $('#pole1'),
      pole2Display : $('#pole2'),
      pole3Display : $('#pole3')
    }
    this.listen()
  }
  listen () {     // associate event listeners with inputs
                // When a pole is clicked, select pole to get or place a ring
    this.inputs.pole1Display.on('click', function () {
      selectPole(1)
    })
    this.inputs.pole2Display.on('click', function () {
      selectPole(2)
    })
    this.inputs.pole3Display.on('click', function () {
      selectPole(3)
    })
  }
}






  // Check if you are holding a ring, if not, pick one up. If yes, try to place the ring
    function selectPole (num) {
      switch (num) {
        case 1:
          if (!ringIsSelected) {
            if (pole1.length > 0) {
              ringIsSelected = true
              hand = pole1.pop()
              handDisplay = pole1Display.children().last()
              pole1Display.children().last().detach()
            }
          } else {
            if ((pole1.length === 0) || (pole1[pole1.length - 1] < hand)) {
              ringIsSelected = false
              pole1.push(hand)
              pole1Display.append(handDisplay)
            }
          }
          break
        case 2:
          if (!ringIsSelected) {
            if (pole2.length > 0) {
              ringIsSelected = true
              hand = pole2.pop()
              handDisplay = pole2Display.children().last()
              pole2Display.children().last().detach()
            }
          } else {
            if ((pole2.length === 0) || (pole2[pole2.length - 1] < hand)) {
              ringIsSelected = false
              pole2.push(hand)
              pole2Display.append(handDisplay)
            }
          }
          break
        case 3:
          if (!ringIsSelected) {
            if (pole3.length > 0) {
              ringIsSelected = true
              hand = pole3.pop()
              handDisplay = pole3Display.children().last()
              pole3Display.children().last().detach()
            }
          } else {
            if ((pole3.length === 0) || (pole3[pole3.length - 1] < hand)) {
              ringIsSelected = false
              pole3.push(hand)
              pole3Display.append(handDisplay)
            }
          }
          break
      }
    }

}
