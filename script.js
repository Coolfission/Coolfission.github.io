
"use strict";
var about = function() {
  $("a[style='cursor: pointer']").click(function() {
    $("#about-closed").attr("id", "about");
    $("body").css({"background": "rgba(0,0,0,0.9)"});
    $("nav, #projects").css({"opacity": "0.2"});
    $("#footer").css({"opacity": "0.5"});
  });
  $("i[class='fa fa-times-circle-o']").click(function() {
    $("#about").attr("id", "about-closed");
    $("body").css({"background": "#ddd"});
    $("nav, #projects").css({"opacity": "1"});
    $("#footer").css({"opacity": "1"});
  });
};
$(document).ready(about);

var typed = function() {
  var options = {
    strings: ["Building Webpages", "Devoloping Apps", "Learning C++"],
    typeSpeed: 20,
    startDelay: 500,
    backSpeed: 20,
    backDelay: 2000,
    loop: true
  }
  $("#typed").typed(options);
};
$(document).ready(typed);

var time = function() {
  var today = new Date();
  var hour = today.getHours();
  var greeting;
  if(hour > 18) {
    greeting = "Good Evening!";
  }
  else if(hour > 12) {
    greeting = "Good Afternoon!";
  }
  else if(hour > 0) {
    greeting = "Good Morning!";
  }
  else {
    greeting = "Welcome!";
  }
  var changeTime = document.getElementById("time");
  changeTime.innerHTML = greeting;
};
$(document).ready(time);


$(function() {

  $("#context-menu__print").click(function() {
    window.print();
  });

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