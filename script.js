$(document).ready(function() {
    $('.pull-me').click(function() {
        $('.panel').slideToggle('slow');
    });

    
    $('button').click(function() {
        var toAdd = $('input[name=message]').val();
        $('.messages').append('<div class="item">' + toAdd + '</div>');
    });
    $(document).on('click', '.item', function() {
    	$(this).remove();
    });


  	$('nav p').hover(
    	function(){
       		$(this).toggleClass('active');
    	});

});