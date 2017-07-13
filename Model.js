class Logic {
  constructor () {
    var pole1 = [0, 1, 2], pole2 = [], pole3 = []
    var hand = 0
    var ringIsSelected = false
  }
  // methods

  selectPoleLogic (num) {
    switch (num) {
      case 1:
        if (!ringIsSelected) {
          if (pole1.length > 0) {
            ringIsSelected = true
            hand = pole1.pop()
            return 1
          } else return 0
        } else {
          if ((pole1.length === 0) || (pole1[pole1.length - 1] < hand)) {
            ringIsSelected = false
            pole1.push(hand)
            return 2
          }
        }
        break
      case 2:
      if (!ringIsSelected) {
        if (pole1.length > 0) {
          ringIsSelected = true
          hand = pole1.pop()
          return 1
        } else return 0
      } else {
        if ((pole1.length === 0) || (pole1[pole1.length - 1] < hand)) {
          ringIsSelected = false
          pole1.push(hand)
          return 2
        }
      }
      break
      case 3:
      if (!ringIsSelected) {
        if (pole1.length > 0) {
          ringIsSelected = true
          hand = pole1.pop()
          return 1
        } else return 0
      } else {
        if ((pole1.length === 0) || (pole1[pole1.length - 1] < hand)) {
          ringIsSelected = false
          pole1.push(hand)
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
