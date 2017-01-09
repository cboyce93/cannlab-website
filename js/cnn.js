/*********************************************************************
Author: Cameron Boyce
Cognitive Aging Neuroscience & Neuro-Intervention Group
Last Updated: 12/20/2016
*********************************************************************/

/*********************************************************************
functions
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

function show(tag) {
    $(tag).removeClass('hide');
}

function introElement(tag, time){
    timer = setTimeout(function(){
    $(tag).fadeIn(time);
  }, time);
}

/*********************************************************************
Page Load
*********************************************************************/

$(window).on("load", function() {
    //$('#header').css("display", "none");
    $('#dummy_slider').css("display", "none");
    //$('#title').addClass('hide');
    //$('#text').addClass('hide');
    $('#header').fadeIn(1500);
    $('#slider').fadeIn(3000);  

    setTimeout(introElement('#title', 1000), 3500);
    setTimeout(introElement('#text', 2000), 4000);
    setInterval('cycleImages()', 8000);

    /****************************************************************
    Smooth Scrolling to Internal Links
    *****************************************************************/ 

    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);
        var targetOffset = $target.offset().top - 86;
	    $('html, body').stop().animate({
            'scrollTop': targetOffset
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});	
})

/*********************************************************************
Sticky Header
*********************************************************************/

$(window).scroll(function() {
    if ($(this).scrollTop() > 0.5) {  
        $('#header').addClass("sticky");
        $('#nav').addClass("sticky");
        $('#title').addClass("sticky");
        $('#text').addClass("sticky");
        $('.flip-container').fadeOut(800);
        $('.flip-container').css("display", "none");
        $('#logo_sticky').fadeIn(800);
        $('#logo_sticky').css("display", "block");
    }
    else {
        $('#header').removeClass("sticky");
        $('#nav').removeClass("sticky");
        $('title').removeClass("sticky");
        $('text').removeClass("sticky");
        $('.flip-container').fadeIn(800);
        $('.flip-container').css("display", "block");
        $('#logo_sticky').fadeOut(800);
        $('#logo_sticky').css("display", "none");
    }
});


