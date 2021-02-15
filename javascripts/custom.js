$(function () {
    var nav = $(".vertical-nav");
    $(".vertical-nav .toggle-menu").on("click", function () {
        nav.toggleClass("menu-active");
    });
})

// Add active class to the current navbar button (highlight it)
$(document).ready(function () {
    var url = window.location;
    $('ul.nav-ul a[href="' + url + '"]').addClass('active');
    $('ul.nav-ul a').filter(function () {
        return this.href == url;
    }).addClass('active');
});

//Typed function
$(function(){
	$(".home-info .typed").typed({
		strings: ["Developer", "Developer", "Developer"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 50,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});

//Custom PieChart 
$(function () {
	$('.chart').easyPieChart({
        size: 180,
        barColor: '#f9c828',
        scaleColor: false,
        lineWidth: 3,
        trackColor: '#ecf0f1',
        lineCap: 'circle',
        animate: 1700
    })
});