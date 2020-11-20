$(function (){
    $('form').on('submit', function (submit) {
        submit.preventDefault();
        var mArr=$('form').serializeArray();
        var m = {
            _id:null,
            name: mArr[0].value,
            country: mArr[1].value,
            founded: mArr[2].value
        };
        $.ajax({
            type:'post',
            url: 'https://webtechcars.herokuapp.com/api/manufacturers',
            data: JSON.stringify(m),
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