var basic = function() {
    $("input").val("0");

    $("#reset").click(function() {
      $("input").val("0");
    }); 
};
$(document).ready(basic);

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
    //ENGLISH UNITS
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
    //SI UNITS
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

var volume = function() {

};
$(document).ready(volume);

var area = function() {

};
$(document).ready(area);

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
    $('#usmi-g').keyup(function() { 
        $("#immi-g").val(parseFloat($("#usmi-g").val(), 10) * 1.20095);
        $("#km-l").val(parseFloat($("#usmi-g").val(), 10) * 0.425144);
        $("#l-100km").val(parseFloat($("#usmi-g").val(), 10) * 235.215);
    });  
    $("#immi-g").keyup(function() {
        $("#usmi-g").val(parseFloat($("#immi-g").val(), 10) * 0.832674);
        $("#km-l").val(parseFloat($("#immi-g").val(), 10) * 0.354006);
        $("#l-100km").val(parseFloat($("#immi-g").val(), 10) * 282.481);
    });
    $('#km-l').keyup(function() { 
        $("#usmi-g").val(parseFloat($("#km-l").val(), 10) * 2.35215);
        $("#immi-g").val(parseFloat($("#km-l").val(), 10) * 2.82481);
        $("#l-100km").val(parseFloat($("#km-l").val(), 10) * 100);
    });
    $("#l-100km").keyup(function() {
        $("#usmi-g").val(parseFloat($("#l-100km").val(), 10) * 235.215);
        $("#immi-g").val(parseFloat($("#l-100km").val(), 10) * 282.481);
        $("#km-l").val(parseFloat($("#l-100km").val(), 10) * 100);
    });
};
$(document).ready(fuel_economy);

var plane_angle = function() {

};
$(document).ready(plane_angle);

var data_transfer_rate = function() {

};
$(document).ready(data_transfer_rate);