$(document).ready(function(){

  $('#contactDetails').hide();

  $('#contactButton').on('click', function(){
    $('#contactDetails').toggle(1000);
  })


  $('#aboutMeContent').hide();
  $('#aboutMeButton').on('click', function(){
    $('#aboutMeContent').toggle(1000);
  });

}); //end document ready
