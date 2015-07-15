jQuery(document).ready(function($) {

	$(document).foundation();
	
	$( ".nav-toggle" ).click(function() {
	  $(this).toggleClass("open");
	  $("nav.main-nav").fadeToggle(100);

	  return false;
	});
});

