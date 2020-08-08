jQuery(document).ready(function($) {
   $(window).load(function() {	
	 var left01=function(){
		var con_h= $(".dg-tabs-left01 .resp-tabs-container").outerHeight();
		var li_leng=$(".dg-tabs-left01 .resp-tabs-list li").length;	
		var li_height=con_h/li_leng+'px';
		$(".dg-tabs-left01 .resp-tabs-list li").height(li_height).css("line-height",li_height);		 
		 }					   
		left01();
	$(window).resize(function() {
       left01();
   });	
 })
   
$(window).load(function() {	
	  var bottom02=function(){
		var con_w= $(".dg-tabs-bottom02").outerWidth();
		var li_leng=$(".dg-tabs-bottom02 .resp-tabs-list li").length;	
		var li_width=con_w/li_leng+'px';
		$(".dg-tabs-bottom02 .resp-tabs-list li").width(li_width);		
		}						
	       bottom02();	
	$(window).resize(function() {
           bottom02();
   });		
});
	
$(window).load(function() {	
	  var bottom03=function(){
		var con_w= $(".dg-tabs-bottom03").outerWidth();
		var li_leng=$(".dg-tabs-bottom03 .resp-tabs-list li").length;	
		var li_width=con_w/li_leng+'px';
		$(".dg-tabs-bottom03 .resp-tabs-list li").width(li_width);		
		}						
	       bottom03();	
	$(window).resize(function() {
           bottom03();
   });		
});


  
   
});
function ImgLoad(callback, e) {
	var imgdefereds = [];
	e.find('img').each(function () {
		var dfd = jQuery.Deferred();
		$(this).bind('load', function () {
			dfd.resolve();
		}).bind('error', function () {})
		if (this.complete)
			setTimeout(function () {
				dfd.resolve();
			}, 500);
		imgdefereds.push(dfd);
	})
	jQuery.when.apply(null, imgdefereds).done(function () {
		callback();
	});
}
function changeURLPar(contentUrl, key, keyValue) {
	var pattern = key + '=([^&]*)';
	var replaceText = key + '=' + keyValue;
	if (contentUrl.match(pattern)) {
		var tmp = '/' + key + '=[^&]*/';
		tmp = contentUrl.replace(eval(tmp), replaceText);
		return (tmp);
	} else {
		if (contentUrl.match('[\?]')) {
			return contentUrl + '&' + replaceText;
		} else {
			return contentUrl + '?' + replaceText;
		}
	}
	return contentUrl + '\n' + key + '\n' + keyValue;
}

jQuery(document).ready(function ($) {
	jQuery(".HoverStyle_4 #dnngo_megamenu .primary_structure").lavaLamp({
		fx : 'easeOutExpo',
		speed : 600
	});
});

jQuery(document).ready(function ($) {
	animationShow({
		"#user-icon" : "#Loginandlanguage",
		"#search-icon" : "#search"
	});
	animationShow({
		"#RightMenu-icon" : "#main_right",
		"#rightClose" : "#main_right"
	});
	animationShow({
		"#rightClose" : "#main_right"
	});
	animationShow({
		"#ico_search" : "#mobile_search"
	});

	jQuery(document).click(function (e) {
		if ($(".nav_ico").length != 0) {
			if (!($(e.target).closest(".nav_ico").length != 0 || jQuery.contains($(".nav_ico")[0], e.target))) {
				$("#header1 .nav_ico .searchBox,#header1 .Loginandlanguage").fadeOut();
				$("#header1 .nav_ico .fa").removeClass("active");
			}
		}
		if ($(".nav_ico").length != 0 && $("#main_right").length != 0) {
			if (!($(e.target).closest("#main_right").length != 0 || jQuery.contains($("#main_right"), e.target) || $(e.target).closest(".nav_ico").length != 0 || jQuery.contains($(".nav_ico")[0], e.target))) {
				$("#main_right").removeClass("active");
				$("#header2 .nav_ico .fa").removeClass("active");
			}
		}
		if ($(".searchMainBox").length != 0) {
			if (!($(e.target).closest(".searchMainBox").length != 0 || jQuery.contains($(".searchMainBox")[0], e.target))) {
				$(".searchMainBox .searchBox").fadeOut();
				$(".searchMainBox .fa").removeClass("active");
			}
		}
		if ($(".nav_ico").length != 0 && $("#main_right").length != 0) {
			if (!($(e.target).closest("#main_right").length != 0 || jQuery.contains($("#main_right"), e.target) || $(e.target).closest(".nav_ico").length != 0 || jQuery.contains($(".nav_ico")[0], e.target))) {
				$("#main_right").removeClass("active");
				$("#header2 .nav_ico .fa").removeClass("active");
			}
		}
	});
})
jQuery(document).ready(function ($) {
	var e = $(".roll_menu");
	if (e.length != 0) {
		top = e.offset().top + e.height();
		e.roll_menu({
			MTop : e.data("top"),
			noroll : 992
		});
	}
	//	e.roll_menu({ MTop:e.offset().top-1});
});


jQuery(document).ready(function ($) {
	if ($("#header5").length != 0) {
		var e=$(".header5close");
		
		if(e.data("stg")=="push-content"){
			e.appendTo(".dnngo-main");
			$("#header5").appendTo(".dnngo-main");
			var oneclick=true;
			$(".header5close").on("click", function () {
				if(oneclick){
					oneclick=false;
					if($("html").hasClass("header5_active")){
						$("html").removeClass("header5_active").delay(500).queue(function(){ oneclick=true; $(this).removeClass("push-content").dequeue(); })
					}else{
						$("html").addClass("header5_active push-content").delay(500).queue(function(){ oneclick=true;  $(this).dequeue(); })
					}
				}
			})
		}else{
			$(".header5close").on("click", function () {
				$("html").toggleClass("header5_active "+$(this).data("stg"))
			})
		
		}
	}
})

