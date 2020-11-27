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
            _id:carArr[0].value,
            name: carArr[2].value,
            consumption: carArr[3].value+"l/100km",
            color: carArr[4].value,
            manufacturer: carArr[1].value,
            avaiable: parseInt(carArr[6].value),
            year: parseInt(carArr[5].value),
            horsepower: parseInt(carArr[7].value)
        };
        var d = carArr[0].value;
        console.log(d);
        $.ajax({
            url: 'https://webtechcars.herokuapp.com/api/cars/' + d,
            type: 'DELETE',
            success: function () {
                window.alert("Kérés elküldve.")
            },
            error: function () {
                window.alert("Gatya :(");
            }
        });
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