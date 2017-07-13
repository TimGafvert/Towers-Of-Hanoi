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
    this.makeSounds()
  }
  makeSounds () {
    function Sound (src) {
      this.sound = document.createElement('audio')
      this.sound.src = src
      this.sound.setAttribute('preload', 'auto')
      this.sound.setAttribute('controls', 'none')
      this.sound.style.display = 'none'
      document.body.appendChild(this.sound)
      this.play = function () {
        this.sound.play()
      }
      this.stop = function () {
        this.sound.pause()
      }
    }
    console.log(this)
    this.placePiece = new Sound('Sounds/Blast.mp3')
    this.pickPiece = new Sound('Sounds/Swoosh.mp3')
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
        this.displays.handDisplay.css({left: this.XxX, top: this.YyY, position: 'absolute'})
      }
    }.bind(this))
  }

  // Check if you are holding a ring, if not, pick one up. If yes, try to place the ring.
  // 1 = pick up, 2 = place, 0 = do nothing
// this.displays.handDisplay.width() / 2
// this.displays.handDisplay.height() / 2
  selectPole (num) {
    var action = this.model.selectPoleLogic(num)
    var that = this
    this.makeSounds()
    switch (num) {
      case 1:
        if (action === 1) {
          this.displays.handDisplay = this.displays.pole1Display.children().last()
          this.pickPiece.play()
        } else if (action === 2) {
          this.displays.pole1Display.append(this.displays.handDisplay)
          this.displays.handDisplay.css({position: 'static'})
          this.placePiece.play()
        }
        break
      case 2:
        if (action === 1) {
          this.displays.handDisplay = this.displays.pole2Display.children().last()
          this.pickPiece.play()
        } else if (action === 2) {
          this.displays.pole2Display.append(this.displays.handDisplay)
          this.displays.handDisplay.css({position: 'static'})
          this.placePiece.play()
        }
        break
      case 3:
        if (action === 1) {
          this.displays.handDisplay = this.displays.pole3Display.children().last()
          this.pickPiece.play()
        } else if (action === 2) {
          this.displays.pole3Display.append(this.displays.handDisplay)
          this.displays.handDisplay.css({position: 'static'})
          this.placePiece.play()
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
