$(document).ready(function() {
    $(".vote-up").submit(function(e) {
        e.preventDefault();

        var matchupId = $(this).data("id");
        $.ajax({
            type: "PUT",
            success: function(data) {
            console.log("voted up!");
            },
            error: function(err) {
            console.log(err.messsage);
            }
        });
    });
});