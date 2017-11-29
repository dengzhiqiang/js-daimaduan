// <!-- dom -->
// <input id="send" type="button" value="发送验证码">

// 原生js版本
var times = 60, // 临时设为60秒
    timer = null;

document.getElementById('send').onclick = function () {
    // 计时开始
    timer = setInterval(function () {
        times--;

        if (times <= 0) {
            send.value = '发送验证码';
            clearInterval(timer);
            send.disabled = false;
            times = 60;
        } else {
            send.value = times + '秒后重试';
            send.disabled = true;
        }
    }, 1000);
}

// jQuery版本
var times = 60,
    timer = null;

$('#send').on('click', function () {
    var $this = $(this);

    // 计时开始
    timer = setInterval(function () {
        times--;

        if (times <= 0) {
            $this.val('发送验证码');
            clearInterval(timer);
            $this.attr('disabled', false);
            times = 60;
        } else {
            $this.val(times + '秒后重试');
            $this.attr('disabled', true);
        }
    }, 1000);
});