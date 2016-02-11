var irregular = function() {
//Basic
jQuery.fn.extend({
    toggleText: function (a, b) {
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
	$("#vais").click(function() {
		$(this).toggleText("I go", "Je vais");
	});
	$("#vas").click(function() {
		$(this).toggleText("You go", "Tu vas");
	});
	$("#va").click(function() {
		$(this).toggleText("He/She go", "Il/Elle va");
	});
	$("#allons").click(function() {
		$(this).toggleText("We go", "Nous allons");
	});
	$("#allez").click(function() {
		$(this).toggleText("You all go", "Vous allez");
	});
	$("#vont").click(function() {
		$(this).toggleText("They go", "Ils/Elles vont");
	});

//Venir
	$("td[name='one-viens']").click(function() {
		$(this).toggleText("I come", "Je viens");
	});
	$("td[name='two-viens']").click(function() {
		$(this).toggleText("You come", "Tu viens");
	});
	$("#vient").click(function() {
		$(this).toggleText("He/She come", "Il/Elle vient");
	});
	$("#venons").click(function() {
		$(this).toggleText("We come", "Nous venons");
	});
	$("#venez").click(function() {
		$(this).toggleText("You all come", "Vous venez");
	});
	$("#viennent").click(function() {
		$(this).toggleText("They come", "Ils/Elles viennent");
	});
};
$(document).ready(irregular);