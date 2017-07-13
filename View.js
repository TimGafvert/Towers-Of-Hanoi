/* global $ */
class Display {
  constructor (model) {
    this.model = model   // store the model as a property
  }
  init () {   // target relevant elements
    this.displays = {  // inputs here
      handDisplay: $('#ring0'),
      pole1Display: $('#pole1'),
      pole2Display: $('#pole2'),
      pole3Display: $('#pole3'),
      body: $('body')

    }
    this.listen()
  }
  listen () {     // associate event listeners with inputs
                // When a pole is clicked, select pole to get or place a ring
    this.displays.pole1Display.on('click', function () {
      this.selectPole(1)
    }.bind(this))
    this.displays.pole2Display.on('click', function () {
      this.selectPole(2)
    }.bind(this))
    this.displays.pole3Display.on('click', function () {
      this.selectPole(3)
    }.bind(this))
    this.displays.body.mousemove(function (event) {
      if (this.model.ringIsSelected === true) {
        this.XxX = event.pageX// - this.displays.handDisplay.width() / 2
        this.YyY = event.pageY// - this.displays.handDisplay.height() / 2
        console.log(this.XxX)
        this.displays.handDisplay.css({left: this.XxX, top: this.YyY, position: 'absolute'})
      }
    }.bind(this))
  }

  // Check if you are holding a ring, if not, pick one up. If yes, try to place the ring.
  // 1 = pick up, 2 = place, 0 = do nothing
// this.displays.handDisplay.width() / 2
// this.displays.handDisplay.height() / 2
  selectPole (num) {
    console.log('selectPole', num)
    var action = this.model.selectPoleLogic(num)
    switch (num) {
      case 1:
        if (action === 1) {
          this.displays.handDisplay = this.displays.pole1Display.children().last()
        } else if (action === 2) {
          this.displays.pole1Display.append(this.displays.handDisplay)
          this.displays.handDisplay.css({position: 'static', float: 'none'})
        }
        break
      case 2:
        if (action === 1) {
          this.displays.handDisplay = this.displays.pole2Display.children().last()
        } else if (action === 2) {
          this.displays.pole2Display.append(this.displays.handDisplay)
          this.displays.handDisplay.css({position: 'static', float: 'none'})
        }
        break
      case 3:
        if (action === 1) {
          this.displays.handDisplay = this.displays.pole3Display.children().last()
        } else if (action === 2) {
          this.displays.pole3Display.append(this.displays.handDisplay)
          this.displays.handDisplay.css({position: 'static', float: 'none'})
        }
        break
      default:
        console.log('weird behaviour')
        break
    }
  }
}

// method/variable graveyard:

  // ringSmallDisplay :$('#ringSmall'),
  // ringMediumDisplay : $('#ringMedium'),
  // ringLargeDisplay : $('#ringLarge'),
