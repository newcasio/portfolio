$(document).ready(function(){

  $('#contactDetails').hide();
  $('#contactButton').on('click', function(){
    $('#aboutMeContent').hide(600);
    $('#skillsContent').hide(600);
    $('#proj1').hide(600);
    $('#proj2').hide(600);
    $('#proj3').hide(600);
    $('#proj4').hide(600);
    $('#contactDetails').toggle(1000);
  })


  $('#aboutMeContent').hide();
  $('#aboutMeButton').on('click', function(){
    $('#contactDetails').hide(600);
    $('#skillsContent').hide(600);
    $('#proj1').hide(600);
    $('#proj2').hide(600);
    $('#proj3').hide(600);
    $('#proj4').hide(600);
    $('#aboutMeContent').toggle(1000);
  });

  $('#skillsContent').hide();
  $('#skills').on('click', function(){
    $('#aboutMeContent').hide(600);
    $('#contactDetails').hide(600);
    $('#proj1').hide(600);
    $('#proj2').hide(600);
    $('#proj3').hide(600);
    $('#proj4').hide(600);
    $('#skillsContent').toggle(1000);
  });



  $('#proj1').hide();
  $('#ttt').on('click', function(){
    $('#aboutMeContent').hide(600);
    $('#contactDetails').hide(600);
    $('#skillsContent').hide(600);
    $('#proj2').hide(600);
    $('#proj3').hide(600);
    $('#proj4').hide(600);
    $('#proj1').toggle(1000);
  })


  $('#proj2').hide();
  $('#conflicts').on('click', function(){
    $('#aboutMeContent').hide(600);
    $('#contactDetails').hide(600);
    $('#skillsContent').hide(600);
    $('#proj1').hide(600);
    $('#proj3').hide(600);
    $('#proj4').hide(600);
    $('#proj2').toggle(1000);
  })

  $('#proj3').hide();
  $('#trippo').on('click', function(){
    $('#aboutMeContent').hide(600);
    $('#contactDetails').hide(600);
    $('#skillsContent').hide(600);
    $('#proj1').hide(600);
    $('#proj2').hide(600);
    $('#proj4').hide(600);
    $('#proj3').toggle(1000);
  })

  $('#proj4').hide();
  $('#booker').on('click', function(){
    $('#aboutMeContent').hide(600);
    $('#contactDetails').hide(600);
    $('#skillsContent').hide(600);
    $('#proj1').hide(600);
    $('#proj2').hide(600);
    $('#proj3').hide(600);
    $('#proj4').toggle(1000);
  })


}); //end document ready
