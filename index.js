var x = require('./assets/style.scss');
import $ from 'jquery';
import 'slick-carousel';

/**
 * If window scoll is more than 500 from top adds show class on scroll-to-top
 */
$(window).scroll(function(){
    const heightToShowScollButton = 500;
    const $scrollButton = $('#scroll-to-top');
    const winTop = $(window).scrollTop();

    // Used to show the scoll button
    if(winTop > heightToShowScollButton){
        if($scrollButton.hasClass('hide')){
            $scrollButton.addClass('show').removeClass('hide');
        }
    } else {
        if($scrollButton.hasClass('show')){
            $scrollButton.addClass('hide').removeClass('show');
        }
    }

    // Used for sticky header
    if (winTop >= 60) {
        $("body").addClass("sticky-header");
    } else {
        $("body").removeClass("sticky-header");
    }

})

/**
 * On scroll-to-top press animate to 0 in 1000 ms
 */
$('#scroll-to-top').click(function(event){ 
    event.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 1000);

    return false;
});

/**
 * Testimonials carousel
 */
$('.testimonialeHolder').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear'
  });
    

//
// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top - 50;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});
// burger menu
var navButton = document.querySelector('button[aria-expanded]');

function toggleNav() {
    var expanded = eval(navButton.getAttribute('aria-expanded'));
    navButton.setAttribute('aria-expanded', !expanded);
}
navButton.addEventListener('click', toggleNav);



// video script
// var vid = document.getElementById('vid');
// var vid01 = document.getElementById('vid01');
$('#vid')[0].play();

// modal script
// var modal = document.querySelector("#modal");
// var modalOverlay = document.querySelector("#modal-overlay");

// var closeButton = document.querySelector("#close-button");
// var openButton = document.querySelector("#open-button");

// closeButton.addEventListener("click", function () {
//     modal.classList.toggle("closed");
//     modalOverlay.classList.toggle("closed");
//     vid01.pause();
//     vid01.currentTime = 0;
// });

// openButton.addEventListener("click", function () {
//     modal.classList.toggle("closed");
//     modalOverlay.classList.toggle("closed");

//     vid01.play();
// });

// video loop on hover script
var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}