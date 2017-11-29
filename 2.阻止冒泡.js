// 原生js
document.getElementById('btn').addEventListener('click', function (event) {
    event = event || window.event;

    if (event.stopPropagation) {
        // w3c方法 阻止冒泡
        event.stopPropagation();
    } else {
        // ie 阻止冒泡
        event.cancelBubble = true;
    }
}, false);

// jQuery
$('#btn').on('click', function (event) {
    event.stopPropagation();
});