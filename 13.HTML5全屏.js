// 实现浏览器全屏
function fullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

fullscreen(document.documentElement);
//  退出全屏
if (document.exitFullscreen) {
    document.exitFullscreen();
}
else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
}
else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
}
else if (document.msExitFullscreen) {
    document.msExitFullscreen();
}