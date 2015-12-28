var basic = function() {
    $("input").val("0");

    $("#reset").click(function() {
      $("input").val("0");
    }); 
};
$(document).ready(basic);

var temperature = function() {
    $("#fahrenheit").keyup(function() {
        $("#celsius").val(Math.round(parseInt($("#fahrenheit").val() - 32, 10) * (5/9)), 9);
        $("#kelvin").val(parseInt($("#fahrenheit").val() - 32, 10) / 1.8000 + 273.15);
    });
    $("#celsius").keyup(function() {
        $("#fahrenheit").val(parseInt($("#celsius").val(), 10) * 9/5 + 32);
        $("#kelvin").val(parseInt($("#celsius").val(), 10) + 273.15);
    });
    $("#kelvin").keyup(function() {
        $("#fahrenheit").val(parseInt($("#kelvin").val(), 10) * 9/5 - 459.67);
        $("#celsius").val(parseInt($("#kelvin").val(), 10) - 273.15);
    });
};
$(document).ready(temperature);

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

var mass = function() {
    $('#imperial_ton').keyup(function() { 
        $("#us_ton").val(parseInt($("#imperial_ton").val(), 10) * 1.12);
        $("#stone").val(parseInt($("#imperial_ton").val(), 10) * 160);
        $("#pound").val(parseInt($("#imperial_ton").val(), 10) * 2240);
        $("#ounce").val(parseInt($("#imperial_ton").val(), 10) * 35840);
        $("#metric_ton").val(parseInt($("#imperial_ton").val(), 10) * 1.01605);
        $("#kilogram").val(parseInt($("#imperial_ton").val(), 10) * 1016.05);
        $("#gram").val(parseInt($("#imperial_ton").val(), 10) * 1.016 * Math.pow(10, 6));
        $("#milligram").val(parseInt($("#imperial_ton").val(), 10) * 1.016 * Math.pow(10, 9));
        $("#microgram").val(parseInt($("#imperial_ton").val(), 10) * 1.016 * Math.pow(10, 12));
    });
    $('#us_ton').keyup(function() { 
        $("#imperial_ton").val(parseInt($("#us_ton").val(), 10) * 0.892857);
        $("#stone").val(parseInt($("#us_ton").val(), 10) * 142.857);
        $("#pound").val(parseInt($("#us_ton").val(), 10) * 2000);
        $("#ounce").val(parseInt($("#us_ton").val(), 10) * 32000);
        $("#metric_ton").val(parseInt($("#us_ton").val(), 10) * 0.907185);
        $("#kilogram").val(parseInt($("#us_ton").val(), 10) * 907.185);
        $("#gram").val(parseInt($("#us_ton").val(), 10) * 907185);
        $("#milligram").val(parseInt($("#us_ton").val(), 10) * 9.072 * Math.pow(10, 8));
        $("#microgram").val(parseInt($("#us_ton").val(), 10) * 9.072 * Math.pow(10, 11));
    });
    $('#stone').keyup(function() { 
        $("#imperial_ton").val(parseInt($("#stone").val(), 10) * 0.00625);
        $("#us_ton").val(parseInt($("#stone").val(), 10) * 0.007);
        $("#pound").val(parseInt($("#stone").val(), 10) * 14);
        $("#ounce").val(parseInt($("#stone").val(), 10) * 224);
        $("#metric_ton").val(parseInt($("#stone").val(), 10) * 0.00635029);
        $("#kilogram").val(parseInt($("#stone").val(), 10) * 6.35029);
        $("#gram").val(parseInt($("#stone").val(), 10) * 6350.29);
        $("#milligram").val(parseInt($("#stone").val(), 10) * 6.35 * Math.pow(10, 6));
        $("#microgram").val(parseInt($("#stone").val(), 10) * 6.35 * Math.pow(10, 9));
    });
    $('#pound').keyup(function() { 
        $("#imperial_ton").val(parseInt($("#pound").val(), 10) * 0.000446429);
        $("#us_ton").val(parseInt($("#pound").val(), 10) * 0.0005);
        $("#stone").val(parseInt($("#pound").val(), 10) * 0.0714286);
        $("#ounce").val(parseInt($("#pound").val(), 10) * 16);
        $("#metric_ton").val(parseInt($("#pound").val(), 10) * 0.000453592);
        $("#kilogram").val(parseInt($("#pound").val(), 10) * 0.453592);
        $("#gram").val(parseInt($("#pound").val(), 10) * 453.592);
        $("#milligram").val(parseInt($("#pound").val(), 10) * 453592);
        $("#microgram").val(parseInt($("#pound").val(), 10) * 4.536 * Math.pow(10, 8));
    });
    $('#ounce').keyup(function() { 
        $("#imperial_ton").val(parseInt($("#ounce").val(), 10) * 2.7902 / Math.pow(10, 5));
        $("#us_ton").val(parseInt($("#ounce").val(), 10) * 3.125 / Math.pow(10, 5));
        $("#stone").val(parseInt($("#ounce").val(), 10) * 0.00446429);
        $("#pound").val(parseInt($("#ounce").val(), 10) * 0.0625);
        $("#metric_ton").val(parseInt($("#ounce").val(), 10) * 2.835 / Math.pow(10, 5));
        $("#kilogram").val(parseInt($("#ounce").val(), 10) * 0.0283495);
        $("#gram").val(parseInt($("#ounce").val(), 10) * 28.3495);
        $("#milligram").val(parseInt($("#ounce").val(), 10) * 28349.5);
        $("#microgram").val(parseInt($("#ounce").val(), 10) * 2.835 * Math.pow(10, 7));
    });
    $('#metric_ton').keyup(function() { 
        $("#imperial_ton").val(parseInt($("#metric_ton").val(), 10) * 0.984207);
        $("#us_ton").val(parseInt($("#metric_ton").val(), 10) * 1.10231);
        $("#stone").val(parseInt($("#metric_ton").val(), 10) * 157.473);
        $("#pound").val(parseInt($("#metric_ton").val(), 10) * 2204.62);
        $("#ounce").val(parseInt($("#metric_ton").val(), 10) * 35274);
        $("#kilogram").val(parseInt($("#metric_ton").val(), 10) * 1000);
        $("#gram").val(parseInt($("#metric_ton").val(), 10) * 1 * Math.pow(10, 6));
        $("#milligram").val(parseInt($("#metric_ton").val(), 10) * 1 * Math.pow(10, 9));
        $("#microgram").val(parseInt($("#metric_ton").val(), 10) * 1 * Math.pow(10, 12));
    });
    $('#kilogram').keyup(function() { 
        $("#imperial_ton").val(parseInt($("#kilogram").val(), 10) * 0.000984207);
        $("#us_ton").val(parseInt($("#kilogram").val(), 10) * 0.00110231);
        $("#stone").val(parseInt($("#kilogram").val(), 10) * 0.157473);
        $("#pound").val(parseInt($("#kilogram").val(), 10) * 2.20462);
        $("#ounce").val(parseInt($("#kilogram").val(), 10) * 35.274);
        $("#metric_ton").val(parseInt($("#kilogram").val(), 10) * 0.001);
        $("#gram").val(parseInt($("#kilogram").val(), 10) * 1000);
        $("#milligram").val(parseInt($("#kilogram").val(), 10) * 1 * Math.pow(10, 6));
        $("#microgram").val(parseInt($("#kilogram").val(), 10) * 1 * Math.pow(10, 9));
    });
    $('#gram').keyup(function() { 
        $("#imperial_ton").val(parseInt($("#gram").val(), 10) * 9.8421 / Math.pow(10, 7));
        $("#us_ton").val(parseInt($("#gram").val(), 10) * 1.1023 / Math.pow(10, 6));
        $("#stone").val(parseInt($("#gram").val(), 10) * 0.000157473);
        $("#pound").val(parseInt($("#gram").val(), 10) * 0.00220462);
        $("#ounce").val(parseInt($("#gram").val(), 10) * 0.035274);
        $("#metric_ton").val(parseInt($("#gram").val(), 10) * 1 / Math.pow(10, 6));
        $("#kilogram").val(parseInt($("#gram").val(), 10) * 0.001);
        $("#milligram").val(parseInt($("#gram").val(), 10) * 1000);
        $("#microgram").val(parseInt($("#gram").val(), 10) * 1.609 * Math.pow(10, 6));
    });
    $('#milligram').keyup(function() { 
        $("#imperial_ton").val(parseInt($("#milligram").val(), 10) * 9.8421 / Math.pow(10, 10));
        $("#us_ton").val(parseInt($("#milligram").val(), 10) * 1.1023 / Math.pow(10, 9));
        $("#stone").val(parseInt($("#milligram").val(), 10) * 1.5747 / Math.pow(10, 7));
        $("#pound").val(parseInt($("#milligram").val(), 10) * 2.2046 / Math.pow(10, 6));
        $("#ounce").val(parseInt($("#milligram").val(), 10) * 3.5274 / Math.pow(10, 5));
        $("#metric_ton").val(parseInt($("#milligram").val(), 10) * 1 / Math.pow(10, 9));
        $("#kilogram").val(parseInt($("#milligram").val(), 10) * 1 / Math.pow(10, 6));
        $("#gram").val(parseInt($("#milligram").val(), 10) * 0.001);
        $("#microgram").val(parseInt($("#milligram").val(), 10) * 1000);
    });
    $('#microgram').keyup(function() { 
        $("#imperial_ton").val(parseInt($("#microgram").val(), 10) * 9.8421 / Math.pow(10, 13));
        $("#us_ton").val(parseInt($("#microgram").val(), 10) * 1.1023 / Math.pow(10, 12));
        $("#stone").val(parseInt($("#microgram").val(), 10) * 1.5747 / Math.pow(10, 10));
        $("#pound").val(parseInt($("#microgram").val(), 10) * 2.2046 / Math.pow(10, 9));
        $("#ounce").val(parseInt($("#microgram").val(), 10) * 3.5274 / Math.pow(10, 8));
        $("#metric_ton").val(parseInt($("#microgram").val(), 10) * 1 / Math.pow(10, 12));
        $("#kilogram").val(parseInt($("#microgram").val(), 10) * 1 / Math.pow(10, 9));
        $("#gram").val(parseInt($("#microgram").val(), 10) * 1 * Math.pow(10, 6));
        $("#milligram").val(parseInt($("#microgram").val(), 10) * 0.001);
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
        $("#immi-g").val(parseInt($("#usmi-g").val(), 10) * 1.20095);
        $("#km-l").val(parseInt($("#usmi-g").val(), 10) * 0.425144);
        $("#l-100km").val(parseInt($("#usmi-g").val(), 10) * 235.215);
    });  
    $("#immi-g").keyup(function() {
        $("#usmi-g").val(parseInt($("#immi-g").val(), 10) * 0.832674);
        $("#km-l").val(parseInt($("#immi-g").val(), 10) * 0.354006);
        $("#l-100km").val(parseInt($("#immi-g").val(), 10) * 282.481);
    });
    $('#km-l').keyup(function() { 
        $("#usmi-g").val(parseInt($("#km-l").val(), 10) * 2.35215);
        $("#immi-g").val(parseInt($("#km-l").val(), 10) * 2.82481);
        $("#l-100km").val(parseInt($("#km-l").val(), 10) * 100);
    });
    $("#l-100km").keyup(function() {
        $("#usmi-g").val(parseInt($("#l-100km").val(), 10) * 235.215);
        $("#immi-g").val(parseInt($("#l-100km").val(), 10) * 282.481);
        $("#km-l").val(parseInt($("#l-100km").val(), 10) * 100);
    });
};
$(document).ready(fuel_economy);

var plane_angle = function() {

};
$(document).ready(plane_angle);

var data_transfer_rate = function() {

};
$(document).ready(data_transfer_rate);