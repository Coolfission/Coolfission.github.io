var converter = function() {

    $("input").val("0");

    $("#reset").click(function() {
      $("input").val("0");
    }); 

    $('#mile').keyup(function() { 
      
        $("#yard").val(parseInt($("#mile").val(), 10) * 1760);
        $("#foot").val(parseInt($("#mile").val(), 10) * 5280);
        $("#inch").val(parseInt($("#mile").val(), 10) * 63360);
        $("#nautical_mile").val(parseInt($("#mile").val(), 10) * 0.868976);
    });
    $('#yard').keyup(function() {
         $("#mile").val(parseInt($("#yard").val(), 10) * 0.000568182);
        $("#foot").val(parseInt($("#yard").val(), 10) * 5280);
        $("#inch").val(parseInt($("#yard").val(), 10) * 63360);
        $("#nautical_mile").val(parseInt($("#yard").val(), 10) * 0.868976);
    });
};
$(document).ready(converter);