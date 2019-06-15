/* Carousel Interval */
$(document).ready(function(){
	
	'use strict';

	// Nice Scroll
	$("html").niceScroll();

	$('.carousel').carousel({
		interval:3000
	});
});

/* Toggle Option Box */
$(document).ready(function(){
	$('.gear-check').click(function(){
		$('.option-box .box').fadeToggle(500);
	});

// Change Colors
var colorLi = $(".option-box .box ul li");
	colorLi
		.eq(0).css("backgroundColor","#1372e8").end()
		.eq(1).css("backgroundColor","#da2b2b").end()
		.eq(2).css("backgroundColor","#5ac358").end()
		.eq(3).css("backgroundColor","#a968ff").end()
		.eq(4).css("backgroundColor","#53c5bb");
		
	colorLi.click(function(){
		$("link[href*='theme']").attr("href", $(this).attr("data-value"));
		//console.log($(this).attr("data-value"));
	});
});

/* Scroll */
var scrollBtn = $('.scroll');

$(window).scroll(function(){
	scrollBtn = $(this).scrollTop() >= 630 ? scrollBtn.show() : scrollBtn.hide();
});
	scrollBtn.click(function(){
		$("html,body").animate({ scrollTop: 0 }, 1000);
	});

	//SideBar
	function toggleSideBar() {
    document.getElementById("mySidenav").classList.toggle('active');
}

