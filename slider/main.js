"use strict";
// Select all slides

function slide(slidename,btn_next,btn_prev) {
    const slides = document.querySelectorAll(slidename);

// loop through slides and set each slides translateX
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${indx * 100}%)`;
    });

// select next slide button
    const nextSlide = document.querySelector(btn_next);

// current slide counter
    let curSlide = 0;
// maximum number of slides
    let maxSlide = slides.length - 1;

// add event listener and navigation functionality
    nextSlide.addEventListener("click", function () {
        // check if current slide is the last and reset current slide
        if (curSlide === maxSlide) {
            curSlide = 0;
        } else {
            curSlide++;
        }

        //   move slide by -100%
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    });

// select next slide button
    const prevSlide = document.querySelector(btn_prev);

// add event listener and navigation functionality
    prevSlide.addEventListener("click", function () {
        // check if current slide is the first and reset current slide to last
        if (curSlide === 0) {
            curSlide = maxSlide;
        } else {
            curSlide--;
        }

        //   move slide by 100%
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    });
}
// const slide = document.getElementById("");
slide(".s1",".bn1",".bp1");
slide(".s2",".bn2",".bp2");
// slide(".slide2",".btn-next2",".btn-prev2");
//Full Screen
var elem = document.getElementById("container");

function imgDisplay(img) {
    var fullImg = document.getElementById("fullImg");
    fullImg.src = img.getAttribute("src");
    elem.style.display = "flex";
    document.getElementById('inner').style.display ="none";
    document.body.style.minHeight = '50vh'
    // openFullscreen();
}

function openFullscreen() {
    elem.style.display = "flex";
    document.body.style.minHeight = '130vh'

    if (elem.requestFullscreen) {
        elem.requestFullscreen().then(r => {});
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

function imgHide() {
    document.getElementById('inner').style.display ="flex";

    elem.style.display = "none";
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}
let base = {
    targets: '.closebtn',
    easing: 'easeInOutSine'
}
