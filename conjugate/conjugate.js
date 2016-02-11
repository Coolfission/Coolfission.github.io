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
		$(this).toggleText("You are doing", "Tu fais");
	});
	$("#fait").click(function() {
		$(this).toggleText("He/She is doing", "Il/Elle fait");
	});
	$("#faisons").click(function() {
		$(this).toggleText("We are doing", "Nous faisons");
	});
	$("#faites").click(function() {
		$(this).toggleText("You all are doing", "Vous faites");
	});
	$("#font").click(function() {
		$(this).toggleText("They are doing", "Ils/Elles font");
	});

//Avoir
	$("#ai").click(function() {
		$(this).toggleText("I have", "J'ai");
	});
	$("#as").click(function() {
		$(this).toggleText("You have", "Tu as");
	});
	$("#a").click(function() {
		$(this).toggleText("He/She have", "Il/Elle a");
	});
	$("#avons").click(function() {
		$(this).toggleText("We have", "Nous avons");
	});
	$("#avez").click(function() {
		$(this).toggleText("You all have", "Vous avez");
	});
	$("#ont").click(function() {
		$(this).toggleText("They have", "Ils/Elles ont");
	});
	
//Aller
	// $("#ai").click(function() {
	// 	$(this).toggleText("I have");
	// });
	// $("#as").click(function() {
	// 	$(this).toggleText("You have");
	// });
	// $("#a").click(function() {
	// 	$(this).toggleText("He/She have");
	// });
	// $("#avons").click(function() {
	// 	$(this).toggleText("We have");
	// });
	// $("#avez").click(function() {
	// 	$(this).toggleText("You all have");
	// });
	// $("#ont").click(function() {
	// 	$(this).toggleText("They have");
	// });
};
$(document).ready(irregular);