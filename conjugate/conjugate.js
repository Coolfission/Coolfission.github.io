"use strict";

var toggle = function() {
	
	// function regular() {
	
	 $("#regular-option").click(function() {
	 	$("#irregular").attr("name", "none");
	 	$("#regular").attr("name", "normal");
	 	// $("noscript").css({"display": "none"});
	 });
	// };
	// function irregular() {
	 $("#irregular-option").click(function() {
	 	$("#irregular").attr("name", "normal");
	 	$("#regular").attr("name", "none");
	 });
	// };

	 $("<br/><br/>").insertBefore("table:even");

	// var url = window.location.href;
	// var lastPart = url.substr(url.lastIndexOf('#') + 1);
	// if (lastPart === "noscript") {
	//  	regular();
	// }
	// else if(lastPart === "irregular") {
	// 	irregular();
	// }
	// else {
	// 	regular();
	// }
};
$(document).ready(toggle);

var info = function() {
	jQuery.fn.extend({
	    toggleText: function (a, b){
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
	
	function open() {
		$("body, body *").css({
			"background": "rgba(0,0,0,1)", 
			"color": "#000", 
			"border-color": "#000", 
			"user-select": "none"});

		$("#info-close, #info, #info *").css({
			"opacity": "1", 
			"color": "#fff", 
			"user-select": "text", 
			"top": "0", 
			"z-index": "2"});
	}
		$("#info-enter").click(function() {open();});
		shortcut.add("shift+enter", function() {open();});

	function close() {
		$("body, body *").css({
			"background": "",
			"color": "",
			"border-color": "", 
			"user-select": "", 
			"opacity": "1", 
			"z-index": "1"});

		$("#info-close, #info, #info *").css({
			"z-index": "-1",
			"opacity": "0", 
			"top": ""});
	}
		$("#info-close").click(function() {close();});
		shortcut.add("Esc", function() {close();});
		
	//ER
	$("#je-er").click(function() {
		$(this).toggleText('I (conjugate)', 'Je -e');
	});
	$("#tu-er").click(function() {
		$(this).toggleText('You (conjugate)', 'Tu -es');
	});
	$("#il-elle-er").click(function() {
		$(this).toggleText('He/She (conjugate)', 'Il/Elle/On -e');
	});
	$("#nous-er").click(function() {
		$(this).toggleText('We (conjugate)', 'Nous -ont');
	});
	$("#vous-er").click(function() {
		$(this).toggleText('You all (conjugate)', 'Vous -ez');
	});
	$("#ils-elles-er").click(function() {
		$(this).toggleText('They (conjugate)', 'Ils/Elles -ent');
	});

	//IR
	$("#je-ir").click(function() {
		$(this).toggleText('I (conjugate)', 'Je -is');
	});
	$("#tu-ir").click(function() {
		$(this).toggleText('You (conjugate)', 'Tu -is');
	});
	$("#il-elle-ir").click(function() {
		$(this).toggleText('He/She (conjugate)', 'Il/Elle/On -it');
	});
	$("#nous-ir").click(function() {
		$(this).toggleText('We (conjugate)', 'Nous -issons');
	});
	$("#vous-ir").click(function() {
		$(this).toggleText('You all (conjugate)', 'Vous -issez');
	});
	$("#ils-elles-ir").click(function() {
		$(this).toggleText('They (conjugate)', 'Ils/Elles -issent');
	});

	//RE
	$("#je-re").click(function() {
		$(this).toggleText('I (conjugate)', 'Je -s');
	});
	$("#tu-re").click(function() {
		$(this).toggleText('You (conjugate)', 'Tu -s');
	});
	$("#il-elle-re").click(function() {
		$(this).toggleText('He/She (conjugate)', 'Il/Elle/On -()');
	});
	$("#nous-re").click(function() {
		$(this).toggleText('We (conjugate)', 'Nous -ons');
	});
	$("#vous-re").click(function() {
		$(this).toggleText('You all (conjugate)', 'Vous -ez');
	});
	$("#ils-elles-re").click(function() {
		$(this).toggleText('They (conjugate)', 'Ils/Elles -ent');
	});


	//First Group
	$("#je-pre").click(function() {
		$(this).toggleText('I (conjugate)', 'Je -s');
	});
	$("#tu-pre").click(function() {
		$(this).toggleText('You (conjugate)', 'Tu -s');
	});
	$("#il-elle-pre").click(function() {
		$(this).toggleText('He/She (conjugate)', 'Il/Elle/On -t');
	});
	$("#nous-pre").click(function() {
		$(this).toggleText('We (conjugate)', 'Nous -ons');
	});
	$("#vous-pre").click(function() {
		$(this).toggleText('You all (conjugate)', 'Vous -ez');
	});
	$("#ils-elles-pre").click(function() {
		$(this).toggleText('They (conjugate)', 'Ils/Elles -ent');
	});

	//Second Group
	$("#je-af").click(function() {
		$(this).toggleText('I (conjugate)', 'Je -e');
	});
	$("#tu-af").click(function() {
		$(this).toggleText('You (conjugate)', 'Tu -es');
	});
	$("#il-elle-af").click(function() {
		$(this).toggleText('He/She (conjugate)', 'Il/Elle/On -e');
	});
	$("#nous-af").click(function() {
		$(this).toggleText('We (conjugate)', 'Nous -ons');
	});
	$("#vous-af").click(function() {
		$(this).toggleText('You all (conjugate)', 'Vous -ez');
	});
	$("#ils-elles-af").click(function() {
		$(this).toggleText('They (conjugate)', 'Ils/Elles -ent');
	});
};
$(document).ready(info);

var scroll = function() {

	$(window).scroll(function(e){ 
	  var $el = $('#index'); 
	  if ($(this).scrollTop() > 132 && $el.css('position') != 'fixed'){ 
	    $('#index').css({'position': 'fixed', 'top': '0'}); 
	  }
	  if ($(this).scrollTop() < 132 && $el.css('position') == 'fixed')
	  {
	    $('#index').css({'position': 'relative', 'top': '3'}); 
	  } 
	});

	var lastId,
	    topMenu = $("#index"),
	    topMenuHeight = topMenu.outerHeight()+15,

	    menuItems = topMenu.find("a"),

	    scrollItems = menuItems.map(function(){
	      var item = $($(this).attr("href"));
	      if (item.length) { return item; }
	    });

	menuItems.click(function(e){
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	  $('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 300);
	  e.preventDefault();
	});

	$(window).scroll(function(){
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });

	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;

	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href='#"+id+"']").parent().addClass("active");
	   }                   
	});
}
$(document).ready(scroll);