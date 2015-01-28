var user = prompt("Hello, I would like to meet you. What is your name?").toUpperCase();

	switch(user) {
		case'AMIT':
			confirm("Hey, that's me!?!?");
		break;
		case'NIKHIL':
			confirm("Congradulations");
		break;
		case'AAI':
			confirm("I hope you made some Varan Bhat.");
		break;
		case'BABA':
			confirm("Enjoy some more Wada Pav");
		break;
		case'TAEWOO':
			confirm("Hello Trumpet Buddy");
		break;
		case'ROY':
			confirm("Hi");
		break;
		case'ALEX':
			confirm("Can you ask me some sports questions?");
		break;
		case'AASIM':
			confirm("Bonjour");
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
			confirm("I do not understand your choice. Please restart the web and start again.");
}