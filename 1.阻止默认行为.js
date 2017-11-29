// 原生js
document.getElementById('btn').addEventListener('click', function (event) {
    event = event || window.event;

    if (event.preventDefault) {
        // w3c方法 阻止默认行为
        event.preventDefault();
    } else {
        // ie 阻止默认行为
        event.returnValue = false;
    }
}, false);

// jQuery
$('#btn').on('click', function (event) {
    event.preventDefault();
});