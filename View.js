class View {
  constructor (model) {
    this.model = model   // store the model as a property
  }
  init () {   // target relevant elements
    this.inputs = {  // inputs here
      handDisplay,
      pole1Display: $('#pole1'),
      pole2Display: $('#pole2'),
      pole3Display: $('#pole3')
    }
    this.listen()
  }
  listen () {     // associate event listeners with inputs
                // When a pole is clicked, select pole to get or place a ring
    this.inputs.pole1Display.on('click', function () {
      selectPole(1)
      console.log("CLICK")
    })
    this.inputs.pole2Display.on('click', function () {
      selectPole(2)
    })
    this.inputs.pole3Display.on('click', function () {
      selectPole(3)
    })
  }
}

  // Check if you are holding a ring, if not, pick one up. If yes, try to place the ring.
  // 1 = pick up, 2 = place, 0 = do nothing

function selectPole (num) {
  var action = this.model.selectPoleLogic(num)
  switch (num) {
    case 1:
    if (action === 1) {
      handDisplay = pole1Display.children().last()
      pole1Display.children().last().detach()
    } else if (action === 2) {
      pole1Display.append(handDisplay)
    }
    break
    case 2:
    if (action === 1) {
      handDisplay = pole2Display.children().last()
      pole2Display.children().last().detach()
    } else if (action === 2) {
      pole2Display.append(handDisplay)
    }
    break
    case 3:
    if (action === 1) {
      handDisplay = pole3Display.children().last()
      pole3Display.children().last().detach()
    } else if (action === 2) {
      pole3Display.append(handDisplay)
    }
    break
  }
}


// method/variable graveyard:

  // ringSmallDisplay :$('#ringSmall'),
  // ringMediumDisplay : $('#ringMedium'),
  // ringLargeDisplay : $('#ringLarge'),
