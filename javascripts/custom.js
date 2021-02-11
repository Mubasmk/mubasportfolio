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