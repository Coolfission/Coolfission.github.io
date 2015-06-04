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
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

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
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });
}
$(document).ready(main);
  /*$(function() {
    $('#calculator').draggable({containment: "window"});
  }); */
  //Calculator JS
                                $(document).ready(function(){
                                  var testNumLength = function(number) {
                                        if (number.length > 9) {
                                            totaldiv.text(number.substr(number.length-9,9));
                                            if (number.length > 15) {
                                                number = "";
                                                totaldiv.text("Err");
                                            }
                                        } 
                                    };
                                  var number = "";
                                    var newnumber = "";
                                    var operator = "";
                                    var totaldiv = $("#total");
                                    totaldiv.text("0");
                                    $("#numbers a").not("#clear,#clearall").click(function(){
                                    number += $(this).text();
                                    totaldiv.text(number);
                                    testNumLength(number);
                                    });
                                    $("#operators a").not("#equals").click(function(){
                                    operator = $(this).text();
                                    newnumber = number;
                                    number = "";
                                    totaldiv.text("0");
                                    });
                                    $("#clear,#clearall").click(function(){
                                    number = "";
                                    totaldiv.text("0");
                                    if ($(this).attr("id") === "clearall") {
                                      newnumber = "";
                                    }
                                    });
                                    $("#equals").click(function(){
                                      if (operator === "+"){
                                        number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10         );
                                      }
                                      else if (operator === "-"){
                                        number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10 );
                                      }
                                      else if (operator === "÷"){
                                        number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
                                      }
                                      else if (operator === "×"){
                                        number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
                                      }
                                      else if (operator === "sqrt") {
                                          number = Math.sqrt(parseFloat(number,10)).toString(10);
                                            totaldiv.text(number);  
                                      }
                                      else if (operator === "^") {
                                          newnumber = Math.pow(newnumber, number);
                                          number =(parseInt(newnumber, 10)).toString(10); 
                                      }
                                      totaldiv.text(number);
                                      testNumLength(number);
                                      number = "";
                                      newnumber = "";
                                    });
                                    $('#operators a, #side a').not('#decimal').click(function() {
                                        if ($(this).attr("id") === "sqrt")  {
                                            operator = "sqrt";
                                            $("#equals").click();
                                            return;
                                        }   
                                    });    
                                        $("#decimal").click(function(){
                                        var numOfDecs = 0;
                                        for (i=0;i<number.length;i++){
                                        if (number[i] === "."){
                                            numOfDecs++;
                                        }}
                                        if (numOfDecs > 0) {
                                            number = number;
                                            totaldiv.text(number);
                                        } else {
                                            number += ".";
                                            totaldiv.text(number);
                                        }
                                        testNumLength(number);
                                    });
                                        
                                });