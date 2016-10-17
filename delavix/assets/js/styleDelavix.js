/**
 *	Javascript Document
 *	Author : M. Wiguna Saputra
 *	Copyright (c) 2016 Delavix
 */

$(document).ready(function(){
	$(".tx-main, .tx-sec").animate({"opacity": "1"});

	//-------------- Main Feature ----------------//
	
	$(".gtButton").click(function(){
		$(".main-features").animate({opacity: "0"}, 100);
		$(".main-features").load("getStarted.html", function(){
			$(".main-features").animate({opacity: "1"}, 100, function(){
				$("html, body").animate({
					scrollTop: $(".main-features").offset().top
				}, 500);
			});
		});
	});
	$(".rtButton").click(function(){
		$(".main-features").animate({opacity: "0"}, 100);
		$(".main-features").load("routing.html", function(){
			$(".main-features").animate({opacity: "1"}, 100, function(){
				$("html, body").animate({
					scrollTop: $(".main-features").offset().top
				}, 500);
			});
		});
	});
	$(".ctButton").click(function(){
		$(".main-features").animate({opacity: "0"}, 100);
		$(".main-features").load("controller.html", function(){
			$(".main-features").animate({opacity: "1"}, 100, function(){
				$("html, body").animate({
					scrollTop: $(".main-features").offset().top
				}, 500);
			});
		});
	});
	$(".mdButton").click(function(){
		$(".main-features").animate({opacity: "0"}, 100);
		$(".main-features").load("model.html", function(){
			$(".main-features").animate({opacity: "1"}, 100, function(){
				$("html, body").animate({
					scrollTop: $(".main-features").offset().top
				}, 500);
			});
		});
	});
	$(".vwButton").click(function(){
		$(".main-features").animate({opacity: "0"}, 100);
		$(".main-features").load("view.html", function(){
			$(".main-features").animate({opacity: "1"}, 100, function(){
				$("html, body").animate({
					scrollTop: $(".main-features").offset().top
				}, 500);
			});
		});
	});
	$(".scButton").click(function(){
		$(".main-features").animate({opacity: "0"}, 100);
		$(".main-features").load("security.html", function(){
			$(".main-features").animate({opacity: "1"}, 100, function(){
				$("html, body").animate({
					scrollTop: $(".main-features").offset().top
				}, 500);
			});
		});
	});

	//-------------- Sub Main Feature ----------------//

});
