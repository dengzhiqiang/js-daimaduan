function isSupportSVG() {
    var SVG_NS = 'http://www.w3.org/2000/svg';
    return !!document.createElementNS && !!document.createElementNS(SVG_NS, 'svg').createSVGRect;
}

// 测试
console.log(isSupportSVG());