/*header7*/
jQuery(document).ready(function ($) {

	if ($("#header7").length != 0) {
		var e = $("#header7"),
		im = e.find(".primary_structure").children("li"),
		l = im.length,
		time = 200;
		c = Math.round(l / 2) - 1;
		e.find(".primary_structure").height(im.eq(0).outerHeight(true));
		im.slice(0, c + 1).addClass("left-item");
		im.slice(c + 1, l).addClass("right-item");
		$(this).find(".dnn_logo").insertAfter(im.eq(c)).wrap("<li class=\"menulogo\"></li>");

		var logo = e.find(".menulogo")
			ImgLoad(function () {
				var left = logo.position().left;
				var right = logo.position().left + logo.outerWidth(true);
				var i1 = 0,
				i2 = c + 1;
				logo.addClass("logo-at");
				var leftitem = function () {
					var t = im.eq(c - i1);
					left = left - t.outerWidth(true)
						t.css("left", left).addClass("left-at");
					i1++;
					if (i1 < c + 1) {
						setTimeout(leftitem, time);
					}
				}
				var rightitem = function () {
					var t = im.eq(i2);
					if (i2 != c + 1) {
						right = right + im.eq(i2 - 1).outerWidth(true)
					}
					t.css("left", right).addClass("right-at");
					i2++;
					if (i2 < l) {
						setTimeout(rightitem, time);
					}
				}
				setTimeout(leftitem, time);
				setTimeout(rightitem, time);

				var resize = function () {
					var left2 = logo.position().left;
					var right2 = logo.position().left + logo.outerWidth(true);
					for (i = 0; i < l; i++) {
						if (i < c + 1) {
							var t = im.eq(c - i);
							left2 = left2 - t.outerWidth(true)
								t.css("left", left2)
						} else {
							var t = im.eq(i);
							if (i != c + 1) {
								right2 = right2 + im.eq(i - 1).outerWidth(true)
							}
							t.css("left", right2);

						}
					}
				}

				$(window).resize(function () {
					resize();
				})
				var roll = true;
				$(window).scroll(function () {
					if ($(".roll_menu").hasClass("roll_activated") && roll) {
						roll = false;
						resize();
					} else if (!$(".roll_menu").hasClass("roll_activated") && !roll) {
						roll = true;
						resize();
					}
				})

			}, im)

			$("#header7 .nav_ico span").on("click", function () {
				$(this).toggleClass("active");
				$(".rightBox.header7").toggleClass("active");
			})
			jQuery(document).click(function (e) {
				if ($(".rightBox.header7").length != 0) {
					if (!($(e.target).closest("#header7 .nav_ico span").length != 0 || $(e.target).closest(".rightBox.header7").length != 0 || jQuery.contains($(".rightBox.header7")[0], e.target))) {
						$("#header7 .nav_ico span").removeClass("active");
						$(".rightBox.header7").removeClass("active");
					}
				}
			});
		if($(".userProfileImg img").length!=0){
		$(".userProfileImg img").attr("src", changeURLPar($(".userProfileImg img").attr("src"), "h", 100))
		$(".userProfileImg img").attr("src", changeURLPar($(".userProfileImg img").attr("src"), "w", 100))
		}
		$(".header7.rightBox .userProfileImg").prependTo(".header7 .Login").wrap("<ul class=\"buttonGroup\"></ul>");
		var rg = $("<ul class=\"registerGroup\"></ul>");
		$(".header7.rightBox .userMessages").appendTo(rg)
		$(".header7.rightBox .userNotifications ").appendTo(rg);
		rg.appendTo(".header7 .Login");
		$(".header7.rightBox .userProfileImg").prependTo(".header7 .Login").wrap("<ul class=\"buttonGroup\"></ul>");
		var rg = $("<ul class=\"registerGroup\"></ul>");
		$(".header7.rightBox .userMessages").appendTo(rg)
		$(".header7.rightBox .userNotifications ").appendTo(rg);
		rg.appendTo(".header7 .Login");
	}
})

jQuery(document).ready(function ($) {
	if ($("#header8").length != 0) {
		$($(".header8 #dnngo_megamenu > .mobilemenu_close").attr("href")).prependTo("#dnngo_megamenu");
		$(".leftBox.header8 .mobile_menu.mm-menu").height($(window).height() - $(".leftBox.header8 .nav_box").position().top)
		$(window).resize(function () {
			$(".leftBox.header8 .mobile_menu.mm-menu").height($(window).height() - $(".leftBox.header8 .nav_box").position().top)
		})
		$("#header8 .nav_ico ,.leftBox.header8 .toggle_leftBox").on("click", function () {
			$("html").toggleClass("header8_active")
		})
		jQuery(document).click(function (e) {
			if (!($(e.target).closest(".nav_ico >span").length != 0 || $(e.target).closest(".leftBox.header8").length != 0 || jQuery.contains($(".leftBox.header8")[0], e.target))) {
				$("html").removeClass("header8_active");
			}
		})
		
		$(".header8 .menu_list.mm-listview li > a").click(function () {
			if($(this).attr("href")=="#"){
				$("html").removeClass("header8_active");
			}
		})
		
		
		$("#header8 .searchBox .search-close,#header8 .search_ico").on("click", function () {
			$("#header8 .searchBox").toggleClass("active")
		})
	}
})
jQuery(document).ready(function ($) {
	if ($("#header9").length != 0) {
		$("#header9 .nav_ico > .dislay-menu,.header9 .toggle_leftBox").on("click", function () {
			$("html").toggleClass("header9_active")
		})
		
		$(".header9 .nav_box").height($(window).height() - $(".header9 .nav_box").position().top)
		$(window).resize(function () {
			$(".header9 .nav_box").height($(window).height() - $(".header9 .nav_box").position().top)
		})
		$("#header9 .nav_ico > .fa-user,#header9 .user-close").on("click", function () {
			$("html").toggleClass("header9_user_active").removeClass("header9_search_active")
		})
		$("#header9 .nav_ico > .fa-search,#header9 .search-close").on("click", function () {
			$("html").toggleClass("header9_search_active").removeClass("header9_user_active")
		})

	}
})




jQuery(document).ready(function ($) {
	$(".dnngo_slide_menu").each(function (index, element) {
		$(this).parent().addClass("slide")
	});
})

$(document).ready(function () {
	$("#main_right").appendTo("body")
})

$(document).ready(function () {
	if ($("#pagepiling").length != 0) {
		$("body,html").css("overflow", "hidden");
	}
})


$(document).ready(function () {
	$(".home02-banner").css("min-height", $(window).height());
})

jQuery(document).ready(function ($) {
	$(".home09-banner").each(function () {
		var full = $(this).find("li");
		full.height($(window).height());
		$(window).resize(function () {
			full.height($(window).height())
		})
	});
	$("#nextPage").click(function () {
		jQuery('body,html').animate({
			scrollTop : $(window).height()
		}, 500);
	})
	$(window).load(function () {
		$(".home09-banner").addClass("animations");
	});
})

