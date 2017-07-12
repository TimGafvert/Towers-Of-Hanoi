/* global $ */
$(document).ready(function () {
  var ringSmall = $('#ringSmall')
  var ringMedium = $('#ringMedium')
  var ringLarge = $('#ringLarge')
  var pole1 = $('#pole1')
  var pole2 = $('#pole2')
  var pole3 = $('#pole3')
  var selectedRing
  var ringIsSelected = false

  pole1.on('click', selectPole.bind(null, 1))
  pole2.on('click', selectPole.bind(null, 2))
  pole3.on('click', selectPole.bind(null, 3))

  function selectPole (num) {
    switch (num) {
      case 1:
        if (!ringIsSelected) {
          ringIsSelected = true
          selectedRing = $(' #pole1 div:last-child')
          selectedRing.detach()
        } else {
          pole1.append(selectedRing)
          ringIsSelected = false
        }
        break
      case 2:
        if (!ringIsSelected) {
          ringIsSelected = true
          selectedRing = $(' #pole2 div:last-child')
          selectedRing.detach()
        } else {
          pole2.append(selectedRing)
          ringIsSelected = false
        }
        break
      case 3:
        if (!ringIsSelected) {
          ringIsSelected = true
          selectedRing = $(' #pole3 div:last-child')
          selectedRing.detach()
        } else {
          pole3.append(selectedRing)
          ringIsSelected = false
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
