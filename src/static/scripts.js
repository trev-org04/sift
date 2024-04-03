var animHeader = document.getElementById("anim-header");
var sticky = animHeader.offsetTop;
var id = null;
var posSlideIn = -120;
var posSlideOut = 0;
var isVisible = false;

function slideIn() {
        if (posSlideIn === 0) {
            clearInterval(id);
            posSlideIn = -120;
            isVisible = true;                  
        } else {
            posSlideIn = posSlideIn + 5; 
            animHeader.style.top = posSlideIn + 'px';
        }
    }
    function slideOut() {
        if (posSlideOut === -120) {
            clearInterval(id);
            posSlideOut = 0;
            isVisible = false;
        } else {
            posSlideOut = posSlideOut - 5; 
            animHeader.style.top = posSlideOut + 'px'; 
        }
    }

window.onscroll = function() {
    clearInterval(id);
    if (window.scrollY > sticky && !isVisible) {
        clearInterval(id);
        id = setInterval(slideIn);
        console.log("sliding in...");
    }
    else if (window.scrollY === 0 && isVisible) {
        clearInterval(id);
        id = setInterval(slideOut);
        console.log("sliding out...");
    }
};