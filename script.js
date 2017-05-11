/*
$('#submit').click(function(){
    var name = $('#name').val();
    var url = "https://script.google.com/macros/s/AKfycbwHgYtQkeRsqOYKcmWXjojmxortf4p7Rmc9a4549IHh/dev?name=" + name + "&callback=?";
    console.log(name);
    
    var url2 = "https://script.googleusercontent.com/macros/echo?user_content_key=9yYzpg4m05eAwBfLkt8VUFxDKmaC4hqMWDyJk3tJNIKXHx-f_qnkqdSknMHoUbKIbVYAnzV7nTcLBF_a0Xa5ujdzmQ4rbcDKm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJdDL27q-LygPUcauK90AILQHTmOmasbcJ4asJMV_Sf8uBkFFZCwcYxgKJLFZkAf4HxftbZhtfQ-&lib=MFKMU4kkAaNpaBVV3hs454KIPeD3qJ2ao" + "&callback=?";
    
    $.getJSON(url, function(returnvalue){
        console.log(returnvalue);
    });
    
})
*/
$('#submit').click(
    function callGoogleScript() {

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
    for(var i in e.result){
        var obj = e.result[i];
        $('#table').append(`<tr><td>${obj.date}</td><td>${obj.description}</td><td>${obj.budget}</td><td>${obj.amount}</td><td>${obj.paid}</td></tr>`);
    }
}
