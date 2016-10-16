/**
 *	Javascript Document
 *	Author : M. Wiguna Saputra
 *	Copyright (c) 2016 Rewidify
 */

$(document).ready(function(){
	$(".tx-main, .tx-sec").animate({"opacity": "1"});

	// Button to index Menu
	$(".gtButton").click(function(){
		$("html, body").animate({
			scrollTop: $("#getStarted").offset().top
		}, 600);
	});
	$(".ctButton").click(function(){
		$("html, body").animate({
			scrollTop: $("#customize").offset().top
		}, 700);
	});
	$(".egButton").click(function(){
		$("html, body").animate({
			scrollTop: $("#example").offset().top
		}, 1000);
	});

	//Button to index Submenu
	$(".grButton").click(function(){
		$("html, body").animate({
			scrollTop: $(".gridOp").offset().top
		}, 600);
	});
	$(".contButton").click(function(){
		$("html, body").animate({
			scrollTop: $(".contOp").offset().top
		}, 700);
	});
	$(".pushButton").click(function(){
		$("html, body").animate({
			scrollTop: $(".pushOp").offset().top + 350
		}, 800);
	});
	$(".offsetButton").click(function(){
		$("html, body").animate({
			scrollTop: $(".offsetOp").offset().top + 300
		}, 800);
	});

});
