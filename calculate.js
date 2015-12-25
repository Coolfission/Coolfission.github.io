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
