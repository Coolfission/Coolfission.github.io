var user = prompt("Hello, I would like to meet you. What is your name?").toUpperCase();

	switch(user) {
		case'AMIT':
		var amit = prompt("You have entered Amit, is that correct? (YES or NO)").toUpperCase();
		if(amit === 'YES') {
			confirm("Hey, that's me!?!?");
		}
		else {
			confirm("You must have written the wrong name then. Restart this website and try again.");
		}
		break;
		case'NIKHIL':
		var nikhil = prompt("You have entered Nikhil, is that correct? (YES or NO)").toUpperCase();
		if(nikhil === 'YES') {
			confirm("Congradulations");
		}
		else {
			confirm("You must have written the wrong name then. Restart this website and try again.");
		}
		break;
		case'BABA':
		var baba = prompt("You have entered Baba, is that correct? (YES or NO)").toUpperCase();
		if(baba === 'YES') {
			confirm("Enjoy some more Wada Pav");
		}
		else {
			confirm("You must have written the wrong name then. Restart this website and try again.");
		}
		break;
		case'TAEWOO':
		var taewoo = prompt("You have entered Taewoo, is that correct? (YES or NO)").toUpperCase();
		if(taewoo === 'YES') {
		    confirm("Hello Trumpet Buddy");
		}
		else {
		    confirm("You must have written the wrong name then. Restart this website and try again.");
		}
		break;
		case'ALEX':
		var alex = prompt("You have entered Alex, is that correct? (YES or NO)").toUpperCase();
		if(alex === 'YES') {
		    confirm("Can you ask me some sports questions?");
		}
		else {
		    confirm("You must have entered the wrong name then. Restart this website and try again");
		}
		break;
		case'JACK':
		var jack = prompt("Are you JACK C or JACK K?").toUpperCase();
		if(jack === 'JACK C') {
		    confirm("Can you ask me some sports questions?");
		}
		else if(jack === 'JACK K') {
			confirm("Ohh...Baby a triple");
		}
		else {
		    confirm("I have not understood your choice. Restart the web and try again.");
		}
		break;
		default:
			confirm("I do not understand your choice. Please restart the webpage and start again.");
}