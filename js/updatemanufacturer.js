$(function (){
    $('form').on('submit', function (submit) {
        submit.preventDefault();
        var mArr=$('form').serializeArray();
        var m = {
            _id:mArr[0].value,
            name: mArr[1].value,
            country: mArr[2].value,
            founded: mArr[3].value
        };
        var d = mArr[0].value;
        console.log(d);
        $.ajax({
            url: 'https://webtechcars.herokuapp.com/api/manufacturers/' + d,
            type: 'DELETE'
        });
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