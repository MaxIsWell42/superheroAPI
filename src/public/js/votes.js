$(document).ready(function() {
    $(".vote-up1").submit(function(e) {
        e.preventDefault();
    
        var matchupId = $(this).data("id");
        $.ajax({
            type: "PUT",
            url: "matchup/" + matchupId + "/vote-up1",
            success: function(data) {
                console.log("Voted super 1 up!");
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
            url: "matchup/" + matchupId + "/vote-up2",
            success: function(data) {
                console.log("Voted super 2 up!");
            },
            error: function(err) {
                console.log(err.messsage);
            }
        });
    });
});