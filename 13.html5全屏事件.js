document.addEventListener("fullscreenchange", function () {
    fullscreenState.innerHTML = (document.fullscreen) ? "" : "not ";
}, false);

document.addEventListener("mozfullscreenchange", function () {
    fullscreenState.innerHTML = (document.mozFullScreen) ? "" : "not ";
}, false);

document.addEventListener("webkitfullscreenchange", function () {
    fullscreenState.innerHTML = (document.webkitIsFullScreen) ? "" : "not ";
}, false);
document.addEventListener("msfullscreenchange", function () {
    fullscreenState.innerHTML = (document.msFullscreenElement) ? "" : "not ";
}, false);