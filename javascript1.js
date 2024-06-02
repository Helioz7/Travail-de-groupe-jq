//1
$(document).ready(function() {
    $("#show-btn").click(function() {
        $("#hidden-paragraph").show();
    });

    $("#reset-btn").click(function() {
        $("#hidden-paragraph").hide();
    });
});
//2
$(document).ready(function() {
    $("#montre").click(function() {
        $("#visible").toggle();
    });

    $("#reset").click(function() {
        $("#visible").show();
    });
});
//3
$(document).ready(function() {
    $('#paragraph').click(function() {
        $('#toggle').toggle();
    });
});