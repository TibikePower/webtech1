$(function (){
    $('form').on('submit', function (submit) {
        submit.preventDefault();
        var dArr=$('form').serializeArray();
        var d = dArr[0].value;
        console.log(d);
        $.ajax({
            url: 'https://webtechcars.herokuapp.com/api/manufacturers/' + d,
            type: 'DELETE',
            success: function (data) {
                alert("Király vagy, kitörölted: "+d);
            }
        });
    })
});