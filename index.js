var x = require('./assets/style.scss')
var $ = require('jQuery');

$(window).scroll(function(){
    const heightToShowScollButton = 500;
    const $scrollButton = $('#scroll-to-top');

    if($(this).scrollTop() > heightToShowScollButton){
        if($scrollButton.hasClass('hide')){
            $scrollButton.addClass('show').removeClass('hide');
        }
    } else {
        if($scrollButton.hasClass('show')){
            $scrollButton.addClass('hide').removeClass('show');
        }
    }
})

$('#scroll-to-top').click(function(event){ 
    event.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 1000);

    return false;
});


$(window).scroll(function () {
    var winTop = $(window).scrollTop();
    if (winTop >= 60) {
        $("body").addClass("sticky-header");
    } else {
        $("body").removeClass("sticky-header");
    }
})

    
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
// vid.play();

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