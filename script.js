$(document).ready(function () {
  var ringSmall = $('#ringSmall')
  var ringMedium = $('#ringMedium')
  var ringLarge = $('#ringLarge')
  var pole1 = $('#pole1')
  var pole2 = $('#pole2')
  var pole3 = $('#pole3')

  ringSmall.on('click', selectRing.bind(null, 1))
  ringMedium.on('click', selectRing.bind(null, 2))
  ringLarge.on('click', selectRing.bind(null, 3))

  function selectRing (size) {
    switch (size) {
      case 1:
        $('#ringSmall').detach()
        break
      case 2:
        $('#ringMedium').detach()
        break
      case 3:
        $('#ringLarge').detach()
        break
    }
  }
})
