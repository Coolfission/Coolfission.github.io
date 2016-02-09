var language = function() {
	$("#suis").hover(function() {
	    $("#suis").append("<b>&nbsp;| I am</b>");
	}, function() {
		$(this).find("b:last").remove();
	});
	$("#es").hover(function() {
	    $("#es").append("<b>&nbsp;| You are</b>");
	}, function() {
		$(this).find("b:last").remove();
	});
	$("#est").hover(function() {
	    $("#est").append("<b>&nbsp;| He/She is</b>");
	}, function() {
		$(this).find("b:last").remove();
	});
	$("#sommes").hover(function() {
	    $("#sommes").append("<b>&nbsp;| We are</b>");
	}, function() {
		$(this).find("b:last").remove();
	});
	$("#etes").hover(function() {
	    $("#etes").append("<b>&nbsp;| You all are</b>");
	}, function() {
		$(this).find("b:last").remove();
	});
	$("#sont").hover(function() {
	    $("#sont").append("<b>&nbsp;| They are</b>");
	}, function() {
		$(this).find("b:last").remove();
	});
};
$(document).ready(language);