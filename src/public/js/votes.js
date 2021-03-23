$(document).ready(function() {
    $(".vote-up1").submit(function(e) {
        e.preventDefault();
    
        var matchupId = $(this).data("id");
        $.ajax({
            type: "PUT",
            url: "matchup/" + matchupId + "/vote-up",
            success: function(data) {
                console.log("voted up!");
            },
            error: function(err) {
                console.log(err.messsage);
            }
        });
    });
    $(".vote-up2").submit(function(e) {
        e.preventDefault();
    
        var matchupId = $(this).data("id");
        $.ajax({
            type: "PUT",
            url: "matchup/" + matchupId + "/vote-up",
            success: function(data) {
                console.log("voted up!");
            },
            error: function(err) {
                console.log(err.messsage);
            }
        });
    });
});