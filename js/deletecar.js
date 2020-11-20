$(function (){
    $('form').on('submit', function (submit) {
        submit.preventDefault();
        var dArr=$('form').serializeArray();
        var d = dArr[0].value;
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
    })
});