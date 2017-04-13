$(document).ready(function() {    
    $('button').click(function() {
        var toAdd = $('input[name=message]').val();
        $('.messages').append('<div class="newitem">' + toAdd + '</div>');
    });
    $(document).on('click', '.newitem', function() {
    	$(this).remove();
    });
});