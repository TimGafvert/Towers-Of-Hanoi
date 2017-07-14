/* global $ */
class Display {
  constructor (model) {
    this.model = model   // store the model as a property
  }
  init () {
   // target relevant elements

    this.displays = {  // inputs here
      handDisplay: $('#ring0'),
      pole1Display: $('#pole1'),
      pole2Display: $('#pole2'),
      pole3Display: $('#pole3'),
      body: $('body'),
      mouseX: 0,
      mouseY: 0

    }
    this.animateStart(1)

    // for (var i = 0; i < 5; i++) {
    //   this.displays.pole1Display.append(this.displays.pole3Display.children().first())
    // }

    this.model.init()
    this.makeSounds()
  }
  animateEnd (num) {
    var that = this
    this.iterationEnd = num
    if (this.iterationEnd > 5) {
      that.model.gameLogic.animating = false
      return
    } else {
      this.iterationEnd++
      setTimeout(function () {
        that.model.gameLogic.animating = true
        that.animateEnd(that.iterationEnd)
        that.displays.pole1Display.append(that.displays.pole3Display.children().first())
      }, 300)
    }
  }
  animateStart (num) {
    var that = this
    this.iteration = num
    if (this.iteration > 5) {
      setTimeout(function () {
        that.animateEnd(1)
      }, 500)
      return
    } else {
      this.iteration++

      setTimeout(function () {
        that.animateStart(that.iteration)
        that.model.gameLogic.animating = true
        that.displays.pole3Display.append(that.displays.pole1Display.children().first())
      }, 750)
    }
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
  }

  listen2 () {
    $(document).mousemove(function (e) {
      if (this.model.gameLogic.ringIsSelected === true) {
        this.displays.mouseX = e.pageX - this.displays.handDisplay.width() * 0.5
        this.displays.mouseY = e.pageY - this.displays.handDisplay.height() * 0.5
        this.displays.handDisplay.css({left: this.displays.mouseX, top: this.displays.mouseY, position: 'absolute'})
      }
    }.bind(this))
  }

  // Check if you are holding a ring, if not, pick one up. If yes, try to place the ring.
  // 1 = pick up, 2 = place, 0 = do nothing
// this.displays.handDisplay.width() / 2
// this.displays.handDisplay.height() / 2
  selectPole (num) {
    var action = this.model.selectPoleLogic(num)
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
          var that = this
          if (this.model.checkIfWon()) {
            function winner () {
              this.alert('YOU ARE A WINNER!!!')
              that.init()
            }
            this.nextStep = setTimeout(winner, 500)
          }
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
