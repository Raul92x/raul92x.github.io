$(document).ready(function() {    
    $('button').click(function() {
        var toAdd = $('input[name=message]').val();
        $('.messages').append('<div class="item">' + toAdd + '</div>');
    });
    $(document).on('click', '.item', function() {
    	$(this).remove();
    });
});