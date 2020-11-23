$(document).ready(function () {
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function (data) {
        var select = $('<select name="manufacturer" required="required"></select>');
        $.each(data, function (key, value) {
            var option = $('<option value="' + value.name+ '">' + value.name + '</option>');
            select.append(option);
        });
        $(".select").append(select);
    });
});

$(function (){
    $('form').on('submit', function (submit) {
        submit.preventDefault();
        var carArr=$('form').serializeArray();
        var car = {
            _id:null,
            name: carArr[1].value,
            consumption: carArr[2].value+"l/100km",
            color: carArr[3].value,
            manufacturer: carArr[0].value,
            avaiable: parseInt(carArr[5].value),
            year: parseInt(carArr[4].value),
            horsepower: parseInt(carArr[6].value)
        };
        $.ajax({
            type:'post',
            url: 'https://webtechcars.herokuapp.com/api/cars',
            data: JSON.stringify(car),
            dataType: "json",
            contentType: "application/json",
            success: function () {
                window.alert("Kérés elküldve.")
            },
            error: function () {
                window.alert("Gatya :(");
            }
        })
    })
});