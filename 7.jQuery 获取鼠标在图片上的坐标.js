$('#myImage').click(function(event){
    //获取鼠标在图片上的坐标
    console.log('X：' + event.offsetX+'\n Y:' + event.offsetY);

    //获取元素相对于页面的坐标
    console.log('X：'+$(this).offset().left+'\n Y:'+$(this).offset().top);
});