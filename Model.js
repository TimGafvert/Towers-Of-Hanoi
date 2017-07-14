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
      ringIsSelected: false

    }
  }

  selectPoleLogic (num) {
    switch (num) {
      case 1:
        if (!this.gameLogic.ringIsSelected) {
          if (this.gameLogic.pole1.length > 0) {
            this.gameLogic.ringIsSelected = true
            this.gameLogic.hand = this.gameLogic.pole1.pop()
            return 1
          } else return 0
        } else {
          if ((this.gameLogic.pole1.length === 0) || (this.gameLogic.pole1[this.gameLogic.pole1.length - 1] < this.gameLogic.hand)) {
            this.gameLogic.ringIsSelected = false
            this.gameLogic.pole1.push(this.gameLogic.hand)
            return 2
          }
        }
        break
      case 2:
        if (!this.gameLogic.ringIsSelected) {
          if (this.gameLogic.pole2.length > 0) {
            this.gameLogic.ringIsSelected = true
            this.gameLogic.hand = this.gameLogic.pole2.pop()
            return 1
          } else return 0
        } else {
          if ((this.gameLogic.pole2.length === 0) || (this.gameLogic.pole2[this.gameLogic.pole2.length - 1] < this.gameLogic.hand)) {
            this.gameLogic.ringIsSelected = false
            this.gameLogic.pole2.push(this.gameLogic.hand)
            return 2
          }
        }
        break
      case 3:
        if (!this.gameLogic.ringIsSelected) {
          if (this.gameLogic.pole3.length > 0) {
            this.gameLogic.ringIsSelected = true
            this.gameLogic.hand = this.gameLogic.pole3.pop()
            return 1
          } else return 0
        } else {
          if ((this.gameLogic.pole3.length === 0) || (this.gameLogic.pole3[this.gameLogic.pole3.length - 1] < this.gameLogic.hand)) {
            this.gameLogic.ringIsSelected = false
            this.gameLogic.pole3.push(this.gameLogic.hand)
            return 2
          }
        }
        break
    }
  }

}

// method/variable graveyard:

// selectedRing.detach()
// selectedRing = pole1Display.children().last()

  //  checkIfLegal($(' #pole1 div:last-child'))
