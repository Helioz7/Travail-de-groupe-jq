$(document).ready(function() {
    $('#show').click(function() {
        $('#cacher').toggle();
    });
});



$(document).ready(function() {
    $("#montre").click(function() {
        $("#visible").toggle();
    });

    $("#reset").click(function() {
        $("#cacher").hide();  
        $("#visible").show(); 
    });
});