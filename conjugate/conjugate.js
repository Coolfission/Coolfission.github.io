var irregular = function() {
//Basic
	$("td").hover(function() {
		$(this).css('color', '#0000FF');
	}, function() {
		$(this).css('color', '#ff0000');
	});

//Etre
	$("#suis").hover(function() {
		$(this).text("I am");
	}, function() {
		$(this).text("Je suis");
	});
	$("#es").hover(function() {
		$(this).text("You are");
	}, function() {
		$(this).text("Tu es");
	});
	$("#est").hover(function() {
		$(this).text("He/She is");
	}, function() {
		$(this).text("Il/Elle est");
	});
	$("#sommes").hover(function() {
		$(this).text("We are");
	}, function() {
		$(this).text("Nous sommes");
	});
	$("#etes").hover(function() {
		$(this).text("You all are");
	}, function() {
		$(this).text("Vous êtes");
	});
	$("#sont").hover(function() {
		$(this).text("They are");
	}, function() {
		$(this).text("Ils/Elles sont");
	});

//Faire
	$("td[name='one-fais']").hover(function() {
		$(this).text("I am doing");
	}, function() {
		$(this).text("Je fais");
	});
	$("td[name='two-fais']").hover(function() {
		$(this).text("You are doing");
	}, function() {
		$(this).text("Tu fais");
	});
	$("#fait").hover(function() {
		$(this).text("He/She is doing");
	}, function() {
		$(this).text("Il/Elle fait");
	});
	$("#faisons").hover(function() {
		$(this).text("We are doing");
	}, function() {
		$(this).text("Nous faisons");
	});
	$("#faites").hover(function() {
		$(this).text("You all are doing");
	}, function() {
		$(this).text("Vous faites");
	});
	$("#font").hover(function() {
		$(this).text("They are doing");
	}, function() {
		$(this).text("Ils/Elles font");
	});

//Avoir
	$("#ai").hover(function() {
		$(this).text("I have");
	}, function() {
		$(this).text("J'ai");
	});
	$("#as").hover(function() {
		$(this).text("You have");
	}, function() {
		$(this).text("Tu as");
	});
	$("#a").hover(function() {
		$(this).text("He/She have");
	}, function() {
		$(this).text("Il/Elle a");
	});
	$("#avons").hover(function() {
		$(this).text("We have");
	}, function() {
		$(this).text("Nous avons");
	});
	$("#avez").hover(function() {
		$(this).text("You all have");
	}, function() {
		$(this).text("Vous avez");
	});
	$("#ont").hover(function() {
		$(this).text("They have");
	}, function() {
		$(this).text("Ils/Elles ont");
	});
	
	//Faire
	$("#fais:first-child").hover(function() {
	    $(this).append("<b>&nbsp;| I am doing</b>");
	}, function() {
		$(this).find("b:last").remove();
	});
	$("#fais:nth-child(3)").hover(function() {
	   (this).append("<b>&nbsp;| You are doing</b>");
	}, function() {
		$(this).find("b:last").remove();
	});
	$("#fait").hover(function() {
	    $(this).append("<b>&nbsp;| He/She is doing</b>");
	}, function() {
		$(this).find("b:last").remove();
	});
	$("#faisons").hover(function() {
	    $(this).append("<b>&nbsp;| We are doing</b>");
	}, function() {
		$(this).find("b:last").remove();
	});
	$("#faites").hover(function() {
	    $(this).append("<b>&nbsp;| You all are doing</b>");
	}, function() {
		$(this).find("b:last").remove();
	});
	$("#font").hover(function() {
	    $(this).append("<b>&nbsp;| They are doing</b>");
	}, function() {
		$(this).find("b:last").remove();
	});
};
$(document).ready(irregular);
