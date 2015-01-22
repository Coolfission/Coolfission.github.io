var user = prompt("Hello, I would like to meet you. What is your name?").toUpperCase();

	switch(user) {
		case'AMIT':
		var amit = prompt("You have entered Amit, is that correct? (YES or NO)").toUpperCase();
		if(amit === 'YES') {
			console.log("Hey, that's me!?!?");
		}
		else {
			console.log("You must have written the wrong name then. Restart this website and try again.");
		}
		break;
		case'Nikhil':
		var nikhil = prompt("You have entered Nikhil, is that correct? (YES or NO)").toUpperCase();
		if(nikhil === 'YES') {
			console.log("Hi Nikhil")
		}
		else {
			console.log("You must have written the wrong name then. Restart this website and try again.");
		}
		break;
		case'TAEWOO':
		var taewoo = prompt("You have entered Taewoo, is that correct? (YES or NO)").toUpperCase();
		if(taewoo === 'YES') {
		    console.log("Hello Trumpet Buddy");
		}
		else {
		    console.log("You must have written the wrong name then. Restart this website and try again.");
		}
		break;
		case'ALEX':
		var alex = prompt("You have entered Alex, is that correct? (YES or NO)").toUpperCase();
		if(alex === 'YES') {
		    console.log("Can you ask me some sports questions?");
		}
		else {
		    console.log("You must have entered the wrong name then. Restart this website and try again");
		}
		break;
		case'JACK':
		var jack = prompt("You have entered Jack, is that correct? (YES or NO)").toUpperCase();
		if(jack === 'YES') {
		    console.log("There is two of you! I don't know which one is asking!");
		}
		else {
		    console.log("You must have entered the wrong name. Restart this website and try again");
		}
		break;
		default:
		console.log("I do not understand your choice. Please restart the webpage and start again.");
}