class Logic {
  constructor (){
    var pole1 = [0, 1, 2], pole2 = [], pole3 = []
    var hand = 0
    var ringIsSelected = false
  }
}

  var ringSmallDisplay = $('#ringSmall')
  var ringMediumDisplay = $('#ringMedium')
  var ringLargeDisplay = $('#ringLarge')

  var handDisplay
  var pole1Display = $('#pole1')
  var pole2Display = $('#pole2')
  var pole3Display = $('#pole3')

  // class Atm {
  //   constructor (account, money = 0) {
  //     this.type = account
  //     this.transactionHistory = []
  //     this.lowCheckingFunds = false
  //     this.lowSavingsFunds = false
  //     this.checkingBalance = 0
  //     this.savingsBalance = 0
  //   }
  //   withdrawChecking (amount) {
  //     if (this.checkingBalance - amount >= 0) {
  //       this.checkingBalance -= amount
  //       this.transactionHistory.push(`you withdrew $${amount}`)
  //     } else {
  //       console.log('not enough funds')
  //       this.lowCheckingFunds = true
  //     }
  //   }
  //   withdrawSavings (amount) {
  //     if (this.savingsBalance - amount >= 0) {
  //       this.savingsBalance -= amount
  //       this.transactionHistory.push(`you withdrew $${amount}`)
  //     } else {
  //       console.log('not enough funds')
  //       this.lowSavingsFunds = true
  //     }
  //   }
  //   depositChecking (amount) {
  //     this.checkingBalance += amount
  //     this.transactionHistory.push(`you deposited $${amount}`)
  //   }
  //   depositSavings (amount) {
  //     this.savingsBalance += amount
  //   }
  // }



  // When a pole is clicked, select pole to get or place a ring
  pole1Display.on('click', function () {
    selectPole(1)
  })
  pole2Display.on('click', function () {
    selectPole(2)
  })
  pole3Display.on('click', function () {
    selectPole(3)
  })
  function checkIfLegal (ring) {

    // selectedPole.append(selectedRing)
    // ringIsSelected = false

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


// selectedRing.detach()
// selectedRing = pole1Display.children().last()

  //  checkIfLegal($(' #pole1 div:last-child'))
