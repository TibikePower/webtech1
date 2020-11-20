$(document).ready(function () {
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function (data) {
        var table = $('<table id="allTable"></table>');
        table.append("<tr>" +
            "<th id='allTableth'>ID</th>" +
            "<th id='allTableth'>Name</th>" +
            "<th id='allTableth'>Country</th>" +
            "<th id='allTableth'>Founded</th>" +
            "</tr>");
        console.log(data);
        $.each(data, function (key, value) {
                var row = $('<tr></tr>');
                var idCell = $('<td id="allTabletd">' + value._id + '</td>');
                var nameCell = $('<td id="allTabletd">' + value.name + '</td>');
                var countryCell = $('<td id="allTabletd">' + value.country + '</td>');
                var foundedCell = $('<td id="allTabletd">' + value.founded + '</td>');
                row.append(idCell);
                row.append(nameCell);
                row.append(countryCell);
                row.append(foundedCell);
                table.append(row);
            });
        $(".list_container").append(table);
    });
});