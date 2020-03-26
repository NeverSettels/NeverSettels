$(document).ready(function() {
  $('.button-container').on('click', 'button', function(event) {
    var selctedAnimal = event.target.id
    //this if statment will show the right animal
    // if (selctedAnimal === 'snake-btn') {
    //   //show snke
    //   $('#snake-cont').removeClass('no-show')
    //   //hide other
    //   $('#turtle-cont').addClass('no-show')
    //   $('#bug-cont').addClass('no-show')
    // } else if (selctedAnimal === 'turtle-btn') {
    //   //show turtle
    //   $('#turtle-cont').removeClass('no-show')
    //   //hide other
    //   $('#snake-cont').addClass('no-show')
    //   $('#bug-cont').addClass('no-show')
    // } else if (selctedAnimal === 'bug-btn') {
    //   //show bug
    //   $('#bug-cont').removeClass('no-show')
    //   //hide other
    //   $('#snake-cont').addClass('no-show')
    //   $('#turtle-cont').addClass('no-show')
    // } else {
    //   console.error('you have an errror you shouldnt be able to see this')
    // }

    switch (selctedAnimal) {
      case 'snake-btn':
        //show snke
        $('#snake-cont').removeClass('no-show')
        //hide other
        $('#turtle-cont').addClass('no-show')
        $('#bug-cont').addClass('no-show')
        break
      case 'turtle-btn':
        //show turtle
        $('#turtle-cont').removeClass('no-show')
        //hide other
        $('#snake-cont').addClass('no-show')
        $('#bug-cont').addClass('no-show')
        break
      case 'bug-btn':
        //show bug
        $('#bug-cont').removeClass('no-show')
        //hide other
        $('#snake-cont').addClass('no-show')
        $('#turtle-cont').addClass('no-show')
        break
      default:
        console.error('you have an errror you shouldnt be able to see this')
        break
    }
  })
})
