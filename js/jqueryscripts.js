// el cabezal se encoje al hacer scroll

$(window).scroll(function() {
	if ($(this).scrollTop() > 40){  
    	$('#header').addClass("shrink");
  		}
  	else{
    	$('#header').removeClass("shrink");
  		}
});


// menú para móbil

$(function() {
	$("#openmenu").click(function() {
		$("#menu").toggleClass("opened");
		$(this).toggleClass("close");
	});
});