$(document).ready(function () {
	if ($("#pagepiling").length != 0) {
		$("body,html").css("overflow", "hidden");
	}
	var deleteLog = false;
	if ($("#pagepiling").length == 0)
		return false;
	var el = $("#pagepiling"),
	e = el.children(".section"),
	start = e.eq(0).data("tooltips") ? e.eq(0).data("tooltips") : "page 1",
	d = start + " ";
	for (i = 1; i < e.length; i++) {
		var s = e.eq(i).data("tooltips") ? e.eq(i).data("tooltips") : "page " + (i + 1)
			d += "," + s;
	}
	var data = d.split(",");
	el.pagepiling({
		navigation : {
			'textColor' : '#f2f2f2',
			'bulletsColor' : '#ccc',
			'position' : el.data("navposition") ? el.data("navposition") : "right",
			'tooltips' : data
		},
		scrollingSpeed : el.data("Speed") ? parseInt(el.data("Speed")) : 700,
		easing : el.data("easing") ? el.data("easing") : "swing",
		direction : el.data("direction") ? el.data("direction") : "vertical"
	})
	if ($(window).scrollTop() > 0) {
		$("body,html").css("overflow", "visible");
		$("#pagepiling").remove();
		$("#pp-nav").remove();
	}
	var w1 = $(window).width();
	$("body,html").css("overflow", "visible");
	var w2 = $(window).width();
	$("body,html").css("overflow", "hidden");
	$(window).stop().scrollTop(0);
	e.css("height", $(window).height());
	e.css("width", $(window).width());
	el.css("height", $(window).height());
	el.css("width", $(window).width());
	$("body").css("padding-right", w1 - w2);
	$(".gohome").on("click", function () {
		$("#pp-nav").remove();
		el.children(".section.active").css({
			"top" : "auto",
			"bottom" : "0"
		}).siblings().remove()

		el.stop().animate({
			height : 0
		}, 800, function () {
			el.remove();
			$("body").css("padding-right", "0");
			$("body,html").css("overflow", "visible");
		});
	})
	$(window).resize(function () {
		e.css("height", $(window).height());
		e.css("width", $(window).width());
		el.css("height", $(window).height());
		el.css("width", $(window).width());
	})
});
jQuery(document).ready(function ($) {
	$(".home13-tab .resp-tabs-list").each(function () {
		$(this).find("li").width((100 / $(this).find("li").length) + "%").show();
	});

})
jQuery(document).ready(function ($) {
	$(".home13-ourTeam").each(function () {
		var e = $(this),
		t = e.find(".ourTeam_thumbnail"),
		c = e.find(".ourTeam_content"),
		p = e.find(".ourTeam_img > img");
		tl = t.children("li"),
		cl = c.children(".item");
		tl.click(function () {
			if (p.attr("src") != $(this).attr("bigimg")) {
				$(this).addClass("active").siblings().removeClass("active");
				cl.eq($(this).index()).stop().fadeIn(500).addClass("active").siblings().hide().removeClass("active");
				p.attr("src", $(this).attr("bigimg")).stop().fadeOut(0).fadeIn(500);
			}
		});
		tl.each(function () {
			var img = new Image();
			img.src = $(this).attr("bigimg");
		});

	});
})

