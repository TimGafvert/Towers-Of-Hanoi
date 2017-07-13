class Logic {
  constructor () {
    this.pole1 = [0, 1, 2, 3, 4]
    this.pole2 = []
    this.pole3 = []
    this.hand = 0
    this.ringIsSelected = false
  }
  // methods

  testPrint (string) {
    console.log(string)
  }

  selectPoleLogic (num) {
    switch (num) {
      case 1:
        if (!this.ringIsSelected) {
          if (this.pole1.length > 0) {
            this.ringIsSelected = true
            this.hand = this.pole1.pop()
            return 1
          } else return 0
        } else {
          if ((this.pole1.length === 0) || (this.pole1[this.pole1.length - 1] < this.hand)) {
            this.ringIsSelected = false
            this.pole1.push(this.hand)
            return 2
          }
        }
        break
      case 2:
        if (!this.ringIsSelected) {
          if (this.pole2.length > 0) {
            this.ringIsSelected = true
            this.hand = this.pole2.pop()
            return 1
          } else return 0
        } else {
          if ((this.pole2.length === 0) || (this.pole2[this.pole2.length - 1] < this.hand)) {
            this.ringIsSelected = false
            this.pole2.push(this.hand)
            return 2
          }
        }
        break
      case 3:
        if (!this.ringIsSelected) {
          if (this.pole3.length > 0) {
            this.ringIsSelected = true
            this.hand = this.pole3.pop()
            return 1
          } else return 0
        } else {
          if ((this.pole3.length === 0) || (this.pole3[this.pole3.length - 1] < this.hand)) {
            this.ringIsSelected = false
            this.pole3.push(this.hand)
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
