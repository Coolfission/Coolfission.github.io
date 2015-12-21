  var phone = function() {
    if(screen.width <= 800) {
      $("div").attr('data', 'blur');
      window.location.assign("ask.html");
      return false;
    }
    else if(window.history.back() === "ask.html") {
      location.assign("index.html")
      return false;
    }
    return true;
  };
  $(document).ready(phone);

  var menu = function() {
      $('.icon-menu').click(function() {
          $('.menu').animate({left: '0px'}, 100);                   
  });
      $('.icon-close').click(function() {
          $('.menu').animate({left: '-290px'}, 100);
  });
  };
  $(document).ready(menu);

  var main = function() {
  $('.for-arr').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }

    currentSlide.fadeOut(500).removeClass('active-slide');
    nextSlide.fadeIn(500).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });


  $('.back-arr').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(500).removeClass('active-slide');
    prevSlide.fadeIn(500).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });
}
$(document).ready(main);

 var round = function(text, pos) {
    function setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }
    if (text.length > pos) {
        for (i = 1; i < text.length; i++){
            if (text[i] === ".") {
                i = text.length;
                if (parseFloat(text[pos],10) >= 5) {
                    text = (setCharAt(text,pos-1,((parseFloat(text[pos-1],10))+1).toString(10))).substr(0,pos);
                } 
                else {
                    text = text.substr(0,pos);
                }
            } 
        }    
    } 
    return text;
};
var $ = jQuery.noConflict();
$(function() {
  function testNumLength() {
    
  }
    var number = "";
    var newnumber = ""; 
    var operator = "";
    var memory = "0";
    var cleared = 0;
    var totaldiv = $("#total");
    totaldiv.text("0");
    $("#one").click(function(){
        number += "1";
        number = round(number,9);
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#two").click(function(){
        number += "2";
        number = round(number,9);
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#three").click(function(){
        number += "3";
        number = round(number,9);
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#four").click(function(){
        number += "4";
        number = round(number,9);
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#five").click(function(){
        number += "5";
        number = round(number,9);
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#six").click(function(){
        number += "6";
        number = round(number,9);
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#seven").click(function(){
        number += "7";
        number = round(number,9);
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#eight").click(function(){
        number += "8";
        number = round(number,9);
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#nine").click(function(){
        number += "9";
        number = round(number,9);
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#decimal").click(function() {
        var numOfDecs = 0;
        for (i = 0; i < number.length; i++){
            if (number[i] === "."){
                numOfDecs++;
            }
        }
        if (numOfDecs > 0) {
            number = number;
            number = round(number,9);
            totaldiv.text(number);
        } 
        else {
            number += ".";
            number = round(number,9);
            totaldiv.text(number);
        }
        testNumLength(number);
    });
    $("#zero").click(function(){
        if (number === "") {
            number = "";
        } 
        else {
            number += "0";
        } 
        
        if (number.length > 0) {
            number = round(number,9);
            totaldiv.text(number);
        } else {
            totaldiv.text("0");
        }
        testNumLength(number);
    });
    $("#plus").click(function() {
        newnumber = number;
        number = "";
        operator = "+";
    });
    $("#minus").click(function() {
        newnumber = number;
        number = "";
        operator = "-";
    });
    $("#times").click(function() {
        newnumber = number;
        number = "";
        operator = "x";
    });
    $("#divide").click(function() {
        newnumber = number;
        number = "";
        operator = "/";
    });
    $("#sq").click(function(){
        newnumber = number;
        number = "";
        operator = "sq";
    });
    $("#sqrt").click(function(){
        operator = "sqrt";
        $("#equals").click();
    });
    $("#clearall, #clear").click(function(){
        if (cleared === 0){
            number = "";
            totaldiv.text("0");
            cleared = 1;
        } else if (cleared === 1) {
                number = "";
                newnumber = "";
                totaldiv.text("0");
                cleared = 0;
        }
    });
    $("#equals").click(function(){    
        if (number !== ""){
        if (operator === "+") {
            number = (parseFloat(newnumber,10) + parseFloat(number,10)).toString(10);
            number = round(number,9);
            totaldiv.text(number);
        } else if (operator === "x") {
            number = (parseFloat(newnumber,10) * parseFloat(number,10)).toString(10);
            number = round(number,9);
            totaldiv.text(number);
        } else if (operator === "/") {
            number = (parseFloat(newnumber,10) / parseFloat(number,10)).toString(10);
            number = round(number,9);
            totaldiv.text(number);
        } else if (operator === "-") {
            number = (parseFloat(newnumber,10) - parseFloat(number,10)).toString(10);
            number = round(number,9);
            totaldiv.text(number);
        } else if (operator === "sqrt") {
            number = Math.sqrt(parseFloat(number,10)).toString(10);
            number = round(number,9);
            totaldiv.text(number);
        } else if (operator === "sq") {
            number = ((Math.pow(parseFloat(newnumber,10),parseFloat(number,10))).toString(10));
            number = round(number,9);
            totaldiv.text(number);
        } 
        
        if (number === "NaN") {
            number = "";
            totaldiv.text("0");
        }
        testNumLength(number);
        number = round(number,9);
        totaldiv.text(number);
        number = "";
        newnumber = "";
        cleared = 0;
        }
        else if (number === "" || newnumber === "") {
            totaldiv.text("0");
        } 
    });
});

var converter = function() {
    $('input').on("keyup",function () {
    $("#input_kg").val(parseInt($("#input_en").val(), 10)*  1.60934);
});
};
$(document).ready(converter);

