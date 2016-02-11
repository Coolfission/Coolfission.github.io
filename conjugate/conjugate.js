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

//Acheter
	$("td[name='one-achete']").click(function() {
		$(this).toggleText("I buy", "J'achète");
	});
	$("td[name='two-achete']").click(function() {
		$(this).toggleText("He/she buy", "Il/Elle achète");
	});
	$("#achetes").click(function() {
		$(this).toggleText("You buy", "Tu achètes");
	});
	$("#achetons").click(function() {
		$(this).toggleText("We buy", "Nous achetons");
	});
	$("#achetez").click(function() {
		$(this).toggleText("You all buy", "Vous achetez");
	});
	$("#achetent").click(function() {
		$(this).toggleText("They buy", "Ils/Elles achètent");
	});

//Preferer
	$("td[name='one-prefere']").click(function() {
		$(this).toggleText("I prefer", "Je préfère");
	});
	$("td[name='two-prefere']").click(function() {
		$(this).toggleText("He/she prefer", "Il/Elle préfère");
	});
	$("#preferes").click(function() {
		$(this).toggleText("You prefer", "Tu préfères");
	});
	$("#preferons").click(function() {
		$(this).toggleText("We prefer", "Nous préférons");
	});
	$("#preferez").click(function() {
		$(this).toggleText("You all prefer", "Vous préférez");
	});
	$("#preferent").click(function() {
		$(this).toggleText("They prefer", "Ils/Elles préfèrent");
	});

//Esperer
	$("td[name='one-espere']").click(function() {
		$(this).toggleText("I hope", "J'espère");
	});
	$("td[name='two-espere']").click(function() {
		$(this).toggleText("He/she hope", "Il/Elle espère");
	});
	$("#esperes").click(function() {
		$(this).toggleText("You hope", "Tu espères");
	});
	$("#esperons").click(function() {
		$(this).toggleText("We hope", "Nous espérons");
	});
	$("#esperez").click(function() {
		$(this).toggleText("You all hope", "Vous espérez");
	});
	$("#esperent").click(function() {
		$(this).toggleText("They hope", "Ils/Elles espèrent");
	});

//Amener
	$("td[name='one-amene']").click(function() {
		$(this).toggleText("I bring", "J'amène");
	});
	$("td[name='two-amene']").click(function() {
		$(this).toggleText("He/she bring", "Il/Elle amène");
	});
	$("#amenes").click(function() {
		$(this).toggleText("You bring", "Tu amènes");
	});
	$("#amenons").click(function() {
		$(this).toggleText("We bring", "Nous amenons");
	});
	$("#amenez").click(function() {
		$(this).toggleText("You all bring", "Vous amenez");
	});
	$("#amenent").click(function() {
		$(this).toggleText("They bring", "Ils/Elles amènent");
	});
};
$(document).ready(irregular);