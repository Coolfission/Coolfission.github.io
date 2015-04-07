//Javascipt
//Use this code if you want to.                                                                  jQuery
confirm("This jQuery code is supposed to fade the div (the blue box) but it isn't working. I tried it on Codecademy and it worked");																							|																					
/*var user = prompt("Hello, I would like to meet you. What is your name?").toUpperCase();			|
																									|
	switch(user) {																					|
		case'AMIT': 																				|
			confirm("Hey, that's me!?!?");															|
		break;																						|
		case'NIKHIL': 																				|
			confirm("Congradulations");																|
		break;																					_________
		case'AAI': 																				|       | 
			confirm("I hope you made some Varan Bhat.");										\       /
		break;																					 \     /
		case'BABA': 																			  \   /
			confirm("Enjoy some more Wada Pav");												   \_/
		break;
		case'TAEWOO':
			confirm("Hello Trumpet Buddy");
		break;
		case'ROY':
			confirm("Hi");
		break;
		case'SANDEEP KAKA':
			confirm("I can't wait t'ill I visit the windy city!");                                            
		break;	
		case'':
			confirm("You didn't put a name. Restart the web and write one.");
		break;
		default:
			confirm("I do not understand your choice. Please restart the web and start again.");
}*/

//jQuery
$(document).ready(function () {
	$('div').click(function () {
	$('div').fadeOut('fast');
	$('div').mouseleave(function () {
	$('div').fadeIn('fast');
	});
});
});