var time = function() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    if(hourNow > 18) {
        greeting = "Good Evening!";
    }
    else if(hourNow > 12) {
        greeting = "Good Afternoon!";
    }
    else if(hourNow > 0) {
        greeting = "Good Morning!";
    }
    else {
        greeting = "Welcome!";
    }
    var changeTime = document.getElementById("name");
    changeTime.innerHTML = greeting;
};
$(document).ready(time);

$(document).ready(function() {
    $("#print").click(function() {
        window.print();
    });
    $("#context-menu__print").click(function() {
        window.print();
    });
});

$(function() {
    $(".place_scroll").on("click", function(e) {
     $('.menu').animate({left: '-290px'}, 1500);
        e.preventDefault();

        $("body, html").animate({ 
            scrollTop: $($(this).attr('href')).offset().top 
        }, 600);

    });
});

$(function() {
  function clickInsideElement( e, className ) {
    var el = e.srcElement || e.target;
    
    if ( el.classList.contains(className) ) {
      return el;
    } else {
      while ( el = el.parentNode ) {
        if ( el.classList && el.classList.contains(className) ) {
          return el;
        }
      }
    }

    return false;
  }
  function getPosition(e) {
    var posx = 0;
    var posy = 0;

    if (!e) var e = window.event;
    
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    return {
      x: posx,
      y: posy
    }
  }
  var contextMenuClassName = "context-menu";
  var contextMenuItemClassName = "context-menu__item";
  var contextMenuLinkClassName = "context-menu__link";
  var contextMenuActive = "context-menu--active";

  var taskItemClassName = "task";
  var taskItemInContext;

  var clickCoords;
  var clickCoordsX;
  var clickCoordsY;

  var menu = document.querySelector("#context-menu");
  var menuItems = menu.querySelectorAll(".context-menu__item");
  var menuState = 0;
  var menuWidth;
  var menuHeight;
  var menuPosition;
  var menuPositionX;
  var menuPositionY;

  var windowWidth;
  var windowHeight;
  function init() {
    contextListener();
    clickListener();
    keyupListener();
    resizeListener();
  }
  function contextListener() {
    document.addEventListener( "contextmenu", function(e) {
      taskItemInContext = clickInsideElement( e, taskItemClassName );

      if ( taskItemInContext ) {
        e.preventDefault();
        toggleMenuOn();
        positionMenu(e);
      } else {
        taskItemInContext = null;
        toggleMenuOff();
      }
    });
  }
  function clickListener() {
    document.addEventListener( "click", function(e) {
      var clickeElIsLink = clickInsideElement( e, contextMenuLinkClassName );

      if ( clickeElIsLink ) {
        e.preventDefault();
        menuItemListener( clickeElIsLink );
      } else {
        var button = e.which || e.button;
        if ( button === 1 ) {
          toggleMenuOff();
        }
      }
    });
  }
  function keyupListener() {
    window.onkeyup = function(e) {
      if ( e.keyCode === 27 ) {
        toggleMenuOff();
      }
    }
  }
  function resizeListener() {
    window.onresize = function(e) {
      toggleMenuOff();
    };
  }
  function toggleMenuOn() {
    if ( menuState !== 1 ) {
      menuState = 1;
      menu.classList.add( contextMenuActive );
    }
  }
  function toggleMenuOff() {
    if ( menuState !== 0 ) {
      menuState = 0;
      menu.classList.remove( contextMenuActive );
    }
  }
  function positionMenu(e) {
    clickCoords = getPosition(e);
    clickCoordsX = clickCoords.x;
    clickCoordsY = clickCoords.y;

    menuWidth = menu.offsetWidth + 4;
    menuHeight = menu.offsetHeight + 4;

    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    if ( (windowWidth - clickCoordsX) < menuWidth ) {
      menu.style.left = windowWidth - menuWidth + "px";
    } else {
      menu.style.left = clickCoordsX + "px";
    }

    if ( (windowHeight - clickCoordsY) < menuHeight ) {
      menu.style.top = windowHeight - menuHeight + "px";
    } else {
      menu.style.top = clickCoordsY + "px";
    }
  }
  function menuItemListener( link ) {
    console.log( "Task ID - " + taskItemInContext.getAttribute("data-id") + ", Task action - " + link.getAttribute("data-action"));
    toggleMenuOff();
  }
  init();

});

var video = function() {
  document.getElementById("video_background").defaultPlaybackRate = 1.0;
  document.getElementById("video_background").play();

  document.getElementById("video_background").playbackRate = 0.001; 
};    
$(document).ready(video);
    
var audio = function() {
  document.getElementById("audio").defaultPlaybackRate = 1.0;
  document.getElementById("audio").play();

  document.getElementById("audio").playbackRate = 1.0; 
  
    var audio = document.getElementById("audio");
      audio.addEventListener("ended", function() {
      audio.src = "https://ia700406.us.archive.org/13/items/MoonlightSonata_277/MoonlighSonata.mp3";
      audio.play(5000);
      audio.addEventListener("ended", function() {
      audio.src = "https://ia902702.us.archive.org/10/items/Karl_Westerberg_Recordings/wmoz-ps16-1.mp3";
      audio.play(2000);
      audio.addEventListener("ended", function() {
      audio.src = "https://ia802600.us.archive.org/8/items/DarudeSandstorm_201501/Darude%20-%20Sandstorm.mp3";
      audio.play(2000);
      audio.addEventListener("ended", function() {
      audio.src = "about:blank";
      audio.play(2000);
      });
    });
    });
  });
};
$(document).ready(audio);