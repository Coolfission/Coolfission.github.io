//jQuery
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript'
$(document).ready(function () {
	$('div').click(function () {
	$('div').fadeOut('fast');
	$('div').mouseleave(function () {
	$('div').fadeIn('fast');
	});
});
});


//Another jQuery code
/*$(document).ready(function(){
  $('div').hover(function(){
        $(this).toggleClass('active');
    });
});*/