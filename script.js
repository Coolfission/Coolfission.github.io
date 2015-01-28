var user = prompt("Hello, I would like to meet you. What is your name?").toUpperCase();

	switch(user) {
		case'AMIT':
		confirm("Hey, that's me!?!?");
		break;
		case'NIKHIL':
		confirm("You have entered Nikhil, is that correct? (YES or NO)");
		break;
		case'BABA':
		confirm("You have entered Baba, is that correct? (YES or NO)");
		break;
		case'TAEWOO':
		confirm("You have entered Taewoo, is that correct? (YES or NO)");
		case'ALEX':
		confirm("Can you ask me some sports questions");
		break;
		case'JACK':
		var jack = prompt("Are you JACK C or JACK K?").toUpperCase();
		if(jack === 'JACK C') {
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