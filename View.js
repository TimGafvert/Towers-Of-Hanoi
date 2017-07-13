class Display {
  constructor (model) {
    this.model = model   // store the model as a property
  }
  init () {   // target relevant elements
    this.displays = {  // inputs here
      handDisplay: $('#pole1'),
      pole1Display: $('#pole1'),
      pole2Display: $('#pole2'),
      pole3Display: $('#pole3')
    }
    this.listen()
    this.model.testPrint('Initialized')
  }
  listen () {     // associate event listeners with inputs
                // When a pole is clicked, select pole to get or place a ring
    this.model.testPrint('Listeners attached')
    this.displays.pole1Display.on('click', function () {
      this.selectPole(1)
    }.bind(this))
    this.displays.pole2Display.on('click', function () {
      this.selectPole(2)
    }.bind(this))
    this.displays.pole3Display.on('click', function () {
      this.selectPole(3)
    }.bind(this))
  }
  // Check if you are holding a ring, if not, pick one up. If yes, try to place the ring.
  // 1 = pick up, 2 = place, 0 = do nothing

  selectPole (num) {
    var action = this.model.selectPoleLogic(num)
    switch (num) {
      case 1:
        if (action === 1) {
          this.displays.handDisplay = this.displays.pole1Display.children().last()
          this.displays.pole1Display.children().last().detach()
        } else if (action === 2) {
          console.log(this.displays.handDisplay)
          this.displays.pole1Display.append(this.displays.handDisplay)
        }
        break
      case 2:
        if (action === 1) {
          this.displays.handDisplay = this.displays.pole2Display.children().last()
          this.displays.pole2Display.children().last().detach()
        } else if (action === 2) {
          this.displays.pole2Display.append(this.displays.handDisplay)
        }
        break
      case 3:
        if (action === 1) {
          this.displays.handDisplay = this.displays.pole3Display.children().last()
          this.displays.pole3Display.children().last().detach()
        } else if (action === 2) {
          this.displays.pole3Display.append(this.displays.handDisplay)
        }
        break
    }
  }
}

// method/variable graveyard:

  // ringSmallDisplay :$('#ringSmall'),
  // ringMediumDisplay : $('#ringMedium'),
  // ringLargeDisplay : $('#ringLarge'),
