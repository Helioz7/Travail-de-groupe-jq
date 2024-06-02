
// cache le paragraphe
$(document).ready(function() {
    $('#show').click(function() {
        $('#cacher').show();
    });
});


// Affichage du paragraphe
$(document).ready(function() {
    $("#montre").click(function() {
        $("#visible").toggle();
    });

    $("#reset").click(function() {
        $("#cacher").hide();  
        $("#visible").show(); 
    });
});
 
$(document).ready(function() {
    $('#paragraph').click(function() {
        $('#toggle').toggle();
    });
});