//Top:
jQuery(document).ready(function ($) {
	jQuery('#to_top,#go_up').click(function () {
		jQuery('body,html').stop().animate({
			scrollTop : 0
		}, 800);
	});
	jQuery('.timeline_End').click(function () {
		jQuery('body,html').stop().animate({
			scrollTop : jQuery('.timeline_start').offset().top
		}, 800);
	});
	var backtop = function () {
		Math.max.call(window.scrollTop, document.body.scrollTop, document.documentElement.scrollTop) > 245 ? jQuery('#to_top').fadeIn(300) : jQuery('#to_top').fadeOut(300)
	}
	$(window).load(function () {
		backtop();
	})
	$(window).scroll(function () {
		backtop();
	})

});
jQuery(document).ready(function ($) {
	$("#header_slide").on("click", function () {
		var e = $(this),
		box = $("#box-container"),
		ri = $(".rightmain");
		if (box.length != 0) {
			if (box.hasClass("delay"))
				return false;
			if (!box.hasClass("active")) {
				box.addClass("active");
				e.removeClass("active");
				$(this).delay(500).queue(function () {
					ri.one("click", function () {
						box.removeClass("active").addClass("delay").delay(500).queue(function () {
							$(this).removeClass("delay").dequeue()
						});
						e.addClass("active");
					})
					$(window).one("scroll", function () {
						box.removeClass("active").addClass("delay").delay(500).queue(function () {
							$(this).removeClass("delay").dequeue()
						});
						e.addClass("active");
					})
					$(this).dequeue();
				})
			} else {
				box.removeClass("active").addClass("delay").delay(500).queue(function () {
					$(this).removeClass("delay").dequeue()
				}); ;
				e.addClass("active");
			}
		} else {
			e.toggleClass("active");
			$(".left-menu").toggleClass("active");
		}

	})
})
//chart
$(window).load(function () {
	$(".decorate").each(function () {
		$(this).easyPieChart({
			animate : 1000,
			barColor : $(this).css("color"),
			trackColor : "#dddddd",
			size : 200,
			lineWidth : 10,
			lineCap : 'round',
			scaleColor : false
		});
	});
	$(".loaded-decorate01").each(function () {
		$(this).easyPieChart({
			animate : 1000,
			barColor : $(this).css("color"),
			trackColor : "#dddddd",
			size : 172,
			lineWidth : 8,
			lineCap : 'square',
			scaleColor : false
		});
	});
	$(".percentage1").each(function () {
		$(this).easyPieChart({
			animate : 1000,
			barColor : $(this).css("color"),
			trackColor : "#FFFFFF",
			size : 155,
			lineWidth : 2,
			lineCap : 'round',
			scaleColor : false,
			onStep : function (from, to, percent) {
				$(this.el).find('.percentage_inner span').text(Math.round(percent));
			}
		});
	});
	
	$(".list-percentage1").each(function () {
		$(this).easyPieChart({
			animate : 1000,
			barColor : $(this).css("color"),
			trackColor : "#FFFFFF",
			size : 175,
			lineWidth : 2,
			lineCap : 'round',
			scaleColor : false,
			onStep : function (from, to, percent) {
				$(this.el).find('.percentage_inner span').text(Math.round(percent));
			}
		});
	});
	$(".list-percentage2").each(function () {
		$(this).easyPieChart({
			animate : 1000,
			barColor : $(this).css("color"),
			trackColor : "#f6f6f6",
			size : 172,
			lineWidth : 8,
			lineCap : 'square',
			scaleColor : false,
			onStep : function (from, to, percent) {
				$(this.el).find('.percentage_inner span').text(Math.round(percent));
			}
		});
	});
	$(".list-percentage3").each(function () {
		$(this).easyPieChart({
			animate : 1000,
			barColor : $(this).css("color"),
			trackColor : "rgba(255,255,255,0.3)",
			size : 113,
			lineWidth : 7,
			lineCap : 'round',
			scaleColor : false,
			onStep : function (from, to, percent) {
				$(this.el).find('.percentage_inner span').text(Math.round(percent));
			}
		});
	});
	
	$(".list-percentage4").each(function () {
		$(this).easyPieChart({
			animate : 1000,
			barColor : $(this).css("color"),
			trackColor : "#fff",
			size : 86,
			lineWidth : 4,
			lineCap : 'round',
			scaleColor : false,
			onStep : function (from, to, percent) {
				$(this.el).find('.percentage_inner span').text(Math.round(percent));
			}
		});
	});	
	
		$(".list-percentage5").each(function () {
		$(this).easyPieChart({
			animate : 1000,
			barColor : $(this).css("color"),
			trackColor : "#f6f6f6",
			size : 202,
			lineWidth : 40,
			lineCap : 'square',
			scaleColor : false,
			onStep : function (from, to, percent) {
				$(this.el).find('.percentage_inner span').text(Math.round(percent));
			}
		});
	});
		
		
		$(".list-percentage7").each(function () {
		$(this).easyPieChart({
			animate : 1000,
			barColor : $(this).css("color"),
			trackColor : "#fff",
			size : 172,
			lineWidth : 9,
			lineCap : 'round',
			scaleColor : false,
			onStep : function (from, to, percent) {
				$(this.el).find('.percentage_inner span').text(Math.round(percent));
			}
		});
	});
		
		$(".list-percentage8").each(function () {
		$(this).easyPieChart({
			animate : 1000,
			barColor : $(this).css("color"),
			trackColor : "#fff",
			size : 172,
			lineWidth : 15,
			lineCap : 'square',
			scaleColor : false,
			onStep : function (from, to, percent) {
				$(this.el).find('.percentage_inner span').text(Math.round(percent));
			}
		});
	});
		
		
		$(".list-percentage9").each(function () {
		$(this).easyPieChart({
			animate : 1000,
			barColor : $(this).css("color"),
			trackColor : "",
			size : 202,
			lineWidth : 7,
			lineCap : 'square',
			scaleColor : false,
			onStep : function (from, to, percent) {
				$(this.el).find('.percentage_inner span').text(Math.round(percent));
			}
		});
	});
		
		$(".list-percentage10").each(function () {
		$(this).easyPieChart({
			animate : 1000,
			barColor : $(this).css("color"),
			trackColor : "#ebeaea",
			size : 202,
			lineWidth : 12,
			lineCap : 'square',
			scaleColor : false,
			onStep : function (from, to, percent) {
				$(this.el).find('.percentage_inner span').text(Math.round(percent));
			}
		});
	});
		
	$(".percentage2").each(function () {
		$(this).easyPieChart({
			animate : 1000,
			barColor : $(this).css("color"),
			trackColor : "transparent",
			size : 251,
			lineWidth : 7,
			lineCap : 'round',
			scaleColor : false,
			onStep : function (from, to, percent) {
				$(this.el).find('.percentage_inner span').text(Math.round(percent));
			}
		});
	});
	
	$(".percentage3").each(function () {
		$(this).easyPieChart({
			animate : 1000,
			barColor : $(this).css("color"),
			trackColor : "transparent",
			size : 192,
			lineWidth : 14,
			lineCap : 'square',
			scaleColor : false,
			onStep : function (from, to, percent) {
				$(this.el).find('.percentage_inner span').text(Math.round(percent));
			}
		});
	});
	
	
	$(".percentage21").each(function () {
		$(this).easyPieChart({
			animate : 1000,
			barColor : $(this).css("color"),
			trackColor : "transparent",
			size : 154,
			lineWidth : 3,
			lineCap : 'square',
			scaleColor : false,
			onStep : function (from, to, percent) {
				$(this.el).find('.percentage_inner span').text(Math.round(percent));
			}
		});
	});
	
	$(".home21-percentage").each(function () {
		$(this).easyPieChart({
			animate : 1000,
			barColor : $(this).css("color"),
			trackColor : "transparent",
			size : 154,
			lineWidth : 3,
			lineCap : 'square',
			scaleColor : false,
			onStep : function (from, to, percent) {
				$(this.el).find('.percentage_inner span').text(Math.round(percent));
			}
		});
	});
	
	
	
	$(".faq02-percentage").each(function () {
		$(this).easyPieChart({
			animate : 1000,
			barColor : $(this).css("color"),
			trackColor : "transparent",
			size : 200,
			lineWidth : 6,
			lineCap : 'square',
			scaleColor : false,
			onStep : function (from, to, percent) {
				$(this.el).find('.percentage_inner span').text(Math.round(percent));
			}
		});
	});
	$(".percentage4").each(function () {
		$(this).easyPieChart({
			animate : 1000,
			barColor : $(this).css("color"),
			trackColor : "#FFFFFF",
			size : 94,
			lineWidth : 2,
			lineCap : 'square',
			scaleColor : false,
			onStep : function (from, to, percent) {
				$(this.el).find('.percentage_inner span').text(Math.round(percent));
			}
		});
	});
	$(".percentage5").each(function () {
		$(this).easyPieChart({
			animate : 1000,
			barColor : $(this).css("color"),
			trackColor : "#f0f0f0",
			size : 160,
			lineWidth : 2,
			lineCap : 'square',
			scaleColor : false,
			onStep : function (from, to, percent) {
				$(this.el).find('.percentage_inner span').text(Math.round(percent));
			}
		});
	});
	var home09percentage = $(".home09-percentage");
	home09percentage.easyPieChart({
		animate : 2000,
		barColor : home09percentage.css("color"),
		trackColor : "transparent",
		size : 190,
		lineWidth : 2,
		lineCap : 'square',
		scaleColor : false,
		onStep : function (from, to, percent) {
			$(this.el).find('.percentage_inner span').text(Math.round(percent));
		}
	});

	var e_13 = $(".percentage13");
	e_13.easyPieChart({
		animate : 2000,
		barColor : e_13.css("color"),
		trackColor : "#eeeeee",
		size : 150,
		lineWidth : 11,
		lineCap : 'square',
		scaleColor : false,
		onStep : function (from, to, percent) {
			$(this.el).find('.percentage_inner span').text(Math.round(percent));
		}
	});
	var e_15 = $(".home15-percentage");
	e_15.easyPieChart({
		animate : 2000,
		barColor : "#000",
		trackColor : "#FFF",
		size : 185,
		lineWidth : 8,
		lineCap : 'round',
		scaleColor : false,
		onStep : function (from, to, percent) {
			$(this.el).find('.percentage_inner span').text(Math.round(percent));
		}
	});
	

    var e_2 = $(".service01-percentage2");
    e_2.easyPieChart({
        animate: 2000,
        barColor: e_2.css("color"),
        trackColor: "rgba(0,0,0,0.2)",
        size: 170,
        lineWidth: 13,
        lineCap: 'square',
        scaleColor: false,
       onStep : function (from, to, percent) {
			$(this.el).find('.percentage_inner span').text(Math.round(percent));
		}
    });

	
	var e_16 = $(".home16-percentage");
	e_16.easyPieChart({
		animate : 2000,
		barColor : e_16.css('color'),
		trackColor : "#dddddd",
		size : 155,
		lineWidth : 25,
		lineCap : 'square',
		scaleColor : false,
		onStep : function (from, to, percent) {
			$(this.el).find('.percentage_inner span').text(Math.round(percent));
		}
	});

});

//source_code
jQuery(document).ready(function ($) {
	var $source = $(".source_code");
	$source.find("a").click(function () {
		$(this).siblings("pre").css("display") == "none" ? $(this).siblings("pre").slideDown(200) : $(this).siblings("pre").slideUp(200);
		$(this).siblings(".source_box").css("display") == "none" ? $(this).siblings(".source_box").slideDown(200) : $(this).siblings(".source_box").slideUp(200);
		return false;
	})
})

