$('#content').on("mousewheel DOMMouseScroll", function (event) {
    // chrome & ie || // firefox
    var delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) || (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1));

    if (delta > 0) {
        // 向上滚动
        console.log('mousewheel top');
    } else if (delta < 0) {
        // 向下滚动
        console.log('mousewheel bottom');
    }
});