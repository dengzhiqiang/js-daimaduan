// 1）js内置pop方法
// pop() 方法用于删除并返回数组的最后一个元素，
// 注意这里在获取了数组的最后一个元素的同时也将原数组的最后一个元素给删除了。
// 如果数组已经为空，则该方法不改变数组，并返回 undefined 值，如：


var args = new Array(['a'], ['b'], ['c']);
console.log(args.pop());

// （2）根据length方法获取，例如：n


var args = new Array(['a'], ['b'], ['c']);
console.log(args[args.length - 1]); //net
