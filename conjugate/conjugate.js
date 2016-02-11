var irregular = function() {
//Basic
jQuery.fn.extend({
    toggleText: function (a, b, event){
        var that = this;
            if (that.text() != a && that.text() != b){
                that.text(a);
            }
            else
            if (that.text() == a){
                that.text(b);
            }
            else
            if (that.text() == b){
                that.text(a);
            }
        return this;
    }
});


//Etre
	$("#suis").click(function() {
		$(this).toggleText("I am", "Je suis");
	});
	$("#es").click(function() {
		$(this).toggleText("You are", "Tu es");
	});
	$("#est").click(function() {
		$(this).toggleText("He/She is", "Il/Elle est");
	});
	$("#sommes").click(function() {
		$(this).toggleText("We are", "Nous sommes");
	});
	$("#etes").click(function() {
		$(this).toggleText("You all are", "Vous êtes");
	});
	$("#sont").click(function() {
		$(this).toggleText("They are", "Ils/Elles sont");
	});

//Faire
	$("td[name='one-fais']").click(function() {
		$(this).toggleText("I am doing", "Je fais");
	});
	$("td[name='two-fais']").click(function() {
		$(this).text("You are doing");
	}, function() {
		$(this).text("Tu fais");
	});
	$("#fait").click(function() {
		$(this).text("He/She is doing");
	}, function() {
		$(this).text("Il/Elle fait");
	});
	$("#faisons").click(function() {
		$(this).text("We are doing");
	}, function() {
		$(this).text("Nous faisons");
	});
	$("#faites").click(function() {
		$(this).text("You all are doing");
	}, function() {
		$(this).text("Vous faites");
	});
	$("#font").click(function() {
		$(this).text("They are doing");
	}, function() {
		$(this).text("Ils/Elles font");
	});

//Avoir
	$("#ai").click(function() {
		$(this).text("I have");
	}, function() {
		$(this).text("J'ai");
	});
	$("#as").click(function() {
		$(this).text("You have");
	}, function() {
		$(this).text("Tu as");
	});
	$("#a").click(function() {
		$(this).text("He/She have");
	}, function() {
		$(this).text("Il/Elle a");
	});
	$("#avons").click(function() {
		$(this).text("We have");
	}, function() {
		$(this).text("Nous avons");
	});
	$("#avez").click(function() {
		$(this).text("You all have");
	}, function() {
		$(this).text("Vous avez");
	});
	$("#ont").click(function() {
		$(this).text("They have");
	}, function() {
		$(this).text("Ils/Elles ont");
	});
	
//Aller
	$("#ai").click(function() {
		$(this).text("I have");
	}, function() {
		$(this).text("J'ai");
	});
	$("#as").click(function() {
		$(this).text("You have");
	}, function() {
		$(this).text("Tu as");
	});
	$("#a").click(function() {
		$(this).text("He/She have");
	}, function() {
		$(this).text("Il/Elle a");
	});
	$("#avons").click(function() {
		$(this).text("We have");
	}, function() {
		$(this).text("Nous avons");
	});
	$("#avez").click(function() {
		$(this).text("You all have");
	}, function() {
		$(this).text("Vous avez");
	});
	$("#ont").click(function() {
		$(this).text("They have");
	}, function() {
		$(this).text("Ils/Elles ont");
	});
};
$(document).ready(irregular);