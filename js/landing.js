/*
********************************************************************
Author: Cameron Boyce
Cognitive Aging Neuroscience & Neuro-Intervention Group
Last Updated: 12/20/2016
********************************************************************
*/

$(document).ready(function(){

	$('#mid_wrapper').css("display", "none");
	$('#mid_wrapper').fadeIn(2000);

	$('a').click(function(event) {
		event.preventDefault();
		newLocation = this.href;
		$('#mid_wrapper').fadeOut(1500, newpage);
	});

	function newpage() {
		window.location = newLocation;
	}

	$("#can").on({
        mouseenter: function(){
		    $("#logo_wrapper").css("background-color", "#135c6d");
		    $("#wrapper").css("background-color", "#135c6d");
		    $("#cnn").css("opacity", "0.2");
		    $("#bottom_wrapper").css("opacity", "0.2");
		    $(this).css("color", "#135c6d");
        },
		mouseleave: function(){
            $("#logo_wrapper").css("background-color", "#777");
		    $("#wrapper").css("background-color", "#777");
		    $(this).css("color", "#777");
		    $("#cnn").css("opacity", "1");
		    $("#bottom_wrapper").css("opacity", "1");
        },
		click: function(){
		    $(this).css("color", "#FFF");
        }
    	});

	$("#cnn").on({
        mouseenter: function(){
		    $("#logo_wrapper").css("background-color", "#105a7f");
		    $("#wrapper").css("background-color", "#105a7f");		
		    $(this).css("color", "#105a7f");
		    $("#can").css("opacity", "0.2");
		    $("#bottom_wrapper").css("opacity", "0.2");
        },
		mouseleave: function(){
            $("#wrapper").css("background-color", "#777");
		    $("#logo_wrapper").css("background-color", "#777");
		    $(this).css("color", "#777");
		    $("#can").css("opacity", "1");
		    $("#bottom_wrapper").css("opacity", "1");
        },
		click: function(){
		    $(this).css("color", "#FFF");
        }
    	});
	
});


