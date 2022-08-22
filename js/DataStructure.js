var list001 = new Array(4);

var list002 = [1, 'a', 'b', 321, false, "卧槽", 432, 54654, 3213];

var sMsg = ""

for (var i = 0; i < list002.length; i++) {
    sMsg = sMsg + list002[i] + " ";
}

console.log(sMsg)

var poped = list002.pop();

// 数组的pop操作（删除最后一个元素）
console.log("弹出最后1个元素 pop()：" + poped);

list002.unshift(-3, -4)

sMsg = ''
for (var i = 0; i < list002.length; i++) {
    sMsg = sMsg + list002[i] + " ";
}

console.log("unshift(-3,-4)之后的list002:" + sMsg)

list002.splice(2, 5, 1, 2) //参数1：从第几个 参数2：删除几个 参数3之后：添加的元素

sMsg = ''
for (var i = 0; i < list002.length; i++) {
    sMsg = sMsg + list002[i] + " ";
}

console.log("splice(2,0,1,2)之后的list002:" + sMsg)

//数组的删除操作 array.splice(n,m) 删除第n个开始数m个 然后返回
var deleted = list002.splice(2, 2);
console.log("删除 从n开始第m个 splice(n,m)：" + deleted);

//两个数组的联和 array1.concat(array2) 返回联合好的新数组 原数组和被联和的数组不变
var concated = list002.concat(deleted)
console.log("原数组：" + list002);
console.log("连接的数组：" + deleted);
console.log("新数组：" + concated);

//查找数组中第一个符合的元素 返回其索引 没有的话 返回-1
var indof = list002.indexOf("卧槽")
console.log("查找：indexOf 卧槽在数组中的第" + indof + '个');

// every函数 参数是一个匿名函数 依次传入数组中每一个元素 执行匿名函数后有一个为false 则every返回false 否则返回true
var everyfunc = list002.every(function (a) {
    return typeof a == "number"
})
console.log("everyfunc:" + everyfunc)

// some函数 参数是一个匿名函数 依次传入数组中每一个元素 执行匿名函数后返回一个true 则为true 否则为false
var somefunc = list002.some(function (a) {
    return a >= 54654;
})
console.log("somefunc:" + somefunc)

// foreach函数 依次传入数组中的每一个元素 然后依次执行
list002.forEach(function (a) {
    console.log(a + '  forEach');
})

//filter函数 用于过滤 参数是一个匿名函数 依次传入数组中每一个元素 执行匿名函数后返回true的会加入一个数组并作为返回值返回 false的不会
var filtered = list002.filter(function (element) {
    return element > 1000;
})

console.log(filtered)

console.log("*______*")


// 栈类
function Stack() {
    // 栈中的属性
    var items = []

    // 栈相关的方法
    // 压栈操作
    this.push = function (element) {
        items.push(element)
    }

    // 出栈操作
    this.pop = function () {
        return items.pop()
    }

    // peek操作
    this.peek = function () {
        return items[items.length - 1]
    }

    // 判断栈中的元素是否为空
    this.isEmpty = function () {
        return items.length == 0
    }

    // 获取栈中元素的个数
    this.size = function () {
        return items.length
    }
}

var myStack = new Stack()

myStack.push(1)
myStack.push(2);
myStack.push(2443)

var lastone = myStack.pop()

// 十进制转二进制
function Dec2Bin(num) {
    var tStack = new Stack();

    var nMod = num;

    while (nMod > 0) {
        tStack.push(nMod % 2);
        nMod = Math.floor(nMod / 2);
    }

    var sBin = ""
    while (!tStack.isEmpty()) {
        sBin += tStack.pop();
    }

    return sBin;
}

console.log("这就是转换好了的二进制：" + Dec2Bin(999));


const isDouble = a => {
    // console.log("fuck you!" + a )
    return a % 2 === 0;
}


var nums = [2, 3, 4, 5, 6, 8, 1]

var mapres = nums.filter(isDouble);

console.log(mapres);

class Cobject1 {
    constructor(id) {
        this.m_ID = id;
        this.say = function () {
            console.log("saysssss");
        };
    }
}

var luoma = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }

s = "VIIX"

var romanToInt = function (s) {

    var all = luoma[s[s.length - 1]]
    for (let index = s.length - 1; index > 0; index--) {
        const element = luoma[s[index]];
        const next = luoma[s[index - 1]];

        if (element == next) {
            all = all + element
        } else {
            if (next <= all) {
                all = all - next
            } else {
                all = all + next
            }
        }
    }
    return all
};

console.log(romanToInt(s))


let myarry = [11, 22, 33, 44, 55, 66, 77]



for (let index = 1; index < myarry.length; index++) {
    const element = myarry[index];
    console.log(element)
}

var aaaall = luoma[s[s.length - 1]]
console.log(aaaall)







