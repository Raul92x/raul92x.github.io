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


  	$().hover(
    	function(){
       		$(this).addClass('active');
    	},
    	function(){
        	$(this).removeClass('active');
    	}
  	);

});