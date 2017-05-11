$('#submit').click(
    function callGoogleScript() {
        $('#working').html('fetching data...');

        var url = "https://script.google.com/macros/s/AKfycbwHgYtQkeRsqOYKcmWXjojmxortf4p7Rmc9a4549IHh/dev?callback=ctrlq&name=";
        var name = $('#name').val();

        var request = jQuery.ajax({
            crossDomain: true,
            url: url + encodeURIComponent(name),
            method: "GET",
            dataType: "jsonp"
        });

    });

// print the returned data
function ctrlq(e) {
    $('#table').html('');
    $('#working').html('');
    
    console.log(e.result[0]);

    if (e.result[0].date === "#N/A") {
        $('#results').html('No expenses recorded this month');
    } else {
        for (var i in e.result) {
            var obj = e.result[i];
            $('#table').append(`<tr><td>${obj.date}</td><td>${obj.description}</td><td>${obj.budget}</td><td>${obj.amount}</td><td>${obj.paid}</td></tr>`);
        }
    }
}
