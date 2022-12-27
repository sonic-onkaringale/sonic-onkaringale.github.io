// select video element
var vid = document.getElementById('v0');
//var vid = $('#v0')[0]; // jquery option

// pause video on load
vid.play();
// vid.pause();

// pause video on document scroll (stops autoplay once scroll started)
window.onscroll = function(){
    // vid.pause();
    vid.currentTime = vid.currentTime+1;
};

// refresh video frames on interval for smoother playback
// setInterval(function(){
//     vid.currentTime = window.pageYOffset/400;
// }, 40);