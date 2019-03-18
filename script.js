$(".boi4").hide();

$(".secretbox").hide();

$(".loadingIcon").hide();

$(".firstQuestion").hide();

$(".SecondQuestion").hide();

$(".ThirdQuestion").hide();

$(".FourthQuestion").hide();

$(".results").hide();

$(".enterButton").click(function() {
    $(".wrapper").fadeOut(300);
    $(".loadingIcon").fadeIn(1100).delay(2000).fadeOut(200);
    $(".firstQuestion").delay(3200).fadeIn(200);
});
$(".continue1").click(function() { 
    var a = $(".heroicVal").val(); 
    
    if(a === "Bowser"){
        
    $(".firstQuestion").fadeOut(300);
    $(".results").fadeIn(200);
    $(".resultText").html("Bowser (Secret Page )");  
    $(".bowser").show();
    $("body").css("background-image", "url(http://wallpapercraze.com/images/wallpapers/bowser-449694.jpeg)");  
    $("span").css("color", "white");    
    }

    else if(a === ""){}    
    else{  
    $(".firstQuestion").fadeOut(300);
    $(".SecondQuestion").delay(300);
    $(".SecondQuestion").fadeIn(200);  
    }
});

$(".continue2").click(function() {
    var b = $(".heightVal").val();
    if(b === ""){} 
    else{
    $(".SecondQuestion").fadeOut(300);
    $(".ThirdQuestion").delay(300);
    $(".ThirdQuestion").fadeIn(200);
    }
});
$(".continue3").click(function() {
    
    $(".ThirdQuestion").fadeOut(300);
    $(".FourthQuestion").delay(300);
    $(".FourthQuestion").fadeIn(200);
});

$(".continue4").click(function() {
    var a = parseInt($(".heroicVal").val());
    var b = $(".heightVal").val();
    var c = $(".genderVal").val();
    var d = $(".scaredVal").val();
    if(a > 5){
        var e = "Yes";
        }
    else{
        var e = "No";
        }
    $(".FourthQuestion").fadeOut(300);
    $(".loadingIcon").fadeIn(1000);
    $(".loadingIcon").fadeIn(100);
    $(".loadingIcon").delay(2000);
    $(".loadingIcon").fadeOut(200);
    $(".results").delay(3300);
    $(".results").fadeIn(200);
    
    if(e === "Yes" && b === "Short" && c === "Boy" && d === "No"){
        $(".results").delay(3300);
        $(".results").fadeIn(200);
        $(".resultText").html("Mario");  
        $(".mario").show();
    }
    else if(e === "No" && b === "Short" && c === "Boy" && d === "Yes"){
        $(".results").delay(3300);
        $(".results").fadeIn(200);
        $(".resultText").html("Toad");  
        $(".toad").show();
    }
    else if(e === "Yes" && b === "Short" && c === "Boy" && d === "Yes"){
        $(".results").delay(3300);
        $(".results").fadeIn(200);
        $(".resultText").html("Bowser Jr");  
        $(".jr").show();
    }
    else if(e === "No" && b === "Short" && c === "Boy" && d === "No"){
        $(".results").delay(3300);
        $(".results").fadeIn(200);
        $(".resultText").html("Wario");  
        $(".wario").show();
    }
    else if(e === "Yes" && b === "Tall" && c === "Boy" && d === "Yes"){
        $(".results").delay(3300);
        $(".results").fadeIn(200);
        $(".resultText").html("Luigi");  
        $(".luigi").show();
    }
    else if(e === "No" && b === "Tall" && c === "Boy" && d === "Yes"){
        $(".results").delay(3300);
        $(".results").fadeIn(200);
        $(".resultText").html("Waluigi");  
        $(".waluigi").show();        
    }
    else if(e === "No" && b === "Tall" && c === "Boy" && d === "No"){
        $(".results").delay(3300);
        $(".results").fadeIn(200);
        $(".resultText").html("Diddy Kong");  
        $(".diddy").show();        
    }
    else if(e === "Yes" && b === "Tall" && c === "Boy" && d === "No"){
        $(".results").delay(3300);
        $(".results").fadeIn(200);
        $(".resultText").html("Donkey Kong");  
        $(".donkey").show();
    }
    else if(e === "No" && b === "Tall" && c === "Girl" && d === "Yes"){
        $(".results").delay(3300);
        $(".results").fadeIn(200);
        $(".resultText").html("Peach");  
        $(".peach").show();
    }
    else if(e === "No" && b === "Tall" && c === "Girl" && d === "No"){
        $(".results").delay(3300);
        $(".results").fadeIn(200);
        $(".resultText").html("Daisy");  
        $(".daisy").show();
    }
    else if(e === "Yes" && b === "Tall" && c === "Girl" && d === "No"){
        $(".results").delay(3300);
        $(".results").fadeIn(200);
        $(".resultText").html("Rosalina");  
        $(".rose").show();
    }
    else if(e === "Yes" && b === "Tall" && c === "Girl" && d === "Yes"){
        $(".results").delay(3300);
        $(".results").fadeIn(200);
        $(".resultText").html("Pauline");  
        $(".pauline").show();
    }

    else if(e === "No" && b === "Short" && c === "Girl" && d === "No"){
        $(".results").delay(3300);
        $(".results").fadeIn(200);
        $(".resultText").html("Baby Daisy");  
        $(".bdaisy").show();
    }
    else if(e === "Yes" && b === "Short" && c === "Girl" && d === "Yes"){
        $(".results").delay(3300);
        $(".results").fadeIn(200);
        $(".resultText").html("Baby Peach");  
        $(".bpeach").show();
    }
    else if(e === "Yes" && b === "Short" && c === "Girl" && d === "No"){
        $(".results").delay(3300);
        $(".results").fadeIn(200);
        $(".resultText").html("Baby Rosalina");  
        $(".brosa").show();
        
    }
    else if(e === "No" && b === "Short" && c === "Girl" && d === "Yes"){
        $(".results").delay(3300);
        $(".results").fadeIn(200);
        $(".resultText").html("Toadette");  
        $(".toadette").show();
    }
    $("body").css("margin-top", "5%");
});

$(".finish").click(function() {
    $("input").val('');
    $(".resultText").html("Boi");  
    $(".boi4").hide(0);
    $(".results").fadeOut(0);
    $(".wrapper").delay(400);
    $(".wrapper").fadeIn(200);

});
$(".secret").click(function() {
    $("input").val('');
    $(".boi4").hide(0);
    $(".results").hide(0);
    $(".secretbox").delay(400);
    $(".secretbox").fadeIn(200);
    $("body").css("background", "black");
    $("span").css("color", "Black");  
});