$(document).ready(function () {
	$(".home01-carousel").each(function () {
		$(this).owlCarousel({
			items : $(this).attr("data-items") ? $(this).data("items") : 6,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true,
			stopOnHover : true,
		})
	})
	$(".history01-carousel,.history01-carouse02,.history02-carouse02").each(function () {
		$(this).owlCarousel({
			items : $(this).attr("data-items") ? $(this).data("items") : 1,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true,
			stopOnHover : true,
			itemsDesktop : [1199, 1],
			itemsDesktopSmall : [979, 1],
			itemsTablet : [768, 1],
			itemsMobile : [479, 1],
		})
	})
		$(".service02-carousel").each(function () {
		$(this).owlCarousel({
			items : $(this).attr("data-items") ? $(this).data("items") : 3,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true,
			stopOnHover : true,
			itemsDesktop : [1199, 1],
			itemsDesktopSmall : [979, 1],
			itemsTablet : [768, 1],
			itemsMobile : [479, 1],
		})
	})
		
		$(".detail02-carousel").each(function () {
		$(this).owlCarousel({
			items : $(this).attr("data-items") ? $(this).data("items") : 3,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true,
			stopOnHover : true,
			itemsDesktop : [1199, 3],
			itemsDesktopSmall : [979, 3],
			itemsTablet : [768, 2],
			itemsMobile : [479, 1],
		})
	})	
		
	$(".home03-carousel,.home08-carousel,.carousel_4,.carousel_5,.carousel_6,.carousel_8,.home22-carousel").each(function () {
		$(this).owlCarousel({
			items : $(this).attr("data-items") ? $(this).data("items") : 4,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true,
			itemsDesktop : [1199, 3],
			itemsDesktopSmall : [979, 3],
			itemsTablet : [768, 2],
			itemsMobile : [479, 1],
		})
	})
	
	$(".carousel_7").each(function () {
		var e = $(this);
		$(this).owlCarousel({
			singleItem : true,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true,
			afterAction : function () {
				var current = this.currentItem;
				e.find(".owl-item").eq(current).addClass("synced").siblings().removeClass("synced")
			}
		});
	})
	
	$(".home06-carousel").each(function () {
		$(this).owlCarousel({
			items : $(this).attr("data-items") ? $(this).data("items") : 3,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true,
			itemsDesktop : [1199, 2],
			itemsDesktopSmall : [979, 2],
			itemsTablet : [768, 2],
			itemsMobile : [479, 1],
		})
	})

	$(".home07-carousel").each(function () {
		$(this).owlCarousel({
			singleItem : true,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true
		}).css("marginBottom", parseInt($(this).find(".owl-pagination").height()) + parseInt($(this).find(".owl-pagination").css("marginTop")) + parseInt($(this).css("marginBottom")) + "px");
	})
	$(".home07-carousel02").each(function () {
		$(this).owlCarousel({
			items : $(this).attr("data-items") ? $(this).data("items") : 3,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true
		}).css("marginBottom", parseInt($(this).find(".owl-pagination").height()) + parseInt($(this).find(".owl-pagination").css("marginTop")) + parseInt($(this).css("marginBottom")) + "px");
	})
	
	
	$(".home09-carousel").each(function () {
		$(this).owlCarousel({
			items : $(this).attr("data-items") ? $(this).data("items") : 4,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true
		}).css("marginBottom", parseInt($(this).find(".owl-pagination").height()) + parseInt($(this).find(".owl-pagination").css("marginTop")) + parseInt($(this).css("marginBottom")) + "px");
	})
	$(".home10-carousel").each(function () {
		$(this).owlCarousel({
			items : $(this).attr("data-items") ? $(this).data("items") : 3,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true
		});
	})
	$(".home10-carousel02").each(function () {
		$(this).owlCarousel({
			items : $(this).attr("data-items") ? $(this).data("items") : 4,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true
		});
	})
	$(".home12-carousel").each(function () {
		$(this).owlCarousel({
			items : $(this).attr("data-items") ? $(this).data("items") : 4,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true
		});
	})
	$(".home12-carousel02").each(function () {
		$(this).owlCarousel({
			items : $(this).attr("data-items") ? $(this).data("items") : 5,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true
		});
	})
	$(".home13-carousel").each(function () {
		$(this).owlCarousel({
			items : $(this).attr("data-items") ? $(this).data("items") : 5,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true
		});
	})
	$(".home14-carousel").each(function () {
		$(this).owlCarousel({
			items : $(this).attr("data-items") ? $(this).data("items") : 5,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true
		});
	})
	$(".home14-carousel02").each(function () {
		$(this).owlCarousel({
			items : $(this).attr("data-items") ? $(this).data("items") : 3,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true,
			itemsDesktop : $(this).attr("data-items") ? $(this).data("items") : 3,
			itemsDesktopSmall : $(this).attr("data-items") ? $(this).data("items") : 2,
			itemsTablet : $(this).attr("data-items") ? $(this).data("items") : 1,
		}).css("marginBottom", parseInt($(this).find(".owl-pagination").height()) + parseInt($(this).find(".owl-pagination").css("marginTop")) + parseInt($(this).css("marginBottom")) + "px");
	})
	$(".home16-carousel").each(function () {
		$(this).owlCarousel({
			items : $(this).attr("data-items") ? $(this).data("items") : 4,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true
		}).css("marginBottom", parseInt($(this).find(".owl-pagination").height()) + parseInt($(this).find(".owl-pagination").css("marginTop")) + parseInt($(this).css("marginBottom")) + "px"); ;
	})
	$(".home18-carousel").each(function () {
		var e = $(this);
		$(this).owlCarousel({
			singleItem : true,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true,
			afterAction : function () {
				var current = this.currentItem;
				e.find(".owl-item").eq(current).addClass("synced").siblings().removeClass("synced")
			}
		});
	})
		$(".home19-carousel").each(function() {
		$(this).owlCarousel({
				items :	$(this).attr("data-items")	    ? $(this).data("items")		  :4,
		   navigation : $(this).attr("data-navigation") ? $(this).data("navigation")  :true,
		   pagination : $(this).attr("data-pagination") ? $(this).data("pagination")  :true,
			 autoPlay : $(this).attr("data-autoplay")   ? $(this).data("autoplay")    :true,
		   autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight")  :true,
		   			itemsDesktop : [1199, 3],
			itemsDesktopSmall : [979, 3],
			itemsTablet : [768, 2],
			itemsMobile : [479, 1],
		}).css("marginBottom",parseInt($(this).find(".owl-pagination").height())+parseInt($(this).find(".owl-pagination").css("marginTop"))+parseInt($(this).css("marginBottom"))+"px");;
	})

		$(".home20-carousel").each(function() {
		$(this).owlCarousel({
				items :	$(this).attr("data-items")	    ? $(this).data("items")		  :4,
		   navigation : $(this).attr("data-navigation") ? $(this).data("navigation")  :true,
		   pagination : $(this).attr("data-pagination") ? $(this).data("pagination")  :true,
			 autoPlay : $(this).attr("data-autoplay")   ? $(this).data("autoplay")    :true,
		   autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight")  :true,
		   			itemsDesktop : [1199, 4],
			itemsDesktopSmall : [979, 4],
			itemsTablet : [768, 2],
			itemsMobile : [479, 1],
		}).css("marginBottom",parseInt($(this).find(".owl-pagination").height())+parseInt($(this).find(".owl-pagination").css("marginTop"))+parseInt($(this).css("marginBottom"))+"px");;
	})
	
		$(".home20-carousel02").each(function() {
		$(this).owlCarousel({
				items :	$(this).attr("data-items")	    ? $(this).data("items")		  :5,
		   navigation : $(this).attr("data-navigation") ? $(this).data("navigation")  :true,
		   pagination : $(this).attr("data-pagination") ? $(this).data("pagination")  :true,
			 autoPlay : $(this).attr("data-autoplay")   ? $(this).data("autoplay")    :true,
		   autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight")  :true,
		   			itemsDesktop : [1199, 5],
			itemsDesktopSmall : [979, 5],
			itemsTablet : [768, 3],
			itemsMobile : [479, 1],
		}).css("marginBottom",parseInt($(this).find(".owl-pagination").height())+parseInt($(this).find(".owl-pagination").css("marginTop"))+parseInt($(this).css("marginBottom"))+"px");;
	})

	$(".home18-carousel02").each(function () {
		$(this).owlCarousel({
			items : $(this).attr("data-items") ? $(this).data("items") : 6,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true
		})
	})

	$(".clients-carousel01,.clients-carousel02,.clients-carousel03").each(function () {
		$(this).owlCarousel({
			items : $(this).attr("data-items") ? $(this).data("items") : 5,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true
		})
	})

	$(".clients-carousel04").each(function () {
		$(this).owlCarousel({
			items : $(this).attr("data-items") ? $(this).data("items") : 8,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true
		})
	})
	
	$(".blog-carousel").each(function () {
		var e = $(this);
		$(this).owlCarousel({
			singleItem : true,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : false,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true,
			afterAction : function () {
				var current = this.currentItem;
				e.find(".owl-item").eq(current).addClass("synced").siblings().removeClass("synced")
			}
		});
	})
	$(".welcome-carousel").each(function () {
		$(this).owlCarousel({
			items : $(this).attr("data-items") ? $(this).data("items") : 8,
			navigation : $(this).attr("data-navigation") ? $(this).data("navigation") : true,
			pagination : $(this).attr("data-pagination") ? $(this).data("pagination") : true,
			autoPlay : $(this).attr("data-autoplay") ? $(this).data("autoplay") : true,
			autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight") : true
		})
	})
 
});

