/*********************************************************************
Author: Cameron Boyce
Cognitive Aging Neuroscience & Neuro-Intervention Group
Last Updated: 12/20/2016
*********************************************************************/

function cycleImages(){
      var $active = $('#slider .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#slider img:first');
      $next.css('z-index', 2);
      $next.removeClass('hide');
      $active.fadeOut(1800, function(){
	  $active.css('z-index',1).show().removeClass('active');
          $next.css('z-index',3).addClass('active');
      });
    }

function hide(){
   
};

$(window).on("load", function() {
    $('#header').css("display", "none");
    $('#header').fadeIn(1500);


    setInterval('cycleImages()', 8000);
})

$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {  
        $('#header').addClass("sticky");
        $('#nav').addClass("sticky");
    }
    else {
        $('#header').removeClass("sticky");
        $('#nav').removeClass("sticky");
    }
});

