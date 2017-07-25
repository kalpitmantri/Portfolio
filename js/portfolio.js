$(window).on('load',function(){	

	$("#spinkitPreloader").delay(2000).fadeOut(1000);
    $(".sk-folding-cube").fadeOut(2000,function(){
    	$("*").removeClass("remove");
    });

	$(".nav-link").click(function(){
		var linkId = $(this).attr("id");
		var secId = linkId + "Section";
		$("html body").animate({
			scrollTop: $("#" + secId).offset().top
		},500);
	});

	$("#scroll").click(function(){
		$("html body").animate({
			scrollTop:0
		},700);
	});

	$("#sendButton").click(function(){
		alert("Your message has been sent");
	});

	$("#mycarousel").carousel({interval:1000});

 	$("#carousel-button").click(function(){
                
        if ($("#carousel-button").children("span").hasClass("fa-pause")) 
        {
            $("#mycarousel").carousel("pause");
            $("#carousel-button").children("span").removeClass("fa-pause");
            $("#carousel-button").children("span").addClass("fa-play");
        }

        else if ($("#carousel-button").children("span").hasClass("fa-play")) 
        {
            $("#mycarousel").carousel("cycle");
            $("#carousel-button").children("span").removeClass("fa-play");
            $("#carousel-button").children("span").addClass("fa-pause");
        }      
    });
});