$(document).ready(function () {
	$('.home14-circle').each(function () {
		$(this).content_slider({ // bind plugin to div id="slider1"
			max_shown_items : 7, // number of visible circles
			hv_switch : 0, // 0 = horizontal slider, 1 = vertical
			active_item : 0, // layer that will be shown at start, 0=first, 1=second...
			wrapper_text_max_height : "auto", // height of widget, displayed in pixels
			middle_click : 1, // when main circle is clicked: 1 = slider will go to the previous layer/circle, 2 = to the next
			under_600_max_height : 1200, // if resolution is below 600 px, set max height of content
			automatic_height_resize : 1,
			border_on_off : 0,
			prettyPhoto_width : 42
		})
	});
});

$(document).ready(function () {
	$('.dg-testimonials-circle').each(function () {
		$(this).content_slider({ // bind plugin to div id="slider1"
			max_shown_items : 7, // number of visible circles
			hv_switch : 0, // 0 = horizontal slider, 1 = vertical
			active_item : 0, // layer that will be shown at start, 0=first, 1=second...
			wrapper_text_max_height : "auto", // height of widget, displayed in pixels
			middle_click : 1, // when main circle is clicked: 1 = slider will go to the previous layer/circle, 2 = to the next
			under_600_max_height : 1200, // if resolution is below 600 px, set max height of content
			automatic_height_resize : 1,
			border_on_off : 0,
			prettyPhoto_width : 42
		})
	});
});


jQuery(document).ready(function ($) {
	if (Math.round($("#dnn_content").offset().top) < Math.round($(".header_bg").height())) {
		$("#dnn_content").css("paddingTop", $(".header_bg").height())
	}
})

jQuery(document).ready(function ($) {
	if (!$(".HeaderPane").hasClass("DNNEmptyPane")) {
		$(".HeaderPane_mobile").html($(".HeaderPane .Normal").html())
	}
	if (!$(".HeaderPaneB").hasClass("DNNEmptyPane")) {
		$(".HeaderPaneB_mobile").html($(".HeaderPaneB .Normal").html()).css("marginTop", "15px")
	}
	if (!$(".LogoPane").hasClass("DNNEmptyPane")) {
		$(".mobileLogoPane").html($(".LogoPane .Normal").html())
	}

})

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement("style");
	msViewportStyle.appendChild(
		document.createTextNode("@-ms-viewport{width:auto!important}"));
	document.getElementsByTagName("head")[0].
	appendChild(msViewportStyle);
}

jQuery(document).ready(function ($) {
	$(window).load(function () {
		$(".sector").sectorload();
	});
	$(window).scroll(function () {
		$(".sector").sectorload();
	})
});

jQuery(document).ready(function ($) {
	$(".modal").each(function () {
		$(this).insertAfter("body")
	});
});

jQuery(document).ready(function ($) {
	var e = $(".sidemenu-pos .leftMain.fxdenabled,.sidemenu-pos .rightMain.fxdenabled");
	e.each(function () {
		var l = $(this),
			e = l.parents(".sidemenu-pos"),
			offset = 20;
		l.css("max-height", $(window).height() - offset);
		l.mCustomScrollbar({
			autoHideScrollbar: true,
			theme: "light-thin"
		});
		$(this).css("min-height", Math.min(l.height(), $(window).height() - offset));
		var t = e.offset().top - offset,
			th = e.height(),
			h = l.height(),
			b = t + th - h,
			lt = th - h,
			r = true;
		function maxw() {
			l.css({"height":"inherit","min-height":"inherit"});
			if(l.height()>$(window).height() - offset){
				l.css({"height":$(window).height() - offset,"min-height":$(window).height() - offset});
			}
			e.css("min-height", Math.min(l.height(), $(window).height() - offset));
		}
		function newb() {
			t = e.offset().top - offset;
			h = l.height() - offset;
			th = e.height() - offset;
			b = t + th - h;
			lt = th - h;
		}
		$(window).resize(function () {
			maxw();
			l.mCustomScrollbar("update");
		})
		l.resize(function () {
			maxw();
			newb();
		})
		e.resize(function () {
			maxw();
			newb();
			if (l.css("position") == "fixed") {
				l.css({
					"position" : "static",
					"width" : "auto"
				})
				l.width(l.width())
				l.css("position", "fixed")
			}
			if (l.css("position") == "absolute") {
				l.css({
					"position" : "static",
					"width" : "auto"
				})
				l.width(l.width())
				l.css("position", "absolute")
			}
			maxw();
		})
		
		$(window).scroll(function () {
			if ($(".roll_menu").hasClass("roll_activated")) {
				offset = $(".roll_menu.roll_activated").height()+20;
				if (r) {
					maxw();
					newb();
					r = false;
					l.mCustomScrollbar("update");
				}
			} else {
				offset = 20;
				r=true;
			}
			if ($(window).scrollTop() >= t) {
				l.width(l.width())
				l.css({
					"position" : "fixed",
					"top" : offset
				})
			}
			if ($(window).scrollTop() < t) {
				l.width("auto")
				l.css({
					"position" : "relative",
					"top" : 0
				})
			}
			if ($(window).scrollTop() >= b) {
				l.css({
					"position" : "absolute",
					"top" : lt
				})
			}
		})

	});

})

