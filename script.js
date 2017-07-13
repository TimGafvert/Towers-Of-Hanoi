/* global $ */
$(document).ready(function () {
  var ringSmallDisplay = $('#ringSmall')
  var ringMediumDisplay = $('#ringMedium')
  var ringLargeDisplay = $('#ringLarge')
  var pole1 = [0, 1, 2], pole2 = [], pole3 = []
  var hand = 0
  var handDisplay
  var pole1Display = $('#pole1')
  var pole2Display = $('#pole2')
  var pole3Display = $('#pole3')
  var selectedPole
  var selectedRing
  var comparedRing
  var ringIsSelected = false

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
          }
        } else {
            pole1.push(hand)
        }
        break
      case 2:
      if (!ringIsSelected) {
        if (pole2.length > 0) {
          ringIsSelected = true
          hand = pole2.pop()
        }
      } else {
          pole2.push(hand)
      }
      break
      case 3:
      if (!ringIsSelected) {
        if (pole3.length > 0) {
          ringIsSelected = true
          hand = pole3.pop()
        }
      } else {
          pole3.push(hand)
      }
      break
    }
  }
})

// selectedRing.detach()
// selectedRing = pole1Display.children().last()

  //  checkIfLegal($(' #pole1 div:last-child'))
