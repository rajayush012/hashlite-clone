/*global $, jQuery, alert*/

//scrolling animation

$(document).on('click', 'ul.nav a', function (event) {
    "use strict";
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 100);

});

//changing color of menu elements when scrolling

$(function () {
    "use strict";
    $(window).bind('scroll', function () {
        $('.anchor').each(function () {
            var anchored = $(this).attr("id"),
                position = $(this).position().top - $(window).scrollTop(),
                targetOffset = $(this).offset().top - 50;

            if ($(window).scrollTop() > targetOffset) {

                $('ul.nav').find('li').removeClass("active");
                $('ul.nav').find(('*[data-anchor="' + anchored + '"]')).addClass("active");
            }
        });
    });
});