jQuery(document).ready(function ($) {
	$(".home17-banner").each(function () {
		var full = $(this).find("li");
		full.height($(window).height());
		$(window).resize(function () {
			full.height($(window).height())
		})
	});
	$(".home17-banner .nextPage").click(function () {
		jQuery('body,html').animate({
			scrollTop : $(window).height()
		}, 500);
	})
	$(".history-box .history-boxgotop").click(function () {
		jQuery('body,html').animate({
			scrollTop : $(window).height()
		}, 500);
	})
	//	runs();
	$(window).load(function () {
		$(".home17-banner").addClass("animations");
	})

})

$(document).ready(function() {
	$(".aboutus02-carouse").each(function() {
		$(this).owlCarousel({
		items :	$(this).attr("data-items")	   	? $(this).data("items")		  :5,
		   navigation : $(this).attr("data-navigation") ? $(this).data("navigation")  :true,
		   pagination : $(this).attr("data-pagination") ? $(this).data("pagination")  :true,
			 autoPlay : $(this).attr("data-autoplay")   ? $(this).data("autoplay")    :true,
		   autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight")  :true
		});
	})						   
						   
 $(".home16_slidecarousel").each(function() {
		var sync = $(this),
		sync1 = sync.find(".carousel_main"),
		sync2 = sync.find(".carousel_nav");
		sync1.owlCarousel({
			singleItem: true,
			slideSpeed: 1000,
			navigation: true,
			pagination: false,
			afterAction: syncPosition,
			responsiveRefreshRate: 200,
		});
		sync2.owlCarousel({
			items: 6,
			itemsDesktop: [1199, 6],
			itemsDesktopSmall: [979, 6],
			itemsTablet: [768, 4],
			itemsMobile: [479, 3],
			pagination: false,
			responsiveRefreshRate: 100,
			afterInit: function(el) {
				el.find(".owl-item").eq(0).addClass("synced");
			}
		});
		function syncPosition(el) { 
			var current = this.currentItem;
			sync2.find(".owl-item").removeClass("synced").eq(current).addClass("synced");
			if (sync2.data("owlCarousel") !== undefined) {
				center(current)
			}
		}
		sync2.on("click", ".owl-item",
		function(e) {
			e.preventDefault();
			var number = $(this).data("owlItem");
			sync1.trigger("owl.goTo", number);
		});
		function center(number) {
			var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
			var num = number;
			var found = false;
			for (var i in sync2visible) {
				if (num === sync2visible[i]) {
					var found = true;
				}
			}
			if (found === false) {
				if (num > sync2visible[sync2visible.length - 1]) {
					sync2.trigger("owl.goTo", num - sync2visible.length + 2)
				} else {
					if (num - 1 === -1) {
						num = 0;
					}
					sync2.trigger("owl.goTo", num);
				}
			} else if (num === sync2visible[sync2visible.length - 1]) {
				sync2.trigger("owl.goTo", sync2visible[1])
			} else if (num === sync2visible[0]) {
				sync2.trigger("owl.goTo", num - 1)
			}
		}
	})
})

$(document).ready(function() {
	$(".dg-price08").each(function() {
        var box=$(this);
			box.find(".row .price-holder").each(function() {
				$(this).find("li").each(function(index) {
					$(this).prepend("<span class=\"mobile-text\">"+box.find(".left-title .price-holder li").eq(index).html()+":</span>")
				})
            });
		
    });
	
})

$(document).ready(function() {
	$(".blog-categories .current,.portfolio-categories .current").show();	
	$(".blog-categories li,.portfolio-categories li").each(function(){
		var e=$(this);
		if(e.children("ul").length>0){
			if(e.hasClass("current")){
				e.addClass("active")
			}
			e.append("<span class=\"arrow\"></span> ")
			e.children(".arrow").on("click",function(){
				e.children("ul").stop().slideToggle().siblings().children("ul").slideUp();
				e.siblings().children("ul").stop().slideUp();
				
				e.toggleClass("active")
				e.siblings().removeClass("active")
			})
		}
	})	
})
$(document).ready(function() {
	$(".blog-tab").each(function(){
		var e=$(this);
		$(this).find(".tab-title li").on("click",function(){
			$(this).addClass("active").siblings().removeClass("active");
			e.find(".tab-container .tab-main").eq($(this).index()).addClass("active").siblings().removeClass("active");
		})		
		
	})	
})



$(document).ready(function() {
	jQuery(".portfolio-isotope").each(function(index, element) {
	var m = jQuery(this),
		box=m.children(".portfolio-mian"),
		list=box.children(".element"),
		n=1,
		itm_w=0;
		cog = {
			mobilesmall : [320,1],
			mobile : [479,2],
			tablet : [768,3],
			desktopsmall : [979,3],
			desktop : [1199,4],
			itme : 4,
			spacing:0
		};
		for(i in cog){
			if(m.data(i)){ 
				cog[i]=m.data(i)
			}else if(m.data(i.toLowerCase())){ 
				cog[i]=m.data(i.toLowerCase())
			};
		}
		list.find(".element-box").css("margin","0 0 "+cog.spacing+"px "+cog.spacing+"px");
		box.css("margin","0 0 -"+cog.spacing+"px -"+cog.spacing+"px");
		
		var responsive = function(list){
			w=$(window).width();
			if(w<=cog.mobilesmall[0]){
					itm_w=100/cog.mobilesmall[1]
			}else if(w<=cog.mobile[0]){
					itm_w=100/cog.mobile[1]
			}else if(w<=cog.tablet[0]){
					itm_w=100/cog.tablet[1]
			}else if(w<=cog.desktopsmall[0]){
					itm_w=100/cog.desktopsmall[1]
			}else if(w<=cog.desktop[0]){
					itm_w=100/cog.desktop[1]
			}else{
					itm_w=100/cog.itme
			}
			list.each(function() {
				if($(this).data("zoom")){
					$(this).width(itm_w*$(this).data("zoom")+"%")
				}else{
					$(this).width(itm_w+"%")
				}
			});
			
		}	
		var ImgLoad = function(callback,e){
			var imgdefereds=[];
			e.find('img').each(function(){
				var dfd=jQuery.Deferred();
					$(this).bind('load',function(){
						dfd.resolve();
					}).bind('error',function(){
					})
					if(this.complete) setTimeout(function(){
						dfd.resolve();
					},1000);
					imgdefereds.push(dfd);
			})
			jQuery.when.apply(null,imgdefereds).done(function(){
				callback();
			});
		}
		var operation = function(e) {
			list.fadeIn(500);
			e.isotope()
			};
		
		ImgLoad(function(){
			box.show();
			responsive(list);
		    operation(box);
			m.removeClass("loading");
			$(window).resize(function(){
				responsive(list);
				box.isotope({itemSelector: '.element'})
			});
		},box)	
		
		m.find(".filters a").on("click",function(element){
			element.preventDefault();
			if(!$(this).hasClass("active")){
				$(this).addClass("active").siblings().removeClass("active");
				box.isotope({
					filter: $(this).attr("href")
				});
			}
		})
 
    });
});

