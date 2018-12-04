$(document).ready(function(){

    $("form").on("submit", function() {
        // store the value of the input with name='age'
        event.preventDefault();
        var $input = $(this).find('input');
        var input = $input.val();
        var api_key = 'at_QZxU6CyN72VXhk9G3BcM6yM2Zis01';
        var api_url = 'https://geo.ipify.org/api/v1?';
        var url = api_url + 'apiKey=' + api_key + '&ipAddress=' + input;
        console.log ("The IP entered was " +  input);

        $.get(url, function(response) {
            var result = response;
            console.log(result);
            console.log(result.location.region);
            $("#rowResult").text(input);
            $("#country").text(result.location.country);
            $("#region").text(result.location.region);
            $("#city").text(result.location.city);
            $("#lat").text(result.location.lat);
            $("#long").text(result.location.lng);
            $("#postalCode").text(result.location.postalCode);
            $("#timeZone").text(result.location.timezone);
        });
    });

})





