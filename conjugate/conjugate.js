var irregular = function() {
	//Etre
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
	
	//Faire
	$("#fais").hover(function() {
	    $(this).append("<b>&nbsp;| I am doing</b>");
	}, function() {
		$(this).find("b:last").remove();
	});
	$("#fais").hover(function() {
	   (this).append("<b>&nbsp;| You are doing</b>");
	}, function() {
		$(this).find("b:last").remove();
	});
	$("#fait").hover(function() {
	    (this).append("<b>&nbsp;| He/She is doing</b>");
	}, function() {
		$(this).find("b:last").remove();
	});
	$("#faisons").hover(function() {
	    $((this).append("<b>&nbsp;| We are doing</b>");
	}, function() {
		$(this).find("b:last").remove();
	});
	$("#faites").hover(function() {
	    $(this).append("<b>&nbsp;| You all are</b>");
	}, function() {
		$(this).find("b:last").remove();
	});
	$("#font").hover(function() {
	    $(this).append("<b>&nbsp;| They are</b>");
	}, function() {
		$(this).find("b:last").remove();
	});
};
$(document).ready(irregular);
