$(".boxLoading").fadeOut('slow',function(){
	$(this).remove();
});

$(function(){	

	$(".boxLoading").css("display","none");

	 // $("#div").effect("slide",500);

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