$(document).ready(function() {
	$('.gallery-carousel').each(function(index, element) {
		var e=$(this);
		var cog={
				dots: true,
				infinite: true,
				speed: 700,
				slidesToShow: 4,
				centerMode: false,
				variableWidth: false,
				autoplay:false,
				autoplaySpeed:3000,
				arrows:true
			}
		for(i in cog){
			if(e.data(i)){ 
				cog[i]=e.data(i)
			}else if(e.data(i.toLowerCase())){ 
				cog[i]=e.data(i.toLowerCase())
			};
		}
	e.slick(cog).on('setPosition', function(event, slick, currentSlide, nextSlide){
        e.removeClass("loading");
	});
    });
});


$(document).ready(function() {
	$(".portfolio-list04 .element-view").mCustomScrollbar({
		autoHideScrollbar: true,
		theme: "light-thin"
	});
	$(window).load(function() {
		$(".portfolio-list04 .element-view").mCustomScrollbar("update");
	})

	ImgLoad(function(){
		$(".portfolio-list04 .element-view").mCustomScrollbar("update");	
	},$(".portfolio-list04 .element-view"))

});


$(function(){  
  $('.welcome-page a[href*=#],.welcome-page area[href*=#]').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({
          scrollTop: targetOffset
        },
        1000);
        return false;
      }
    }
  });
})

$(document).ready(function() {
	if($(".welcome-page").length!=0){
        animationShow({"#mobile_icon":"#mobile_menu"});
        animationShow({"#searchbut":"#searchBox"});
	}
})

jQuery(document).ready(function ($) {
	
	$(".video-bg").each(function() {
	var box=$(this),
		bg=box.children(".videobox"),
		video = bg.find("video,iframe,object,embed"),
		n=0;
        var vg=function(){
			n=0;
			bg.css({
				top:n,
				left:n,
				right:n,
				bottom:n
			})
			if(video.outerHeight() >= box.outerHeight()){
				n= -(video.outerHeight()-box.outerHeight())/2
				bg.css({
					top:n,
					bottom:n
				})
			}else{
				n= ((video.outerHeight()-box.outerHeight())/2) * (video.width()/video.height())
				bg.css({
					left:n,
					right:n
				})
			}
		}
		vg();
		
		box.find(".play").on("click",function(){
		if(video[0].tagName=="video" || video[0].tagName=="VIDEO"){
			if (video[0].paused){
			   video[0].play();
			}
		   else{
			   video[0].pause();
			}
		 }	
		})	
			
		$(window).resize(function(){
			vg();
		})
		
		
    });
});

//home5banner
jQuery(document).ready(function($) {
	 $(window).load(function() {
    $("#home19-nextPage").click(function() {
		  var h=$(".home19-banner01-bg").height();
		  var header_h=$(".header_bg").height();	
          jQuery('body,html').animate({
                scrollTop:h-header_h
            }, 500);
        })
        //	runs();
})
})
//home5banner
jQuery(document).ready(function($) {   
    $("#home20-next").click(function() {
            jQuery('body,html').animate({
                scrollTop: $(window).height()+$(".BannerPane").offset().top
            }, 500);
        })
        //	runs();

})




$(document).ready(function() {
 $(".home21-carousel-1").each(function() {
		var sync = $(this),
		sync1 = sync.find(".carousel_main"),
		sync2 = sync.find(".carousel_nav");
		sync1.owlCarousel({
			singleItem: true,
			slideSpeed: 1000,
			navigation: false,
			pagination: false,
			afterAction: syncPosition,
			responsiveRefreshRate: 200,
		});
		function syncPosition(el) { 
			var current = this.currentItem;
			sync2.find(".item").removeClass("synced").eq(current).addClass("synced");
		}
		sync2.on("click", ".item",function(e) {
			e.preventDefault();
			var number = $(this).index();
			sync1.trigger("owl.goTo", number);
		});
	})
})

jQuery(document).ready(function(){
	jQuery('.home21-time-line').each(function() {
		$(this).scrollbar({
			"showArrows": true,
		}); 
    });
});

$(document).ready(function(){
	$(".pic_tab").bgtabs({
			switchtime: 5000,
			animationtime: 1000,
			startpic:0,
			autoPaly:true,
			showArrow:true
	});
});

$(".home23-carousel1").each(function() {
		var e=$(this);
		e.owlCarousel({
		   singleItem : true,
		   navigation : $(this).attr("data-navigation") ? $(this).data("navigation")  :true,
		   pagination : $(this).attr("data-pagination") ? $(this).data("pagination")  :true,
			 autoPlay : $(this).attr("data-autoplay")   ? $(this).data("autoplay")    :true,
		   autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight")  :true,
		   afterAction: function () {var current = this.currentItem;e.find(".owl-item").eq(current).addClass("synced").siblings().removeClass("synced")}
		});
	})




jQuery(function () {
	var sUrl = window.location.search;
	var sReg = "ResponsiveTab=([^&]*)";
	var re = new RegExp(sReg, "gi");
	re.exec(sUrl);
	var id = RegExp.$1;
	if (id != scroll && id != "scroll" && id) {
		var e = $("#" + id);
		if (e.length < 1)
			return false;
		e.addClass("resp-tab-active").siblings().removeClass("resp-tab-active");
		e.parent().siblings(".resp-tabs-container").children(".resp_container").eq(e.index()).addClass("resp-tab-content-active").css("display", "block").siblings(".resp_container").removeClass("resp-tab-content-active").css("display", "none");
		e.parent().siblings(".resp-tabs-container").children(".resp-accordion").eq(e.index()).addClass("resp-tab-active").siblings().removeClass("resp-tab-active");
		if (window.location.hash) {
			window.location.hash = window.location.hash;
			window.location = window.location;
		}
	}
});








