



$(document).ready(function(){	

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
});

