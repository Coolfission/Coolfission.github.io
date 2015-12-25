var basic = function() {
    $("input").val("0");

    $("#reset").click(function() {
      $("input").val("0");
    }); 
};
$(document).ready(basic);

var length = function() {
    //ENGLISH UNITS
    $('#mile').keyup(function() { 
        $("#yard").val(parseInt($("#mile").val(), 10) * 1760);
        $("#foot").val(parseInt($("#mile").val(), 10) * 5280);
        $("#inch").val(parseInt($("#mile").val(), 10) * 63360);
        $("#nautical_mile").val(parseInt($("#mile").val(), 10) * 0.868976);
        $("#kilometer").val(parseInt($("#mile").val(), 10) * 1.60934);
        $("#meter").val(parseInt($("#mile").val(), 10) * 1609.34);
        $("#centimeter").val(parseInt($("#mile").val(), 10) * 160934);
        $("#millimeter").val(parseInt($("#mile").val(), 10) * 1.609 * Math.pow(10, 6));
        $("#micrometer").val(parseInt($("#mile").val(), 10) * 1.609 * Math.pow(10, 9));
        $("#nanometer").val(parseInt($("#mile").val(), 10) * 1.609 * Math.pow(10, 12));
    });
    $('#yard').keyup(function() {
        $("#mile").val(parseInt($("#yard").val(), 10) * 0.000568182);
        $("#foot").val(parseInt($("#yard").val(), 10) * 3);
        $("#inch").val(parseInt($("#yard").val(), 10) * 36);
        $("#nautical_mile").val(parseInt($("#yard").val(), 10) * 0.000493737);
        $("#kilometer").val(parseInt($("#yard").val(), 10) * 0.0009144);
        $("#meter").val(parseInt($("#yard").val(), 10) * 0.9144);
        $("#centimeter").val(parseInt($("#yard").val(), 10) * 91.44);
        $("#millimeter").val(parseInt($("#yard").val(), 10) * 914.4);
        $("#micrometer").val(parseInt($("#yard").val(), 10) * 914400);
        $("#nanometer").val(parseInt($("#yard").val(), 10) * 9.144 * Math.pow(10, 8));   
    });
    $('#foot').keyup(function() {
        $("#mile").val(parseInt($("#foot").val(), 10) * 0.000189394);
        $("#yard").val(parseInt($("#foot").val(), 10) * 0.333333);
        $("#inch").val(parseInt($("#foot").val(), 10) * 12);
        $("#nautical_mile").val(parseInt($("#foot").val(), 10) * 0.000164579);
        $("#kilometer").val(parseInt($("#foot").val(), 10) * 0.0003048);
        $("#meter").val(parseInt($("#foot").val(), 10) * 0.3048);
        $("#centimeter").val(parseInt($("#foot").val(), 10) * 30.48);
        $("#millimeter").val(parseInt($("#foot").val(), 10) * 304.8);
        $("#micrometer").val(parseInt($("#foot").val(), 10) * 304800);
        $("#nanometer").val(parseInt($("#foot").val(), 10) * 3.048 * Math.pow(10, 8));   
    });
    $('#inch').keyup(function() {
        $("#mile").val(parseInt($("#inch").val(), 10) * 1.5783 / Math.pow(10, 5));
        $("#yard").val(parseInt($("#inch").val(), 10) * 0.0277778);
        $("#foot").val(parseInt($("#inch").val(), 10) * 0.0833333);
        $("#nautical_mile").val(parseInt($("#inch").val(), 10) * 1.3715 / Math.pow(10, 5));
        $("#kilometer").val(parseInt($("#inch").val(), 10) * 2.54 / Math.pow(10, 5));
        $("#meter").val(parseInt($("#inch").val(), 10) * 0.0254);
        $("#centimeter").val(parseInt($("#inch").val(), 10) * 2.54);
        $("#millimeter").val(parseInt($("#inch").val(), 10) * 25.4);
        $("#micrometer").val(parseInt($("#inch").val(), 10) * 25400);
        $("#nanometer").val(parseInt($("#inch").val(), 10) * 2.54 * Math.pow(10, 7));   
    });
    $('#nautical_mile').keyup(function() {
        $("#mile").val(parseInt($("#nautical_mile").val(), 10) * 1.15078);
        $("#yard").val(parseInt($("#nautical_mile").val(), 10) * 2025.37);
        $("#foot").val(parseInt($("#nautical_mile").val(), 10) * 6076.12);
        $("#inch").val(parseInt($("#nautical_mile").val(), 10) * 72913.4);
        $("#kilometer").val(parseInt($("#nautical_mile").val(), 10) * 1.852);
        $("#meter").val(parseInt($("#nautical_mile").val(), 10) * 1852);
        $("#centimeter").val(parseInt($("#nautical_mile").val(), 10) * 185200);
        $("#millimeter").val(parseInt($("#nautical_mile").val(), 10) * 1.852 * Math.pow(10, 6));
        $("#micrometer").val(parseInt($("#nautical_mile").val(), 10) * 1.852 * Math.pow(10, 9));
        $("#nanometer").val(parseInt($("#nautical_mile").val(), 10) * 1.852 * Math.pow(10, 12));   
    });
    //SI UNITS
    $('#kilometer').keyup(function() { 
        $("#mile").val(parseInt($("#kilometer").val(), 10) * 0.621371);
        $("#yard").val(parseInt($("#kilometer").val(), 10) * 1093.61);
        $("#foot").val(parseInt($("#kilometer").val(), 10) * 3280.84);
        $("#inch").val(parseInt($("#kilometer").val(), 10) * 39370.1);
        $("#nautical_mile").val(parseInt($("#kilometer").val(), 19) * 0.539957);
        $("#meter").val(parseInt($("#kilometer").val(), 10) * 1000);
        $("#centimeter").val(parseInt($("#kilometer").val(), 10) * 100000);
        $("#millimeter").val(parseInt($("#kilometer").val(), 10) * 1 * Math.pow(10, 6));
        $("#micrometer").val(parseInt($("#kilometer").val(), 10) * 1 * Math.pow(10, 9));
        $("#nanometer").val(parseInt($("#kilometer").val(), 10) * 1 * Math.pow(10, 12));
    });
    $('#meter').keyup(function() {
        $("#mile").val(parseInt($("#meter").val(), 10) * 0.000621371);
        $("#yard").val(parseInt($("#meter").val(), 10) * 1.09361);
        $("#foot").val(parseInt($("#meter").val(), 10) * 3.28084);
        $("#inch").val(parseInt($("#meter").val(), 10) * 39.3701);
        $("#nautical_mile").val(parseInt($("#meter").val(), 10) * 0.000539957);
        $("#kilometer").val(parseInt($("#meter").val(), 10) * 0.001);
        $("#centimeter").val(parseInt($("#meter").val(), 10) * 100);
        $("#millimeter").val(parseInt($("#meter").val(), 10) * 1000);
        $("#micrometer").val(parseInt($("#meter").val(), 10) * 1 * Math.pow(10, 6));
        $("#nanometer").val(parseInt($("#meter").val(), 10) * 1 * Math.pow(10, 9));   
    });
    $('#centimeter').keyup(function() {
        $("#mile").val(parseInt($("#centimeter").val(), 10) * 6.2137 / Math.pow(10, 6));
        $("#yard").val(parseInt($("#centimeter").val(), 10) * 0.0109361);
        $("#foot").val(parseInt($("#centimeter").val(), 10) * 0.0328083);
        $("#inch").val(parseInt($("#centimeter").val(), 10) * 0.393701);
        $("#nautical_mile").val(parseInt($("#centimeter").val(), 10) * 5.3996 / Math.pow(10, 6));
        $("#kilometer").val(parseInt($("#centimeter").val(), 10) * 1 / Math.pow(10, 5));
        $("#meter").val(parseInt($("#centimeter").val(), 10) * 0.01);
        $("#millimeter").val(parseInt($("#centimeter").val(), 10) * 10);
        $("#micrometer").val(parseInt($("#centimeter").val(), 10) * 10000);
        $("#nanometer").val(parseInt($("#centimeter").val(), 10) * 1 * Math.pow(10, 7));   
    });
    $('#millimeter').keyup(function() {
        $("#mile").val(parseInt($("#millimeter").val(), 10) * 6.2137 / Math.pow(10, 7));
        $("#yard").val(parseInt($("#millimeter").val(), 10) * 0.00109361);
        $("#foot").val(parseInt($("#millimeter").val(), 10) * 0.00328084);
        $("#inch").val(parseInt($("#millimeter").val(), 10) * 0.0393701);
        $("#nautical_mile").val(parseInt($("#millimeter").val(), 10) * 5.3996 / Math.pow(10, 7));
        $("#kilometer").val(parseInt($("#millimeter").val(), 10) * 1 / Math.pow(10, 6));
        $("#meter").val(parseInt($("#millimeter").val(), 10) * 0.001);
        $("#centimeter").val(parseInt($("#millimeter").val(), 10) * 0.1);
        $("#micrometer").val(parseInt($("#millimeter").val(), 10) * 1000);
        $("#nanometer").val(parseInt($("#millimeter").val(), 10) * 1 * Math.pow(10, 6));   
    });
    $('#micrometer').keyup(function() {
        $("#mile").val(parseInt($("#micrometer").val(), 10) * 6.2137 / Math.pow(10, 10));
        $("#yard").val(parseInt($("#micrometer").val(), 10) * 1.0936 / Math.pow(10, 6));
        $("#foot").val(parseInt($("#micrometer").val(), 10) * 3.2808 / Math.pow(10, 6));
        $("#inch").val(parseInt($("#micrometer").val(), 10) * 3.937 / Math.pow(10, 5));
        $("#nautical_mile").val(parseInt($("#micrometer").val(), 10) * 5.3996 / Math.pow(10, 10));
        $("#kilometer").val(parseInt($("#micrometer").val(), 10) * 1 / Math.pow(10, 9));
        $("#meter").val(parseInt($("#micrometer").val(), 10) * 1 / Math.pow(10, 6));
        $("#centimeter").val(parseInt($("#micrometer").val(), 10) * 1 / Math.pow(10, 4));
        $("#millimeter").val(parseInt($("#micrometer").val(), 10) * 0.001);
        $("#nanometer").val(parseInt($("#micrometer").val(), 10) * 1000);   
    });
    $('#nanometer').keyup(function() {
        $("#mile").val(parseInt($("#nanometer").val(), 10) * 6.2137 / Math.pow(10, 13));
        $("#yard").val(parseInt($("#nanometer").val(), 10) * 1.0936 / Math.pow(10, 9));
        $("#foot").val(parseInt($("#nanometer").val(), 10) * 3.2808 / Math.pow(10, 9));
        $("#inch").val(parseInt($("#nanometer").val(), 10) * 3.937 / Math.pow(10, 8));
        $("#nautical_mile").val(parseInt($("#nanometer").val(), 10) * 5.3996 / Math.pow(10, 13));
        $("#kilometer").val(parseInt($("#nanometer").val(), 10) * 1 / Math.pow(10, 12));
        $("#meter").val(parseInt($("#nanometer").val(), 10) * 1 / Math.pow(10, 9));
        $("#centimeter").val(parseInt($("#nanometer").val(), 10) * 1 / Math.pow(10, 7));
        $("#millimeter").val(parseInt($("#nanometer").val(), 10) * 1 / Math.pow(10, 6));
        $("#micrometer").val(parseInt($("#nanometer").val(), 10) * 0.001);   
    });
};
$(document).ready(length);