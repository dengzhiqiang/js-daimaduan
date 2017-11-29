function formatDate(now) {
    var Y = now.getFullYear();
    var M = now.getMonth() + 1; // 注意js里的月要加1
    var D = now.getDate();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    return Y + "-" + M + "-" + D + " " + h + ":" + m + ":" + s;
}

var nowDate = new Date(2016, 5, 13, 19, 18, 30, 20);

console.log(nowDate.getTime()); // 获得当前毫秒数: 1465816710020
console.log(formatDate(nowDate));