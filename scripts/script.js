var Main = function() {

    $( "#p1start" ).keyup(function() {
        var start = $( this ).val();
    $( "#goalp1 p" ).text( start / 2 );
    });
    
    $( "#p2start" ).keyup(function() {
        var start = $( this ).val();
    $( "#goalp2 p" ).text( start / 2 );
    });

    // Got the margin math working haha
    // But it only works one time. after pressing the submit button the margin stops working, try it out.


    $("#p1finish").keyup(function() {
        var finish = $(this).val();
        var goal = $("#p1start").val()/2;
    $("#p1diff p").text(Math.abs(finish - goal));
    
     if ($("#p1diff p").val() < $("#p2diff p").val()) {
        $("#p2diff").removeClass("winner");
        $("#p1diff").addClass("winner")}
        
        else if ($("#p1diff p").val() > $("#p2diff p").val()) {
        $("#p1diff").removeClass("winner");
        $("#p2diff").addClass("winner")}
        
        else {
            $("#p1diff").removeClass("winner");
            $("#p2diff").removeClass("winner");
            // $("#p1diff p").text("tie");
            // $("#p2diff p").text("tie");
        }
    
    
    
    });
    
    $("#p2finish").keyup(function() {
        var finish = $(this).val();
        var goal = $("#p2start").val()/2;
    $("#p2diff p").text(Math.abs(finish - goal));
    
        if ($("#p1diff p").val() < $("#p2diff p").val()) {
        $("#p2diff").removeClass("winner");
        $("#p1diff").addClass("winner")}
        
        else if ($("#p1diff p").val() > $("#p2diff p").val()) {
        $("#p1diff").removeClass("winner");
        $("#p2diff").addClass("winner")}
        
        else {
            $("#p1diff").removeClass("winner");
            $("#p2diff").removeClass("winner");
            // $("#p1diff p").text("tie");
            // $("#p2diff p").text("tie");
        }
    
    
    });
    
    
    
    
    
    
    
    // $("#p1finish").keyup(function() {
    //     if ($(document.getElementById("p1diff")).val() < $(document.getElementById("p2diff")).val()) {
    //     $("#p2diff").removeClass("winner");
    //     $("#p1diff").addClass("winner")}
        
    //     else if ($(document.getElementById("p1diff")).val() > $(document.getElementById("p2diff")).val()) {
    //     $("#p1diff").removeClass("winner");
    //     $("#p2diff").addClass("winner")}
        
    //     else {
    //         $("#p1diff").removeClass("winner");
    //         $("#p2diff").removeClass("winner");
    //         $("#p1diff p").text("tie");
    //         $("#p2diff p").text("tie");
    //     }
    // });
        
    // $("#p2finish").keyup(function() {
    //     if ($(document.getElementById("p1diff")).val() < $(document.getElementById("p2diff")).val()) {
    //     $("#p2diff").removeClass("winner");
    //     $("#p1diff").addClass("winner")}
        
    //     else if ($(document.getElementById("p1diff")).val() > $(document.getElementById("p2diff")).val()) {
    //     $("#p1diff").removeClass("winner");
    //     $("#p2diff").addClass("winner")}
        
    //     else {
    //         $("#p1diff").removeClass("winner");
    //         $("#p2diff").removeClass("winner");
    //         $("#p1diff p").text("tie");
    //         $("#p2diff p").text("tie");
    //     }
    // });  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // $(document).keyup(function() {
    //     if (document.getElementById("p2diff").value > document.getElementById("p1diff").value) {
    //     $("#p1diff p").removeClass("winner");
    //     $("#p2diff p").addClass("winner")}
        
    //     else {
    //     $("#p2diff p").removeClass("winner");    
    //     $("#p1diff p").addClass("winner")}
    // });   

    // if (document.getElementById("p2diff").value > document.getElementById("p1diff").value) {
    //     $("#p2diff p").addClass("winner");
        
    // }
    // else {
    //     $("#p1diff p").addClass("winner");
    // }
    
    $("#nextButton").click(function(){
        var newStart1 = $("#p1finish").val();
        var newStart2 = $("#p2finish").val();
        document.getElementById("p1start").value = 0;
        document.getElementById("p1start").value = newStart1;
        document.getElementById("p2start").value = 0;
        document.getElementById("p2start").value = newStart2;
        $("#goalp1 p").text(newStart1/2);
        $("#goalp2 p").text(newStart2/2);
        document.getElementById("p1finish").value = "";
        document.getElementById("p2finish").value = "";
        // $("#p1diff").text(0);
        // $("#p2diff").text(0);
    });
};
    
$(document).ready(Main);