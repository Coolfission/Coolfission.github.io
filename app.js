//jQuery
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