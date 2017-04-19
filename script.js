$(document).ready(function() {
    $('.pull-me').click(function() {
        $('.panel').slideToggle('slow');
    });

  	$('nav p').hover(
    	function(){
       		$(this).toggleClass('active');
    	});

});