$(document).ready(function(){

  $('.bg-img').css('opacity', '1');

  $('#contactDetails').hide();
  $('#contactButton').on('click', function(){
    $('#aboutMeContent').hide();
    $('#skillsContent').hide();
    $('#proj1').hide();
    $('#proj2').hide();
    $('#proj3').hide();
    $('#proj4').hide();
    $('#contactDetails').fadeToggle(1800);
    $('.bg-img').fadeTo('slow', '0.3');
  })

  $('#aboutMeContent').hide();
  $('#aboutMeButton').on('click', function(){
    $('#contactDetails').hide();
    $('#skillsContent').hide();
    $('#proj1').hide();
    $('#proj2').hide();
    $('#proj3').hide();
    $('#proj4').hide();
    $('#aboutMeContent').fadeToggle(1800);
    $('.bg-img').fadeTo('slow', '0.3');

  });

  $('#skillsContent').hide();
  $('#skills').on('click', function(){
    $('#aboutMeContent').hide();
    $('#contactDetails').hide();
    $('#proj1').hide();
    $('#proj2').hide();
    $('#proj3').hide();
    $('#proj4').hide();
    $('#skillsContent').fadeToggle(1800);
    $('.bg-img').fadeTo('slow', '0.3');
  });



  $('#proj1').hide();
  $('#ttt').on('click', function(){
    $('#aboutMeContent').hide();
    $('#contactDetails').hide();
    $('#skillsContent').hide();
    $('#proj2').hide();
    $('#proj3').hide();
    $('#proj4').hide();
    $('#proj1').fadeToggle(1800);
    $('.bg-img').fadeTo('slow', '0.3');
  })


  $('#proj2').hide();
  $('#conflicts').on('click', function(){
    $('#aboutMeContent').hide();
    $('#contactDetails').hide();
    $('#skillsContent').hide();
    $('#proj1').hide();
    $('#proj3').hide();
    $('#proj4').hide();
    $('#proj2').fadeToggle(1800);
    $('.bg-img').fadeTo('slow', '0.3');
  })

  $('#proj3').hide();
  $('#trippo').on('click', function(){
    $('#aboutMeContent').faddeOut(200);
    $('#contactDetails').faddeOut(200);
    $('#skillsContent').faddeOut(200);
    $('#proj1').faddeOut(200);
    $('#proj2').faddeOut(200);
    $('#proj4').faddeOut(200);
    $('#proj3').fadeToggle(1800);
    $('.bg-img').fadeTo('slow', '0.3');
  })

  $('#proj4').hide();
  $('#booker').on('click', function(){
    $('#aboutMeContent').hide();
    $('#contactDetails').hide();
    $('#skillsContent').hide();
    $('#proj1').hide();
    $('#proj2').hide();
    $('#proj3').hide();
    $('#proj4').fadeToggle(1800);
    $('.bg-img').fadeTo('slow', '0.3');
  })


}); //end document ready
