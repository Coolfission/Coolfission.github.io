var basic = function() {
    $("input").val("0");

    $("#reset").click(function() {
      $("input").val("0");
    });

    document.onkeydown = function(e) {
        if(e.which == 188){
            return false;
        }
    } 

    var zoom1 = $("html").css("zoom");
    if(zoom1 == "200%") {
        document.write("blahhhhh");
    }
};
$(document).ready(basic);

var index = function() {
    $(".move").on("click", function(e) {
    $("body, html").animate({ 
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
});
}
$(document).ready(index);

var temperature = function() {
    $("#fahrenheit").keyup(function() {
        $("#celsius").val(parseFloat($("#fahrenheit").val() - 32, 10) * (5/9));
        $("#kelvin").val(parseFloat($("#fahrenheit").val() - 32, 10) / 1.8000 + 273.15);
    });
    $("#celsius").keyup(function() {
        $("#fahrenheit").val(parseFloat($("#celsius").val(), 10) * 9/5 + 32);
        $("#kelvin").val(parseFloat($("#celsius").val(), 10) + 273.15);
    });
    $("#kelvin").keyup(function() {
        $("#fahrenheit").val(parseFloat($("#kelvin").val(), 10) * 9/5 - 459.67);
        $("#celsius").val(parseFloat($("#kelvin").val(), 10) - 273.15);
    });
};
$(document).ready(temperature);

var length = function() {
    $('#mile').keyup(function() { 
        $("#yard").val(parseFloat($("#mile").val(), 10) * 1760);
        $("#foot").val(parseFloat($("#mile").val(), 10) * 5280);
        $("#inch").val(parseFloat($("#mile").val(), 10) * 63360);
        $("#nautical-mile").val(parseFloat($("#mile").val(), 10) * 0.868976);
        $("#kilometer").val(parseFloat($("#mile").val(), 10) * 1.60934);
        $("#meter").val(parseFloat($("#mile").val(), 10) * 1609.34);
        $("#centimeter").val(parseFloat($("#mile").val(), 10) * 160934);
        $("#millimeter").val(parseFloat($("#mile").val(), 10) * 1.609 * Math.pow(10, 6));
        $("#micrometer").val(parseFloat($("#mile").val(), 10) * 1.609 * Math.pow(10, 9));
        $("#nanometer").val(parseFloat($("#mile").val(), 10) * 1.609 * Math.pow(10, 12));
    });
    $('#yard').keyup(function() {
        $("#mile").val(parseFloat($("#yard").val(), 10) * 0.000568182);
        $("#foot").val(parseFloat($("#yard").val(), 10) * 3);
        $("#inch").val(parseFloat($("#yard").val(), 10) * 36);
        $("#nautical-mile").val(parseFloat($("#yard").val(), 10) * 0.000493737);
        $("#kilometer").val(parseFloat($("#yard").val(), 10) * 0.0009144);
        $("#meter").val(parseFloat($("#yard").val(), 10) * 0.9144);
        $("#centimeter").val(parseFloat($("#yard").val(), 10) * 91.44);
        $("#millimeter").val(parseFloat($("#yard").val(), 10) * 914.4);
        $("#micrometer").val(parseFloat($("#yard").val(), 10) * 914400);
        $("#nanometer").val(parseFloat($("#yard").val(), 10) * 9.144 * Math.pow(10, 8));   
    });
    $('#foot').keyup(function() {
        $("#mile").val(parseFloat($("#foot").val(), 10) * 0.000189394);
        $("#yard").val(parseFloat($("#foot").val(), 10) * 0.333333);
        $("#inch").val(parseFloat($("#foot").val(), 10) * 12);
        $("#nautical-mile").val(parseFloat($("#foot").val(), 10) * 0.000164579);
        $("#kilometer").val(parseFloat($("#foot").val(), 10) * 0.0003048);
        $("#meter").val(parseFloat($("#foot").val(), 10) * 0.3048);
        $("#centimeter").val(parseFloat($("#foot").val(), 10) * 30.48);
        $("#millimeter").val(parseFloat($("#foot").val(), 10) * 304.8);
        $("#micrometer").val(parseFloat($("#foot").val(), 10) * 304800);
        $("#nanometer").val(parseFloat($("#foot").val(), 10) * 3.048 * Math.pow(10, 8));   
    });
    $('#inch').keyup(function() {
        $("#mile").val(parseFloat($("#inch").val(), 10) * 1.5783 / Math.pow(10, 5));
        $("#yard").val(parseFloat($("#inch").val(), 10) * 0.0277778);
        $("#foot").val(parseFloat($("#inch").val(), 10) * 0.0833333);
        $("#nautical-mile").val(parseFloat($("#inch").val(), 10) * 1.3715 / Math.pow(10, 5));
        $("#kilometer").val(parseFloat($("#inch").val(), 10) * 2.54 / Math.pow(10, 5));
        $("#meter").val(parseFloat($("#inch").val(), 10) * 0.0254);
        $("#centimeter").val(parseFloat($("#inch").val(), 10) * 2.54);
        $("#millimeter").val(parseFloat($("#inch").val(), 10) * 25.4);
        $("#micrometer").val(parseFloat($("#inch").val(), 10) * 25400);
        $("#nanometer").val(parseFloat($("#inch").val(), 10) * 2.54 * Math.pow(10, 7));   
    });
    $('#nautical-mile').keyup(function() {
        $("#mile").val(parseFloat($("#nautical-mile").val(), 10) * 1.15078);
        $("#yard").val(parseFloat($("#nautical-mile").val(), 10) * 2025.37);
        $("#foot").val(parseFloat($("#nautical-mile").val(), 10) * 6076.12);
        $("#inch").val(parseFloat($("#nautical-mile").val(), 10) * 72913.4);
        $("#kilometer").val(parseFloat($("#nautical-mile").val(), 10) * 1.852);
        $("#meter").val(parseFloat($("#nautical-mile").val(), 10) * 1852);
        $("#centimeter").val(parseFloat($("#nautical-mile").val(), 10) * 185200);
        $("#millimeter").val(parseFloat($("#nautical-mile").val(), 10) * 1.852 * Math.pow(10, 6));
        $("#micrometer").val(parseFloat($("#nautical-mile").val(), 10) * 1.852 * Math.pow(10, 9));
        $("#nanometer").val(parseFloat($("#nautical-mile").val(), 10) * 1.852 * Math.pow(10, 12));   
    });
    $('#kilometer').keyup(function() { 
        $("#mile").val(parseFloat($("#kilometer").val(), 10) * 0.621371);
        $("#yard").val(parseFloat($("#kilometer").val(), 10) * 1093.61);
        $("#foot").val(parseFloat($("#kilometer").val(), 10) * 3280.84);
        $("#inch").val(parseFloat($("#kilometer").val(), 10) * 39370.1);
        $("#nautical-mile").val(parseFloat($("#kilometer").val(), 19) * 0.539957);
        $("#meter").val(parseFloat($("#kilometer").val(), 10) * 1000);
        $("#centimeter").val(parseFloat($("#kilometer").val(), 10) * 100000);
        $("#millimeter").val(parseFloat($("#kilometer").val(), 10) * 1 * Math.pow(10, 6));
        $("#micrometer").val(parseFloat($("#kilometer").val(), 10) * 1 * Math.pow(10, 9));
        $("#nanometer").val(parseFloat($("#kilometer").val(), 10) * 1 * Math.pow(10, 12));
    });
    $('#meter').keyup(function() {
        $("#mile").val(parseFloat($("#meter").val(), 10) * 0.000621371);
        $("#yard").val(parseFloat($("#meter").val(), 10) * 1.09361);
        $("#foot").val(parseFloat($("#meter").val(), 10) * 3.28084);
        $("#inch").val(parseFloat($("#meter").val(), 10) * 39.3701);
        $("#nautical-mile").val(parseFloat($("#meter").val(), 10) * 0.000539957);
        $("#kilometer").val(parseFloat($("#meter").val(), 10) * 0.001);
        $("#centimeter").val(parseFloat($("#meter").val(), 10) * 100);
        $("#millimeter").val(parseFloat($("#meter").val(), 10) * 1000);
        $("#micrometer").val(parseFloat($("#meter").val(), 10) * 1 * Math.pow(10, 6));
        $("#nanometer").val(parseFloat($("#meter").val(), 10) * 1 * Math.pow(10, 9));   
    });
    $('#centimeter').keyup(function() {
        $("#mile").val(parseFloat($("#centimeter").val(), 10) * 6.2137 / Math.pow(10, 6));
        $("#yard").val(parseFloat($("#centimeter").val(), 10) * 0.0109361);
        $("#foot").val(parseFloat($("#centimeter").val(), 10) * 0.0328083);
        $("#inch").val(parseFloat($("#centimeter").val(), 10) * 0.393701);
        $("#nautical-mile").val(parseFloat($("#centimeter").val(), 10) * 5.3996 / Math.pow(10, 6));
        $("#kilometer").val(parseFloat($("#centimeter").val(), 10) * 1 / Math.pow(10, 5));
        $("#meter").val(parseFloat($("#centimeter").val(), 10) * 0.01);
        $("#millimeter").val(parseFloat($("#centimeter").val(), 10) * 10);
        $("#micrometer").val(parseFloat($("#centimeter").val(), 10) * 10000);
        $("#nanometer").val(parseFloat($("#centimeter").val(), 10) * 1 * Math.pow(10, 7));   
    });
    $('#millimeter').keyup(function() {
        $("#mile").val(parseFloat($("#millimeter").val(), 10) * 6.2137 / Math.pow(10, 7));
        $("#yard").val(parseFloat($("#millimeter").val(), 10) * 0.00109361);
        $("#foot").val(parseFloat($("#millimeter").val(), 10) * 0.00328084);
        $("#inch").val(parseFloat($("#millimeter").val(), 10) * 0.0393701);
        $("#nautical-mile").val(parseFloat($("#millimeter").val(), 10) * 5.3996 / Math.pow(10, 7));
        $("#kilometer").val(parseFloat($("#millimeter").val(), 10) * 1 / Math.pow(10, 6));
        $("#meter").val(parseFloat($("#millimeter").val(), 10) * 0.001);
        $("#centimeter").val(parseFloat($("#millimeter").val(), 10) * 0.1);
        $("#micrometer").val(parseFloat($("#millimeter").val(), 10) * 1000);
        $("#nanometer").val(parseFloat($("#millimeter").val(), 10) * 1 * Math.pow(10, 6));   
    });
    $('#micrometer').keyup(function() {
        $("#mile").val(parseFloat($("#micrometer").val(), 10) * 6.2137 / Math.pow(10, 10));
        $("#yard").val(parseFloat($("#micrometer").val(), 10) * 1.0936 / Math.pow(10, 6));
        $("#foot").val(parseFloat($("#micrometer").val(), 10) * 3.2808 / Math.pow(10, 6));
        $("#inch").val(parseFloat($("#micrometer").val(), 10) * 3.937 / Math.pow(10, 5));
        $("#nautical-mile").val(parseFloat($("#micrometer").val(), 10) * 5.3996 / Math.pow(10, 10));
        $("#kilometer").val(parseFloat($("#micrometer").val(), 10) * 1 / Math.pow(10, 9));
        $("#meter").val(parseFloat($("#micrometer").val(), 10) * 1 / Math.pow(10, 6));
        $("#centimeter").val(parseFloat($("#micrometer").val(), 10) * 1 / Math.pow(10, 4));
        $("#millimeter").val(parseFloat($("#micrometer").val(), 10) * 0.001);
        $("#nanometer").val(parseFloat($("#micrometer").val(), 10) * 1000);   
    });
    $('#nanometer').keyup(function() {
        $("#mile").val(parseFloat($("#nanometer").val(), 10) * 6.2137 / Math.pow(10, 13));
        $("#yard").val(parseFloat($("#nanometer").val(), 10) * 1.0936 / Math.pow(10, 9));
        $("#foot").val(parseFloat($("#nanometer").val(), 10) * 3.2808 / Math.pow(10, 9));
        $("#inch").val(parseFloat($("#nanometer").val(), 10) * 3.937 / Math.pow(10, 8));
        $("#nautical-mile").val(parseFloat($("#nanometer").val(), 10) * 5.3996 / Math.pow(10, 13));
        $("#kilometer").val(parseFloat($("#nanometer").val(), 10) * 1 / Math.pow(10, 12));
        $("#meter").val(parseFloat($("#nanometer").val(), 10) * 1 / Math.pow(10, 9));
        $("#centimeter").val(parseFloat($("#nanometer").val(), 10) * 1 / Math.pow(10, 7));
        $("#millimeter").val(parseFloat($("#nanometer").val(), 10) * 1 / Math.pow(10, 6));
        $("#micrometer").val(parseFloat($("#nanometer").val(), 10) * 0.001);   
    });
};
$(document).ready(length);

var mass = function() {
    $('#imperial-ton').keyup(function() { 
        $("#us-ton").val(parseFloat($("#imperial-ton").val(), 10) * 1.12);
        $("#stone").val(parseFloat($("#imperial-ton").val(), 10) * 160);
        $("#pound").val(parseFloat($("#imperial-ton").val(), 10) * 2240);
        $("#ounce").val(parseFloat($("#imperial-ton").val(), 10) * 35840);
        $("#metric-ton").val(parseFloat($("#imperial-ton").val(), 10) * 1.01605);
        $("#kilogram").val(parseFloat($("#imperial-ton").val(), 10) * 1016.05);
        $("#gram").val(parseFloat($("#imperial-ton").val(), 10) * 1.016 * Math.pow(10, 6));
        $("#milligram").val(parseFloat($("#imperial-ton").val(), 10) * 1.016 * Math.pow(10, 9));
        $("#microgram").val(parseFloat($("#imperial-ton").val(), 10) * 1.016 * Math.pow(10, 12));
    });
    $('#us-ton').keyup(function() { 
        $("#imperial-ton").val(parseFloat($("#us-ton").val(), 10) * 0.892857);
        $("#stone").val(parseFloat($("#us-ton").val(), 10) * 142.857);
        $("#pound").val(parseFloat($("#us-ton").val(), 10) * 2000);
        $("#ounce").val(parseFloat($("#us-ton").val(), 10) * 32000);
        $("#metric-ton").val(parseFloat($("#us-ton").val(), 10) * 0.907185);
        $("#kilogram").val(parseFloat($("#us-ton").val(), 10) * 907.185);
        $("#gram").val(parseFloat($("#us-ton").val(), 10) * 907185);
        $("#milligram").val(parseFloat($("#us-ton").val(), 10) * 9.072 * Math.pow(10, 8));
        $("#microgram").val(parseFloat($("#us-ton").val(), 10) * 9.072 * Math.pow(10, 11));
    });
    $('#stone').keyup(function() { 
        $("#imperial-ton").val(parseFloat($("#stone").val(), 10) * 0.00625);
        $("#us-ton").val(parseFloat($("#stone").val(), 10) * 0.007);
        $("#pound").val(parseFloat($("#stone").val(), 10) * 14);
        $("#ounce").val(parseFloat($("#stone").val(), 10) * 224);
        $("#metric-ton").val(parseFloat($("#stone").val(), 10) * 0.00635029);
        $("#kilogram").val(parseFloat($("#stone").val(), 10) * 6.35029);
        $("#gram").val(parseFloat($("#stone").val(), 10) * 6350.29);
        $("#milligram").val(parseFloat($("#stone").val(), 10) * 6.35 * Math.pow(10, 6));
        $("#microgram").val(parseFloat($("#stone").val(), 10) * 6.35 * Math.pow(10, 9));
    });
    $('#pound').keyup(function() { 
        $("#imperial-ton").val(parseFloat($("#pound").val(), 10) * 0.000446429);
        $("#us-ton").val(parseFloat($("#pound").val(), 10) * 0.0005);
        $("#stone").val(parseFloat($("#pound").val(), 10) * 0.0714286);
        $("#ounce").val(parseFloat($("#pound").val(), 10) * 16);
        $("#metric-ton").val(parseFloat($("#pound").val(), 10) * 0.000453592);
        $("#kilogram").val(parseFloat($("#pound").val(), 10) * 0.453592);
        $("#gram").val(parseFloat($("#pound").val(), 10) * 453.592);
        $("#milligram").val(parseFloat($("#pound").val(), 10) * 453592);
        $("#microgram").val(parseFloat($("#pound").val(), 10) * 4.536 * Math.pow(10, 8));
    });
    $('#ounce').keyup(function() { 
        $("#imperial-ton").val(parseFloat($("#ounce").val(), 10) * 2.7902 / Math.pow(10, 5));
        $("#us-ton").val(parseFloat($("#ounce").val(), 10) * 3.125 / Math.pow(10, 5));
        $("#stone").val(parseFloat($("#ounce").val(), 10) * 0.00446429);
        $("#pound").val(parseFloat($("#ounce").val(), 10) * 0.0625);
        $("#metric-ton").val(parseFloat($("#ounce").val(), 10) * 2.835 / Math.pow(10, 5));
        $("#kilogram").val(parseFloat($("#ounce").val(), 10) * 0.0283495);
        $("#gram").val(parseFloat($("#ounce").val(), 10) * 28.3495);
        $("#milligram").val(parseFloat($("#ounce").val(), 10) * 28349.5);
        $("#microgram").val(parseFloat($("#ounce").val(), 10) * 2.835 * Math.pow(10, 7));
    });
    $('#metric-ton').keyup(function() { 
        $("#imperial-ton").val(parseFloat($("#metric-ton").val(), 10) * 0.984207);
        $("#us-ton").val(parseFloat($("#metric-ton").val(), 10) * 1.10231);
        $("#stone").val(parseFloat($("#metric-ton").val(), 10) * 157.473);
        $("#pound").val(parseFloat($("#metric-ton").val(), 10) * 2204.62);
        $("#ounce").val(parseFloat($("#metric-ton").val(), 10) * 35274);
        $("#kilogram").val(parseFloat($("#metric-ton").val(), 10) * 1000);
        $("#gram").val(parseFloat($("#metric-ton").val(), 10) * 1 * Math.pow(10, 6));
        $("#milligram").val(parseFloat($("#metric-ton").val(), 10) * 1 * Math.pow(10, 9));
        $("#microgram").val(parseFloat($("#metric-ton").val(), 10) * 1 * Math.pow(10, 12));
    });
    $('#kilogram').keyup(function() { 
        $("#imperial-ton").val(parseFloat($("#kilogram").val(), 10) * 0.000984207);
        $("#us-ton").val(parseFloat($("#kilogram").val(), 10) * 0.00110231);
        $("#stone").val(parseFloat($("#kilogram").val(), 10) * 0.157473);
        $("#pound").val(parseFloat($("#kilogram").val(), 10) * 2.20462);
        $("#ounce").val(parseFloat($("#kilogram").val(), 10) * 35.274);
        $("#metric-ton").val(parseFloat($("#kilogram").val(), 10) * 0.001);
        $("#gram").val(parseFloat($("#kilogram").val(), 10) * 1000);
        $("#milligram").val(parseFloat($("#kilogram").val(), 10) * 1 * Math.pow(10, 6));
        $("#microgram").val(parseFloat($("#kilogram").val(), 10) * 1 * Math.pow(10, 9));
    });
    $('#gram').keyup(function() { 
        $("#imperial-ton").val(parseFloat($("#gram").val(), 10) * 9.8421 / Math.pow(10, 7));
        $("#us-ton").val(parseFloat($("#gram").val(), 10) * 1.1023 / Math.pow(10, 6));
        $("#stone").val(parseFloat($("#gram").val(), 10) * 0.000157473);
        $("#pound").val(parseFloat($("#gram").val(), 10) * 0.00220462);
        $("#ounce").val(parseFloat($("#gram").val(), 10) * 0.035274);
        $("#metric-ton").val(parseFloat($("#gram").val(), 10) * 1 / Math.pow(10, 6));
        $("#kilogram").val(parseFloat($("#gram").val(), 10) * 0.001);
        $("#milligram").val(parseFloat($("#gram").val(), 10) * 1000);
        $("#microgram").val(parseFloat($("#gram").val(), 10) * 1.609 * Math.pow(10, 6));
    });
    $('#milligram').keyup(function() { 
        $("#imperial-ton").val(parseFloat($("#milligram").val(), 10) * 9.8421 / Math.pow(10, 10));
        $("#us-ton").val(parseFloat($("#milligram").val(), 10) * 1.1023 / Math.pow(10, 9));
        $("#stone").val(parseFloat($("#milligram").val(), 10) * 1.5747 / Math.pow(10, 7));
        $("#pound").val(parseFloat($("#milligram").val(), 10) * 2.2046 / Math.pow(10, 6));
        $("#ounce").val(parseFloat($("#milligram").val(), 10) * 3.5274 / Math.pow(10, 5));
        $("#metric-ton").val(parseFloat($("#milligram").val(), 10) * 1 / Math.pow(10, 9));
        $("#kilogram").val(parseFloat($("#milligram").val(), 10) * 1 / Math.pow(10, 6));
        $("#gram").val(parseFloat($("#milligram").val(), 10) * 0.001);
        $("#microgram").val(parseFloat($("#milligram").val(), 10) * 1000);
    });
    $('#microgram').keyup(function() { 
        $("#imperial-ton").val(parseFloat($("#microgram").val(), 10) * 9.8421 / Math.pow(10, 13));
        $("#us-ton").val(parseFloat($("#microgram").val(), 10) * 1.1023 / Math.pow(10, 12));
        $("#stone").val(parseFloat($("#microgram").val(), 10) * 1.5747 / Math.pow(10, 10));
        $("#pound").val(parseFloat($("#microgram").val(), 10) * 2.2046 / Math.pow(10, 9));
        $("#ounce").val(parseFloat($("#microgram").val(), 10) * 3.5274 / Math.pow(10, 8));
        $("#metric-ton").val(parseFloat($("#microgram").val(), 10) * 1 / Math.pow(10, 12));
        $("#kilogram").val(parseFloat($("#microgram").val(), 10) * 1 / Math.pow(10, 9));
        $("#gram").val(parseFloat($("#microgram").val(), 10) * 1 * Math.pow(10, 6));
        $("#milligram").val(parseFloat($("#microgram").val(), 10) * 0.001);
    });
};
$(document).ready(mass);

var area = function() {
    $('#square-mile').keyup(function() { 
        $("#square-yard").val(parseFloat($("#square-mile").val(), 10) * 3.098 * Math.pow(10, 6));
        $("#square-foot").val(parseFloat($("#square-mile").val(), 10) * 2.788 * Math.pow(10, 7));
        $("#square-inch").val(parseFloat($("#square-mile").val(), 10) * 4.014 * Math.pow(10, 9));
        $("#acre").val(parseFloat($("#square-mile").val(), 10) * 640);
        $("#square-kilometer").val(parseFloat($("#square-mile").val(), 10) * 2.58999);
        $("#square-meter").val(parseFloat($("#square-mile").val(), 10) * 2.59 * Math.pow(10, 6));
        $("#hectare").val(parseFloat($("#square-mile").val(), 10) * 258.999);
    });
    $('#square-yard').keyup(function() { 
        $("#square-mile").val(parseFloat($("#square-yard").val(), 10) * 3.22831 / Math.pow(10, 7));
        $("#square-foot").val(parseFloat($("#square-yard").val(), 10) * 9);
        $("#square-inch").val(parseFloat($("#square-yard").val(), 10) * 1296);
        $("#acre").val(parseFloat($("#square-yard").val(), 10) * 0.000206612);
        $("#square-kilometer").val(parseFloat($("#square-yard").val(), 10) * 8.3613 / Math.pow(10,7));
        $("#square-meter").val(parseFloat($("#square-yard").val(), 10) * 0.836127);
        $("#hectare").val(parseFloat($("#square-yard").val(), 10) * 8.3613 / Math.pow(10,5));
    });
    $('#square-foot').keyup(function() { 
        $("#square-mile").val(parseFloat($("#square-foot").val(), 10) * 3.587 / Math.pow(10, 8));
        $("#square-yard").val(parseFloat($("#square-foot").val(), 10) * 0.111111);
        $("#square-inch").val(parseFloat($("#square-foot").val(), 10) * 144);
        $("#acre").val(parseFloat($("#square-foot").val(), 10) * 2.2957 / Math.pow(10,5));
        $("#square-kilometer").val(parseFloat($("#square-foot").val(), 10) * 9.2903 / Math.pow(10,8));
        $("#square-meter").val(parseFloat($("#square-foot").val(), 10) * 0.092903);
        $("#hectare").val(parseFloat($("#square-foot").val(), 10) * 9.2903 / Math.pow(10,6));
    });
    $('#square-inch').keyup(function() { 
        $("#square-mile").val(parseFloat($("#square-inch").val(), 10) * 2.491 / Math.pow(10, 10));
        $("#square-yard").val(parseFloat($("#square-inch").val(), 10) * 0.000771605);
        $("#square-foot").val(parseFloat($("#square-inch").val(), 10) * 0.00694444);
        $("#acre").val(parseFloat($("#square-inch").val(), 10) * 1.5942 / Math.pow(10,7));
        $("#square-kilometer").val(parseFloat($("#square-inch").val(), 10) * 6.4516 / Math.pow(10,10));
        $("#square-meter").val(parseFloat($("#square-inch").val(), 10) * 0.00064516);
        $("#hectare").val(parseFloat($("#square-inch").val(), 10) * 6.4516 / Math.pow(10,8));
    });
    $('#acre').keyup(function() { 
        $("#square-mile").val(parseFloat($("#acre").val(), 10) * 0.0015625);
        $("#square-yard").val(parseFloat($("#acre").val(), 10) * 4840);
        $("#square-foot").val(parseFloat($("#acre").val(), 10) * 43560);
        $("#square-inch").val(parseFloat($("#acre").val(), 10) * 6.273 * Math.pow(10,6));
        $("#square-kilometer").val(parseFloat($("#acre").val(), 10) * 0.00404686);
        $("#square-meter").val(parseFloat($("#acre").val(), 10) * 4046.86);
        $("#hectare").val(parseFloat($("#acre").val(), 10) * 0.404686);
    });
    $('#square-kilometer').keyup(function() { 
        $("#square-mile").val(parseFloat($("#square-kilometer").val(), 10) * 0.386102);
        $("#square-yard").val(parseFloat($("#square-kilometer").val(), 10) * 1.19599;
        $("#square-foot").val(parseFloat($("#square-kilometer").val(), 10) * 1.076 * Math.pow(10,7);
        $("#square-inch").val(parseFloat($("#square-kilometer").val(), 10) * 1.55 * Math.pow(10,9));
        $("#acre").val(parseFloat($("#square-kilometer").val(), 10) * 247.105);
        $("#square-meter").val(parseFloat($("#square-kilometer").val(), 10) * 1 * Math.pow(10,6));
        $("#hectare").val(parseFloat($("#square-kilometer").val(), 10) * 100);
    });
    $('#square-meter').keyup(function() { 
        $("#square-mile").val(parseFloat($("#square-meter").val(), 10) * 3.861 / Math.pow(10,7);
        $("#square-yard").val(parseFloat($("#square-meter").val(), 10) * 4840);
        $("#square-foot").val(parseFloat($("#square-meter").val(), 10) * 10.7639);
        $("#square-inch").val(parseFloat($("#square-meter").val(), 10) * 1550;
        $("#acre").val(parseFloat($("#square-meter").val(), 10) * 0.000247105);
        $("#square-kilometer").val(parseFloat($("#square-meter").val(), 10) * 1 / Math.pow(10,6);
        $("#hectare").val(parseFloat($("#square-meter").val(), 10) * 1 / Math.pow(10,4);
    });
    $('#hectare').keyup(function() { 
        $("#square-mile").val(parseFloat($("#hectare").val(), 10) * 0.00386102);
        $("#square-yard").val(parseFloat($("#hectare").val(), 10) * 11959.9);
        $("#square-foot").val(parseFloat($("#hectare").val(), 10) * 107639);
        $("#square-inch").val(parseFloat($("#hectare").val(), 10) * 1.55 * Math.pow(10,7));
        $("#acre").val(parseFloat($("#hectare").val(), 10) * 2.47105);
        $("#square-kilometer").val(parseFloat($("#hectare").val(), 10) * 0.01);
        $("#square-meter").val(parseFloat($("#hectare").val(), 10) * 10000);
    });
};
$(document).ready(area);

var volume = function() {
    $('#us-liquid-gallon').keyup(function() { 
        $("#us-liquid-quart").val(parseFloat($("#us-liquid-gallon").val(), 10) * 4);
        $("#us-liquid-pint").val(parseFloat($("#us-liquid-gallon").val(), 10) * 8);
        $("#us-legal-cup").val(parseFloat($("#us-liquid-gallon").val(), 10) * 15.7725);
        $("#us-fluid-ounce").val(parseFloat($("#us-liquid-gallon").val(), 10) * 128);
        $("#us-tablespoon").val(parseFloat($("#us-liquid-gallon").val(), 10) * 256);
        $("#us-teaspoon").val(parseFloat($("#us-liquid-gallon").val(), 10) * 768);
        $("#cubic-foot").val(parseFloat($("#us-liquid-gallon").val(), 10) * 0.133681);
        $("#cubic-inch").val(parseFloat($("#us-liquid-gallon").val(), 10) * 231);
        $("#imperial-gallon").val(parseFloat($("#us-liquid-gallon").val(), 10) * 0.832674);
        $("#imperial-quart").val(parseFloat($("#us-liquid-gallon").val(), 10) * 3.3307);
        $("#imperial-pint").val(parseFloat($("#us-liquid-gallon").val(), 10) * 6.66139);
        $("#imperial-cup").val(parseFloat($("#us-liquid-gallon").val(), 10) * 13.3228);
        $("#imperial-fluid-ounce").val(parseFloat($("#us-liquid-gallon").val(), 10) * 133.228);
        $("#imperial-tablespoon").val(parseFloat($("#us-liquid-gallon").val(), 10) * 213.165);
        $("#imperial-teaspoon").val(parseFloat($("#us-liquid-gallon").val(), 10) * 639.494);
        $("#liter").val(parseFloat($("#us-liquid-gallon").val(), 10) * 3.78541);
        $("#milliliter").val(parseFloat($("#us-liquid-gallon").val(), 10) * 3785.41);
        $("#cubic-meter").val(parseFloat($("#us-liquid-gallon").val(), 10) * 0.00378541);
    });
    $('#us-liquid-quart').keyup(function() { 
        $("#us-liquid-gallon").val(parseFloat($("#us-liquid-quart").val(), 10) * 0.25);
        $("#us-liquid-pint").val(parseFloat($("#us-liquid-quart").val(), 10) * 2);
        $("#us-legal-cup").val(parseFloat($("#us-liquid-quart").val(), 10) * 3.94314);
        $("#us-fluid-ounce").val(parseFloat($("#us-liquid-quart").val(), 10) * 32);
        $("#us-tablespoon").val(parseFloat($("#us-liquid-quart").val(), 10) * 64);
        $("#us-teaspoon").val(parseFloat($("#us-liquid-quart").val(), 10) * 192);
        $("#cubic-foot").val(parseFloat($("#us-liquid-quart").val(), 10) * 0.0334201);
        $("#cubic-inch").val(parseFloat($("#us-liquid-quart").val(), 10) * 57.75);
        $("#imperial-gallon").val(parseFloat($("#us-liquid-quart").val(), 10) * 0.208169);
        $("#imperial-quart").val(parseFloat($("#us-liquid-quart").val(), 10) * 0.832674);
        $("#imperial-pint").val(parseFloat($("#us-liquid-quart").val(), 10) * 1.66535);
        $("#imperial-cup").val(parseFloat($("#us-liquid-quart").val(), 10) * 3.3307);
        $("#imperial-fluid-ounce").val(parseFloat($("#us-liquid-quart").val(), 10) * 33.307);
        $("#imperial-tablespoon").val(parseFloat($("#us-liquid-quart").val(), 10) * 53.2911);
        $("#imperial-teaspoon").val(parseFloat($("#us-liquid-quart").val(), 10) * 159.873);
        $("#liter").val(parseFloat($("#us-liquid-quart").val(), 10) * 0.946353);
        $("#milliliter").val(parseFloat($("#us-liquid-quart").val(), 10) * 946.353);
        $("#cubic-meter").val(parseFloat($("#us-liquid-quart").val(), 10) * 0.000946353);
    });
    $('#us-liquid-pint').keyup(function() { 
        $("#us-liquid-gallon").val(parseFloat($("#us-liquid-pint").val(), 10) * 0.125);
        $("#us-liquid-quart").val(parseFloat($("#us-liquid-pint").val(), 10) * 0.5);
        $("#us-legal-cup").val(parseFloat($("#us-liquid-pint").val(), 10) * 1.97157);
        $("#us-fluid-ounce").val(parseFloat($("#us-liquid-pint").val(), 10) * 16);
        $("#us-tablespoon").val(parseFloat($("#us-liquid-pint").val(), 10) * 32);
        $("#us-teaspoon").val(parseFloat($("#us-liquid-pint").val(), 10) * 96);
        $("#cubic-foot").val(parseFloat($("#us-liquid-pint").val(), 10) * 0.0167101);
        $("#cubic-inch").val(parseFloat($("#us-liquid-pint").val(), 10) * 28.875);
        $("#imperial-gallon").val(parseFloat($("#us-liquid-pint").val(), 10) * 0.104084);
        $("#imperial-quart").val(parseFloat($("#us-liquid-pint").val(), 10) * 0.416337);
        $("#imperial-pint").val(parseFloat($("#us-liquid-pint").val(), 10) * 0.832674);
        $("#imperial-cup").val(parseFloat($("#us-liquid-pint").val(), 10) * 1.66535);
        $("#imperial-fluid-ounce").val(parseFloat($("#us-liquid-pint").val(), 10) * 16.6535);
        $("#imperial-tablespoon").val(parseFloat($("#us-liquid-pint").val(), 10) * 26.6456 );
        $("#imperial-teaspoon").val(parseFloat($("#us-liquid-pint").val(), 10) * 79.9367);
        $("#liter").val(parseFloat($("#us-liquid-pint").val(), 10) * 0.473176);
        $("#milliliter").val(parseFloat($("#us-liquid-pint").val(), 10) * 473.176);
        $("#cubic-meter").val(parseFloat($("#us-liquid-pint").val(), 10) * 0.000473176);
    });
    $('#us-legal-cup').keyup(function() { 
        $("#us-liquid-gallon").val(parseFloat($("#us-legal-cup").val(), 10) * 0.0634013);
        $("#us-liquid-quart").val(parseFloat($("#us-legal-cup").val(), 10) * 0.253605);
        $("#us-liquid-pint").val(parseFloat($("#us-legal-cup").val(), 10) * 0.50721);
        $("#us-fluid-ounce").val(parseFloat($("#us-legal-cup").val(), 10) * 8.11537);
        $("#us-tablespoon").val(parseFloat($("#us-legal-cup").val(), 10) * 16.2307);
        $("#us-teaspoon").val(parseFloat($("#us-legal-cup").val(), 10) * 48.6922);
        $("#cubic-foot").val(parseFloat($("#us-legal-cup").val(), 10) * 0.00847552);
        $("#cubic-inch").val(parseFloat($("#us-legal-cup").val(), 10) * 14.6457);
        $("#imperial-gallon").val(parseFloat($("#us-legal-cup").val(), 10) * 0.0527926);
        $("#imperial-quart").val(parseFloat($("#us-legal-cup").val(), 10) * 0.21117);
        $("#imperial-pint").val(parseFloat($("#us-legal-cup").val(), 10) * 0.422341);
        $("#imperial-cup").val(parseFloat($("#us-legal-cup").val(), 10) * 0.844682);
        $("#imperial-fluid-ounce").val(parseFloat($("#us-legal-cup").val(), 10) * 8.44682);
        $("#imperial-tablespoon").val(parseFloat($("#us-legal-cup").val(), 10) * 13.5149);
        $("#imperial-teaspoon").val(parseFloat($("#us-legal-cup").val(), 10) * 40.5447);
        $("#liter").val(parseFloat($("#us-legal-cup").val(), 10) * 0.24);
        $("#milliliter").val(parseFloat($("#us-legal-cup").val(), 10) * 240);
        $("#cubic-meter").val(parseFloat($("#us-legal-cup").val(), 10) * 0.00024);
    });
    $('#us-fluid-ounce').keyup(function() { 
        $("#us-liquid-gallon").val(parseFloat($("#us-fluid-ounce").val(), 10) * 0.0078125);
        $("#us-liquid-quart").val(parseFloat($("#us-fluid-ounce").val(), 10) * 0.03125);
        $("#us-liquid-pint").val(parseFloat($("#us-fluid-ounce").val(), 10) * 0.0625);
        $("#us-legal-cup").val(parseFloat($("#us-fluid-ounce").val(), 10) * 0.123223);
        $("#us-tablespoon").val(parseFloat($("#us-fluid-ounce").val(), 10) * 2);
        $("#us-teaspoon").val(parseFloat($("#us-fluid-ounce").val(), 10) * 6);
        $("#cubic-foot").val(parseFloat($("#us-fluid-ounce").val(), 10) * 0.00104438);
        $("#cubic-inch").val(parseFloat($("#us-fluid-ounce").val(), 10) * 1.80469);
        $("#imperial-gallon").val(parseFloat($("#us-fluid-ounce").val(), 10) * 0.00650527);
        $("#imperial-quart").val(parseFloat($("#us-fluid-ounce").val(), 10) * 0.0260211);
        $("#imperial-pint").val(parseFloat($("#us-fluid-ounce").val(), 10) * 0.0520421);
        $("#imperial-cup").val(parseFloat($("#us-fluid-ounce").val(), 10) * 0.104084);
        $("#imperial-fluid-ounce").val(parseFloat($("#us-fluid-ounce").val(), 10) * 1.04084);
        $("#imperial-tablespoon").val(parseFloat($("#us-fluid-ounce").val(), 10) * 1.66535);
        $("#imperial-teaspoon").val(parseFloat($("#us-fluid-ounce").val(), 10) * 4.99604);
        $("#liter").val(parseFloat($("#us-fluid-ounce").val(), 10) * 0.0295735);
        $("#milliliter").val(parseFloat($("#us-fluid-ounce").val(), 10) * 29.5735);
        $("#cubic-meter").val(parseFloat($("#us-fluid-ounce").val(), 10) * 2.9574 / Math.pow(10,5));
    });
    $('#us-tablespoon').keyup(function() { 
        $("#us-liquid-gallon").val(parseFloat($("#us-tablespoon").val(), 10) * 0.00390625);
        $("#us-liquid-quart").val(parseFloat($("#us-tablespoon").val(), 10) * 0.015625);
        $("#us-liquid-pint").val(parseFloat($("#us-tablespoon").val(), 10) * 0.03125);
        $("#us-legal-cup").val(parseFloat($("#us-tablespoon").val(), 10) * 0.0616115);
        $("#us-fluid-ounce").val(parseFloat($("#us-tablespoon").val(), 10) * 0.5);
        $("#us-teaspoon").val(parseFloat($("#us-tablespoon").val(), 10) * 3);
        $("#cubic-foot").val(parseFloat($("#us-tablespoon").val(), 10) * 0.00052219);
        $("#cubic-inch").val(parseFloat($("#us-tablespoon").val(), 10) * 0.902344);
        $("#imperial-gallon").val(parseFloat($("#us-tablespoon").val(), 10) * 0.00325263);
        $("#imperial-quart").val(parseFloat($("#us-tablespoon").val(), 10) * 0.0130105);
        $("#imperial-pint").val(parseFloat($("#us-tablespoon").val(), 10) * 0.0260211);
        $("#imperial-cup").val(parseFloat($("#us-tablespoon").val(), 10) * 0.0520421);
        $("#imperial-fluid-ounce").val(parseFloat($("#us-tablespoon").val(), 10) * 0.520421);
        $("#imperial-tablespoon").val(parseFloat($("#us-tablespoon").val(), 10) * 0.832674);
        $("#imperial-teaspoon").val(parseFloat($("#us-tablespoon").val(), 10) * 2.49802);
        $("#liter").val(parseFloat($("#us-tablespoon").val(), 10) * 0.0147868);
        $("#milliliter").val(parseFloat($("#us-tablespoon").val(), 10) * 14.7868);
        $("#cubic-meter").val(parseFloat($("#us-tablespoon").val(), 10) * 1.4787 / Math.pow(10,5));
    });
    $('#us-teaspoon').keyup(function() { 
        $("#us-liquid-gallon").val(parseFloat($("#us-teaspoon").val(), 10) * 0.00130208);
        $("#us-liquid-quart").val(parseFloat($("#us-teaspoon").val(), 10) * 0.00520833);
        $("#us-liquid-pint").val(parseFloat($("#us-teaspoon").val(), 10) * 0.0104167);
        $("#us-legal-cup").val(parseFloat($("#us-teaspoon").val(), 10) * 0.0205372);
        $("#us-fluid-ounce").val(parseFloat($("#us-teaspoon").val(), 10) * 0.166667);
        $("#us-tablespoon").val(parseFloat($("#us-teaspoon").val(), 10) * 0.333333);
        $("#cubic-foot").val(parseFloat($("#us-teaspoon").val(), 10) * 0.000174063);
        $("#cubic-inch").val(parseFloat($("#us-teaspoon").val(), 10) * 0.300781);
        $("#imperial-gallon").val(parseFloat($("#us-teaspoon").val(), 10) * 0.00108421);
        $("#imperial-quart").val(parseFloat($("#us-teaspoon").val(), 10) * 0.00433684);
        $("#imperial-pint").val(parseFloat($("#us-teaspoon").val(), 10) * 0.00867369);
        $("#imperial-cup").val(parseFloat($("#us-teaspoon").val(), 10) * 0.0173474);
        $("#imperial-fluid-ounce").val(parseFloat($("#us-teaspoon").val(), 10) * 0.173474);
        $("#imperial-tablespoon").val(parseFloat($("#us-teaspoon").val(), 10) * 0.277558);
        $("#imperial-teaspoon").val(parseFloat($("#us-teaspoon").val(), 10) * 0.832674);
        $("#liter").val(parseFloat($("#us-teaspoon").val(), 10) * 0.00492892);
        $("#milliliter").val(parseFloat($("#us-teaspoon").val(), 10) * 4.92892);
        $("#cubic-meter").val(parseFloat($("#us-teaspoon").val(), 10) * 4.9289 / Math.pow(10,6));
    });
    $('#cubic-foot').keyup(function() { 
        $("#us-liquid-gallon").val(parseFloat($("#cubic-foot").val(), 10) * 7.48052);
        $("#us-liquid-quart").val(parseFloat($("#cubic-foot").val(), 10) * 29.9221);
        $("#us-liquid-pint").val(parseFloat($("#cubic-foot").val(), 10) * 59.8442);
        $("#us-legal-cup").val(parseFloat($("#cubic-foot").val(), 10) * 117.987);
        $("#us-fluid-ounce").val(parseFloat($("#cubic-foot").val(), 10) * 957.506);
        $("#us-tablespoon").val(parseFloat($("#cubic-foot").val(), 10) * 1915.01);
        $("#us-teaspoon").val(parseFloat($("#cubic-foot").val(), 10) * 5745.04);
        $("#cubic-inch").val(parseFloat($("#cubic-foot").val(), 10) * 1728);
        $("#imperial-gallon").val(parseFloat($("#cubic-foot").val(), 10) * 6.22884);
        $("#imperial-quart").val(parseFloat($("#cubic-foot").val(), 10) * 24.9153);
        $("#imperial-pint").val(parseFloat($("#cubic-foot").val(), 10) * 49.8307);
        $("#imperial-cup").val(parseFloat($("#cubic-foot").val(), 10) * 99.6614);
        $("#imperial-fluid-ounce").val(parseFloat($("#cubic-foot").val(), 10) * 996.614);
        $("#imperial-tablespoon").val(parseFloat($("#cubic-foot").val(), 10) * 1594.58);
        $("#imperial-teaspoon").val(parseFloat($("#cubic-foot").val(), 10) * 4783.74);
        $("#liter").val(parseFloat($("#cubic-foot").val(), 10) * 28.3168);
        $("#milliliter").val(parseFloat($("#cubic-foot").val(), 10) * 28316.8);
        $("#cubic-meter").val(parseFloat($("#cubic-foot").val(), 10) * 0.0283168);
    });
    $('#cubic-inch').keyup(function() { 
        $("#us-liquid-gallon").val(parseFloat($("#cubic-inch").val(), 10) * 0.004329);
        $("#us-liquid-quart").val(parseFloat($("#cubic-inch").val(), 10) * 0.017316);
        $("#us-liquid-pint").val(parseFloat($("#cubic-inch").val(), 10) * 0.034632);
        $("#us-legal-cup").val(parseFloat($("#cubic-inch").val(), 10) * 0.0682794);
        $("#us-fluid-ounce").val(parseFloat($("#cubic-inch").val(), 10) * 0.554113);
        $("#us-tablespoon").val(parseFloat($("#cubic-inch").val(), 10) * 1.10823);
        $("#us-teaspoon").val(parseFloat($("#cubic-inch").val(), 10) * 3.32468);
        $("#cubic-foot").val(parseFloat($("#cubic-inch").val(), 10) * 0.000578704);
        $("#imperial-gallon").val(parseFloat($("#cubic-inch").val(), 10) * 0.00360465);
        $("#imperial-quart").val(parseFloat($("#cubic-inch").val(), 10) * 0.0144186);
        $("#imperial-pint").val(parseFloat($("#cubic-inch").val(), 10) * 0.0288372);
        $("#imperial-cup").val(parseFloat($("#cubic-inch").val(), 10) * 0.0576744);
        $("#imperial-fluid-ounce").val(parseFloat($("#cubic-inch").val(), 10) * 0.576744);
        $("#imperial-tablespoon").val(parseFloat($("#cubic-inch").val(), 10) * 0.92279);
        $("#imperial-teaspoon").val(parseFloat($("#cubic-inch").val(), 10) * 2.76837);
        $("#liter").val(parseFloat($("#cubic-inch").val(), 10) * 0.0163871);
        $("#milliliter").val(parseFloat($("#cubic-inch").val(), 10) * 16.3871);
        $("#cubic-meter").val(parseFloat($("#cubic-inch").val(), 10) * 1.6387 / Math.pow(10,5));
    });
    $('#imperial-gallon').keyup(function() { 
        $("#us-liquid-gallon").val(parseFloat($("#imperial-gallon").val(), 10) * 1.20095);
        $("#us-liquid-quart").val(parseFloat($("#imperial-gallon").val(), 10) * 4.8038);
        $("#us-liquid-pint").val(parseFloat($("#imperial-gallon").val(), 10) * 9.6076);
        $("#us-legal-cup").val(parseFloat($("#imperial-gallon").val(), 10) * 18.942);
        $("#us-fluid-ounce").val(parseFloat($("#imperial-gallon").val(), 10) * 153.722);
        $("#us-tablespoon").val(parseFloat($("#imperial-gallon").val(), 10) * 307.443);
        $("#us-teaspoon").val(parseFloat($("#imperial-gallon").val(), 10) * 922.33);
        $("#cubic-foot").val(parseFloat($("#imperial-gallon").val(), 10) * 0.160544);
        $("#cubic-inch").val(parseFloat($("#imperial-gallon").val(), 10) * 277.419);
        $("#imperial-quart").val(parseFloat($("#imperial-gallon").val(), 10) * 4);
        $("#imperial-pint").val(parseFloat($("#imperial-gallon").val(), 10) * 8);
        $("#imperial-cup").val(parseFloat($("#imperial-gallon").val(), 10) * 16);
        $("#imperial-fluid-ounce").val(parseFloat($("#imperial-gallon").val(), 10) * 160);
        $("#imperial-tablespoon").val(parseFloat($("#imperial-gallon").val(), 10) * 256);
        $("#imperial-teaspoon").val(parseFloat($("#imperial-gallon").val(), 10) * 768);
        $("#liter").val(parseFloat($("#imperial-gallon").val(), 10) * 4.54609);
        $("#milliliter").val(parseFloat($("#imperial-gallon").val(), 10) * 4546.09);
        $("#cubic-meter").val(parseFloat($("#imperial-gallon").val(), 10) * 0.00454609);
    });
    $('#imperial-quart').keyup(function() { 
        $("#us-liquid-gallon").val(parseFloat($("#imperial-quart").val(), 10) * 0.300237);
        $("#us-liquid-quart").val(parseFloat($("#imperial-quart").val(), 10) * 1.20095);
        $("#us-liquid-pint").val(parseFloat($("#imperial-quart").val(), 10) * 2.4019);
        $("#us-legal-cup").val(parseFloat($("#imperial-quart").val(), 10) * 4.73551);
        $("#us-fluid-ounce").val(parseFloat($("#imperial-quart").val(), 10) * 38.4304);
        $("#us-tablespoon").val(parseFloat($("#imperial-quart").val(), 10) * 76.8608);
        $("#us-teaspoon").val(parseFloat($("#imperial-quart").val(), 10) * 230.582);
        $("#cubic-foot").val(parseFloat($("#imperial-quart").val(), 10) * 0.0401359);
        $("#cubic-inch").val(parseFloat($("#imperial-quart").val(), 10) * 69.3549);
        $("#imperial-gallon").val(parseFloat($("#imperial-quart").val(), 10) * 0.25);
        $("#imperial-pint").val(parseFloat($("#imperial-quart").val(), 10) * 2);
        $("#imperial-cup").val(parseFloat($("#imperial-quart").val(), 10) * 4);
        $("#imperial-fluid-ounce").val(parseFloat($("#imperial-quart").val(), 10) * 40);
        $("#imperial-tablespoon").val(parseFloat($("#imperial-quart").val(), 10) * 64);
        $("#imperial-teaspoon").val(parseFloat($("#imperial-quart").val(), 10) * 192);
        $("#liter").val(parseFloat($("#imperial-quart").val(), 10) * 1.13652);
        $("#milliliter").val(parseFloat($("#imperial-quart").val(), 10) * 1136.52);
        $("#cubic-meter").val(parseFloat($("#imperial-quart").val(), 10) * 0.00113652);
    });
    $('#imperial-pint').keyup(function() { 
        $("#us-liquid-gallon").val(parseFloat($("#imperial-pint").val(), 10) * 0.150119);
        $("#us-liquid-quart").val(parseFloat($("#imperial-pint").val(), 10) * 0.600475);
        $("#us-liquid-pint").val(parseFloat($("#imperial-pint").val(), 10) * 2.4019);
        $("#us-legal-cup").val(parseFloat($("#imperial-pint").val(), 10) * 2.36776);
        $("#us-fluid-ounce").val(parseFloat($("#imperial-pint").val(), 10) * 19.2152);
        $("#us-tablespoon").val(parseFloat($("#imperial-pint").val(), 10) * 38.4304);
        $("#us-teaspoon").val(parseFloat($("#imperial-pint").val(), 10) * 115.291);
        $("#cubic-foot").val(parseFloat($("#imperial-pint").val(), 10) * 0.020068);
        $("#cubic-inch").val(parseFloat($("#imperial-pint").val(), 10) * 34.6774);
        $("#imperial-gallon").val(parseFloat($("#imperial-pint").val(), 10) * 0.125);
        $("#imperial-quart").val(parseFloat($("#imperial-pint").val(), 10) * 0.5);
        $("#imperial-cup").val(parseFloat($("#imperial-pint").val(), 10) * 2);
        $("#imperial-fluid-ounce").val(parseFloat($("#imperial-pint").val(), 10) * 20);
        $("#imperial-tablespoon").val(parseFloat($("#imperial-pint").val(), 10) * 32);
        $("#imperial-teaspoon").val(parseFloat($("#imperial-pint").val(), 10) * 96);
        $("#liter").val(parseFloat($("#imperial-pint").val(), 10) * 0.568261);
        $("#milliliter").val(parseFloat($("#imperial-pint").val(), 10) * 568.261);
        $("#cubic-meter").val(parseFloat($("#imperial-pint").val(), 10) * 0.000568261);
    });
    $('#imperial-cup').keyup(function() { 
        $("#us-liquid-gallon").val(parseFloat($("#imperial-cup").val(), 10) * 0.0750594);
        $("#us-liquid-quart").val(parseFloat($("#imperial-cup").val(), 10) * 0.300237);
        $("#us-liquid-pint").val(parseFloat($("#imperial-cup").val(), 10) * 0.600475);
        $("#us-legal-cup").val(parseFloat($("#imperial-cup").val(), 10) * 1.18388);
        $("#us-fluid-ounce").val(parseFloat($("#imperial-cup").val(), 10) * 9.6076);
        $("#us-tablespoon").val(parseFloat($("#imperial-cup").val(), 10) * 19.2152);
        $("#us-teaspoon").val(parseFloat($("#imperial-cup").val(), 10) * 57.6456);
        $("#cubic-foot").val(parseFloat($("#imperial-cup").val(), 10) * 0.010034);
        $("#cubic-inch").val(parseFloat($("#imperial-cup").val(), 10) * 17.3387);
        $("#imperial-gallon").val(parseFloat($("#imperial-cup").val(), 10) * 0.0625);
        $("#imperial-quart").val(parseFloat($("#imperial-cup").val(), 10) * 0.25);
        $("#imperial-pint").val(parseFloat($("#imperial-cup").val(), 10) * 0.5);
        $("#imperial-fluid-ounce").val(parseFloat($("#imperial-cup").val(), 10) * 10);
        $("#imperial-tablespoon").val(parseFloat($("#imperial-cup").val(), 10) * 16);
        $("#imperial-teaspoon").val(parseFloat($("#imperial-cup").val(), 10) * 48);
        $("#liter").val(parseFloat($("#imperial-cup").val(), 10) * 0.284131);
        $("#milliliter").val(parseFloat($("#imperial-cup").val(), 10) * 284.131);
        $("#cubic-meter").val(parseFloat($("#imperial-cup").val(), 10) * 0.000284131);
    });
    $('#imperial-fluid-ounce').keyup(function() { 
        $("#us-liquid-gallon").val(parseFloat($("#imperial-fluid-ounce").val(), 10) * 0.00750594);
        $("#us-liquid-quart").val(parseFloat($("#imperial-fluid-ounce").val(), 10) * 0.0300237);
        $("#us-liquid-pint").val(parseFloat($("#imperial-fluid-ounce").val(), 10) * 0.0600475);
        $("#us-legal-cup").val(parseFloat($("#imperial-fluid-ounce").val(), 10) * 0.118388);
        $("#us-fluid-ounce").val(parseFloat($("#imperial-fluid-ounce").val(), 10) * 0.96076);
        $("#us-tablespoon").val(parseFloat($("#imperial-fluid-ounce").val(), 10) * 1.92152);
        $("#us-teaspoon").val(parseFloat($("#imperial-fluid-ounce").val(), 10) * 5.76456);
        $("#cubic-foot").val(parseFloat($("#imperial-fluid-ounce").val(), 10) * 0.0010034);
        $("#cubic-inch").val(parseFloat($("#imperial-fluid-ounce").val(), 10) * 1.73387);
        $("#imperial-gallon").val(parseFloat($("#imperial-fluid-ounce").val(), 10) * 0.00625);
        $("#imperial-quart").val(parseFloat($("#imperial-fluid-ounce").val(), 10) * 0.025);
        $("#imperial-pint").val(parseFloat($("#imperial-fluid-ounce").val(), 10) * 0.05);
        $("#imperial-cup").val(parseFloat($("#imperial-fluid-ounce").val(), 10) * 0.1);
        $("#imperial-tablespoon").val(parseFloat($("#imperial-fluid-ounce").val(), 10) * 1.6);
        $("#imperial-teaspoon").val(parseFloat($("#imperial-cfluid-ounce").val(), 10) * 4.8);
        $("#liter").val(parseFloat($("#imperial-fluid-ounce").val(), 10) * 0.0284131);
        $("#milliliter").val(parseFloat($("#imperial-fluid-ounce").val(), 10) * 28.4131);
        $("#cubic-meter").val(parseFloat($("#imperial-fluid-ounce").val(), 10) * 2.8413 / Math.pow(10,5));
    });
    $('#imperial-tablespoon').keyup(function() { 
        $("#us-liquid-gallon").val(parseFloat($("#imperial-tablespoon").val(), 10) * 0.00469121);
        $("#us-liquid-quart").val(parseFloat($("#imperial-tablespoon").val(), 10) * 0.0187649);
        $("#us-liquid-pint").val(parseFloat($("#imperial-tablespoon").val(), 10) * 0.0375297);
        $("#us-legal-cup").val(parseFloat($("#imperial-tablespoon").val(), 10) * 0.0739924);
        $("#us-fluid-ounce").val(parseFloat($("#imperial-tablespoon").val(), 10) * 0.600475);
        $("#us-tablespoon").val(parseFloat($("#imperial-tablespoon").val(), 10) * 1.20095);
        $("#us-teaspoon").val(parseFloat($("#imperial-tablespoon").val(), 10) * 3.60285);
        $("#cubic-foot").val(parseFloat($("#imperial-tablespoon").val(), 10) * 0.000627124);
        $("#cubic-inch").val(parseFloat($("#imperial-tablespoon").val(), 10) * 1.08367);
        $("#imperial-gallon").val(parseFloat($("#imperial-tablespoon").val(), 10) * 0.00390625);
        $("#imperial-quart").val(parseFloat($("#imperial-tablespoon").val(), 10) * 0.015625);
        $("#imperial-pint").val(parseFloat($("#imperial-tablespoon").val(), 10) * 0.03125);
        $("#imperial-cup").val(parseFloat($("#imperial-tablespoon").val(), 10) * 0.0625);
        $("#imperial-fluid-ounce").val(parseFloat($("#imperial-tablespoon").val(), 10) * 0.625);
        $("#imperial-teaspoon").val(parseFloat($("#imperial-ctablespoon").val(), 10) * 3);
        $("#liter").val(parseFloat($("#imperial-tablespoon").val(), 10) * 0.0177582);
        $("#milliliter").val(parseFloat($("#imperial-tablespoon").val(), 10) * 17.7582);
        $("#cubic-meter").val(parseFloat($("#imperial-tablespoon").val(), 10) * 1.7758 / Math.pow(10,5));
    });
    $('#imperial-teaspoon').keyup(function() { 
        $("#us-liquid-gallon").val(parseFloat($("#imperial-teaspoon").val(), 10) * 0.00156374);
        $("#us-liquid-quart").val(parseFloat($("#imperial-teaspoon").val(), 10) * 0.00625495);
        $("#us-liquid-pint").val(parseFloat($("#imperial-teaspoon").val(), 10) * 0.0125099);
        $("#us-legal-cup").val(parseFloat($("#imperial-teaspoon").val(), 10) * 0.0246641);
        $("#us-fluid-ounce").val(parseFloat($("#imperial-teaspoon").val(), 10) * 0.200158);
        $("#us-tablespoon").val(parseFloat($("#imperial-teaspoon").val(), 10) * 0.400317);
        $("#us-teaspoon").val(parseFloat($("#imperial-teaspoon").val(), 10) * 1.20095);
        $("#cubic-foot").val(parseFloat($("#imperial-teaspoon").val(), 10) * 0.000209041);
        $("#cubic-inch").val(parseFloat($("#imperial-teaspoon").val(), 10) * 0.361223);
        $("#imperial-gallon").val(parseFloat($("#imperial-teaspoon").val(), 10) * 0.00130208);
        $("#imperial-quart").val(parseFloat($("#imperial-teaspoon").val(), 10) * 0.00520834);
        $("#imperial-pint").val(parseFloat($("#imperial-teaspoon").val(), 10) * 0.0104167);
        $("#imperial-cup").val(parseFloat($("#imperial-teaspoon").val(), 10) * 0.0208333);
        $("#imperial-fluid-ounce").val(parseFloat($("#imperial-teaspoon").val(), 10) * 0.208333);
        $("#imperial-tablespoon").val(parseFloat($("#imperial-teaspoon").val(), 10) * 0.333333);
        $("#liter").val(parseFloat($("#imperial-teaspoon").val(), 10) * 0.00591939);
        $("#milliliter").val(parseFloat($("#imperial-teaspoon").val(), 10) * 5.91939);
        $("#cubic-meter").val(parseFloat($("#imperial-teaspoon").val(), 10) * 5.9194 / Math.pow(10,6));
    });
    $('#liter').keyup(function() { 
        $("#us-liquid-gallon").val(parseFloat($("#liter").val(), 10) * 0.264172);
        $("#us-liquid-quart").val(parseFloat($("#liter").val(), 10) * 1.05669);
        $("#us-liquid-pint").val(parseFloat($("#liter").val(), 10) * 2.11338);
        $("#us-legal-cup").val(parseFloat($("#liter").val(), 10) * 4.16667);
        $("#us-fluid-ounce").val(parseFloat($("#liter").val(), 10) * 33.814);
        $("#us-tablespoon").val(parseFloat($("#liter").val(), 10) * 67.628);
        $("#us-teaspoon").val(parseFloat($("#liter").val(), 10) * 202.884);
        $("#cubic-foot").val(parseFloat($("#liter").val(), 10) * 0.0353147);
        $("#cubic-inch").val(parseFloat($("#liter").val(), 10) * 61.0237);
        $("#imperial-gallon").val(parseFloat($("#liter").val(), 10) * 0.219969);
        $("#imperial-quart").val(parseFloat($("#liter").val(), 10) * 0.879877);
        $("#imperial-pint").val(parseFloat($("#liter").val(), 10) * 1.75975);
        $("#imperial-cup").val(parseFloat($("#liter").val(), 10) * 3.51951);
        $("#imperial-fluid-ounce").val(parseFloat($("#liter").val(), 10) * 35.1951);
        $("#imperial-tablespoon").val(parseFloat($("#liter").val(), 10) * 56.3121);
        $("#imperial-teaspoon").val(parseFloat($("#liter").val(), 10) * 168.936);
        $("#milliliter").val(parseFloat($("#liter").val(), 10) * 1000);
        $("#cubic-meter").val(parseFloat($("#liter").val(), 10) * 0.001);
    });
    $('#milliliter').keyup(function() { 
        $("#us-liquid-gallon").val(parseFloat($("#milliliter").val(), 10) * 0.000264172);
        $("#us-liquid-quart").val(parseFloat($("#milliliter").val(), 10) * 0.00105669);
        $("#us-liquid-pint").val(parseFloat($("#milliliter").val(), 10) * 0.00211338);
        $("#us-legal-cup").val(parseFloat($("#milliliter").val(), 10) * 0.00416667);
        $("#us-fluid-ounce").val(parseFloat($("#milliliter").val(), 10) * 0.033814);
        $("#us-tablespoon").val(parseFloat($("#milliliter").val(), 10) * 0.067628);
        $("#us-teaspoon").val(parseFloat($("#milliliter").val(), 10) * 0.202884);
        $("#cubic-foot").val(parseFloat($("#milliliter").val(), 10) * 3.5315 / Math.pow(10,5));
        $("#cubic-inch").val(parseFloat($("#milliliter").val(), 10) * 0.0610237);
        $("#imperial-gallon").val(parseFloat($("#milliliter").val(), 10) * 0.000219969);
        $("#imperial-quart").val(parseFloat($("#milliliter").val(), 10) * 0.000879877);
        $("#imperial-pint").val(parseFloat($("#milliliter").val(), 10) * 0.00175975);
        $("#imperial-cup").val(parseFloat($("#milliliter").val(), 10) * 0.00351951);
        $("#imperial-fluid-ounce").val(parseFloat($("#milliliter").val(), 10) * 0.0351951);
        $("#imperial-tablespoon").val(parseFloat($("#milliliter").val(), 10) * 0.0563121);
        $("#imperial-teaspoon").val(parseFloat($("#milliliter").val(), 10) * 0.168936);
        $("#liter").val(parseFloat($("#milliliter").val(), 10) * 0.001);
        $("#cubic-meter").val(parseFloat($("#milliliter").val(), 10) * 1 / Math.pow(10,6));
    });
    $('#cubic-meter').keyup(function() { 
        $("#us-liquid-gallon").val(parseFloat($("#cubic-meter").val(), 10) * 0.000264172);
        $("#us-liquid-quart").val(parseFloat($("#cubic-meter").val(), 10) * 0.00105669);
        $("#us-liquid-pint").val(parseFloat($("#cubic-meter").val(), 10) * 0.00211338);
        $("#us-legal-cup").val(parseFloat($("#cubic-meter").val(), 10) * 0.00416667);
        $("#us-fluid-ounce").val(parseFloat($("#cubic-meter").val(), 10) * 0.033814);
        $("#us-tablespoon").val(parseFloat($("#cubic-meter").val(), 10) * 0.067628);
        $("#us-teaspoon").val(parseFloat($("#cubic-meter").val(), 10) * 0.202884);
        $("#cubic-foot").val(parseFloat($("#cubic-meter").val(), 10) * 3.5315 / Math.pow(10,5));
        $("#cubic-inch").val(parseFloat($("#cubic-meter").val(), 10) * 0.0610237);
        $("#imperial-gallon").val(parseFloat($("#mcubic-meter").val(), 10) * 0.000219969);
        $("#imperial-quart").val(parseFloat($("#cubic-meter").val(), 10) * 0.000879877);
        $("#imperial-pint").val(parseFloat($("#cubic-meter").val(), 10) * 0.00175975);
        $("#imperial-cup").val(parseFloat($("#cubic-meter").val(), 10) * 0.00351951);
        $("#imperial-fluid-ounce").val(parseFloat($("#cubic-meter").val(), 10) * 0.0351951);
        $("#imperial-tablespoon").val(parseFloat($("#cubic-meter").val(), 10) * 0.0563121);
        $("#imperial-teaspoon").val(parseFloat($("#cubic-meter").val(), 10) * 0.168936);
        $("#liter").val(parseFloat($("#cubic-meter").val(), 10) * 0.001);
        $("#milliliter").val(parseFloat($("#cubic-meter").val(), 10) * 1 / Math.pow(10,6));
    });
};
$(document).ready(volume);

var speed = function() {

};
$(document).ready(speed);

var time = function() {

};
$(document).ready(time);

var pressure = function() {

};
$(document).ready(pressure);

var energy = function() {

};
$(document).ready(energy);

var digital_storage = function() {

};
$(document).ready(digital_storage);

var frequency = function() {

};
$(document).ready(frequency);

var fuel_economy = function() {
    $('#us-miles-gallon').keyup(function() { 
        $("#imperial-miles-gallon").val(parseFloat($("#us-miles-gallon").val(), 10) * 1.20095);
        $("#kilometers-liter").val(parseFloat($("#us-miles-gallon").val(), 10) * 0.425144);
        $("#liter-100-kilometers").val(parseFloat($("#us-miles-gallon").val(), 10) * 235.215);
    });  
    $("#imperial-miles-gallon").keyup(function() {
        $("#us-miles-gallon").val(parseFloat($("#imperial-miles-gallon").val(), 10) * 0.832674);
        $("#kilometers-liter").val(parseFloat($("#imperial-miles-gallon").val(), 10) * 0.354006);
        $("#liter-100-kilometers").val(parseFloat($("#imperial-miles-gallon").val(), 10) * 282.481);
    });
    $('#kilometers-liter').keyup(function() { 
        $("#us-miles-gallon").val(parseFloat($("#kilometers-liter").val(), 10) * 2.35215);
        $("#imperial-miles-gallon").val(parseFloat($("#kilometers-liter").val(), 10) * 2.82481);
        $("#liter-100-kilometers").val(parseFloat($("#kilometers-liter").val(), 10) * 100);
    });
    $("#liter-100-kilometers").keyup(function() {
        $("#us-miles-gallon").val(parseFloat($("#liter-100-kilometers").val(), 10) * 235.215);
        $("#imperial-miles-gallon").val(parseFloat($("#liter-100-kilometers").val(), 10) * 282.481);
        $("#kilometers-liter").val(parseFloat($("#liter-100-kilometers").val(), 10) * 100);
    });
};
$(document).ready(fuel_economy);

var plane_angle = function() {

};
$(document).ready(plane_angle);

var data_transfer_rate = function() {

};
$(document).ready(data_transfer_rate);