/* global $ */
$(document).ready(function () {
  var ringSmall = $('#ringSmall')
  var ringMedium = $('#ringMedium')
  var ringLarge = $('#ringLarge')
  var pole1 = $('#pole1')
  var pole2 = $('#pole2')
  var pole3 = $('#pole3')
  var selectedPole
  var selectedRing
  var comparedRing
  var ringIsSelected = false


  console.log(($(' #pole3 div:last-child').toString()))

  pole1.on('click', selectPole.bind(null, 1))
  pole2.on('click', selectPole.bind(null, 2))
  pole3.on('click', selectPole.bind(null, 3))
  function checkIfLegal (ring) {
    this.ring = ring

    if ((this.ring === ringLarge) || (this.ring.toString() === "[object Object]") || ((this.ring === ringMedium) && (selectedRing === ringSmall))) {
    selectedPole.append(selectedRing)
    ringIsSelected = false
    }
  }
  comparedRing = $(' #pole1 div:last-child')

  function selectPole (num) {
    switch (num) {
      case 1:
      selectedPole = pole1
        if (!ringIsSelected) {
          ringIsSelected = true
          selectedRing = $(' #pole1 div:last-child')
          selectedRing.detach()
          console.log(selectedPole)
        } else {
          checkIfLegal($(' #pole1 div:last-child'))

        }
        break
      case 2:
      selectedPole = pole2
      if (!ringIsSelected) {
        ringIsSelected = true
        selectedRing = $(' #pole2 div:last-child')
        selectedRing.detach()
        console.log(selectedPole)
      } else {
        checkIfLegal($(' #pole2 div:last-child'))

      }
      break
      case 3:
      selectedPole = pole3
      if (!ringIsSelected) {
        ringIsSelected = true
        selectedRing = $(' #pole3 div:last-child')
        selectedRing.detach()
        console.log(selectedPole)
      } else {
        checkIfLegal($(' #pole3 div:last-child'))

      }
      break
    }
  }
})

// ringSmall.on('click', selectRing.bind(null, 1))
// ringMedium.on('click', selectRing.bind(null, 2))
// ringLarge.on('click', selectRing.bind(null, 3))

// function selectRing (size) {
//   switch (size) {
//     case 1:
//       $('#ringSmall').detach()
//       pole2.append(ringSmall)
//       break
//     case 2:
//       $('#ringMedium').detach()
//       pole2.append(ringMedium)
//       break
//     case 3:
//       $('#ringLarge').detach()
//       pole2.append(ringLarge)
//       break
//   }
// }
