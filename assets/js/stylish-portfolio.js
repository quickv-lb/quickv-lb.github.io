(function($) {

  // Scroll to top button appear

  $(document).ready( function(){
    if ($(window).width() < 684) {

      $("#section04").show();
      $("#section4").hide();


    }else{
      $("#section04").hide();
      $("#section4").show();
    }


  });



})(jQuery); // End of use strict

