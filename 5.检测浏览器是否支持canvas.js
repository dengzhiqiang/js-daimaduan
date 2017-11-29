function isSupportCanvas() {
    if(document.createElement('canvas').getContext){
        return true;
    }else{
        return false;
    }
}

// 测试，打开谷歌浏览器控制台查看结果
console.log(isSupportCanvas());