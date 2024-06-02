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

//4
$(document).ready(function() {
    $("#hide-image").click(function() {
        setTimeout(function() {
            $("#image4").hide();
        }, 3000); 
    });

    $("#reset-image").click(function() {
        $("#image4").show(); 
    });
});

//5
$(document).ready(function() {
    $("#toggle-image").click(function() {
        $("#image5").fadeToggle(2000); 
    });

    $("#reset-toggle").click(function() {
        $("#image5").fadeIn(0); 
    });
});
