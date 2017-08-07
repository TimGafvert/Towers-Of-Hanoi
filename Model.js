class Logic {
  constructor () {

  }
  // methods
  init () {   // target relevant elements
    this.gameLogic = {  // inputs here
      pole1: [0, 1, 2, 3, 4],
      pole2: [],
      pole3: [],
      hand: 0,
      ringIsSelected: false,
      animating: true

    }
  }
  checkIfWon () {
    if (this.gameLogic.pole3.length === 5) {
      // this.init()
      return true
    } else false
  }
  selectPoleLogic (num) {
    // build the key
    let poleKey = `pole${num}`

    // pole array by `num`
    let selectedPole = this.gameLogic[poleKey]

    if (!this.gameLogic.animating) {
      if (!this.gameLogic.ringIsSelected) {
        if (selectedPole.length > 0) {
          this.gameLogic.ringIsSelected = true
          this.gameLogic.hand = selectedPole.pop()
          return 1
        } else return 0
      } else {
        if ((selectedPole.length === 0) || (selectedPole[selectedPole.length - 1] < this.gameLogic.hand)) {
          this.gameLogic.ringIsSelected = false
          selectedPole.push(this.gameLogic.hand)
          return 2
        }
      }
    }
  }
}

// method/variable graveyard:

// selectedRing.detach()
// selectedRing = pole1Display.children().last()

  //  checkIfLegal($(' #pole1 div:last-child'))
