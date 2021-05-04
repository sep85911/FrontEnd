// console.log("fuck you!")


var btns = document.getElementsByClassName("btnStyle")
var divs = document.getElementsByClassName("content")

for (var i = 0; i < btns.length; i++) {


    (function (n) {
        btns[n].onclick = function () {
            for (var j = 0; j < btns.length; j++) {
                btns[j].className = "btnStyle"
                divs[j].style.display = "none"
            }

            this.className += " active"
            divs[n].style.display = "block"
        }
    }(i))
}

function fn(a) {
    console.log(a)

    var a = 123;

    console.log(a)

    function a() {

    }

    console.log(a)

    var b = function () { }

    console.log(b)

    function d() { }
}

function test(a, b) {
    console.log(a)
    c = 0;
    var c;
    a = 3;
    b = 2;
    console.log(b)
    function b() { }
    function d() { }
    console.log(b)
}

function test(a, b) {
    console.log(a);
    console.log(b);
    var b = 234;
    console.log(b)
    a = 123;
    console.log(a);
    function a() { }
    var a;
    b = 234;
    var b = function () { }
    console.log(a);
    console.log(b);
}

test(1)

// AO{
//     a:123;
//     b:function (){};
// }

// function a(){}
// undefined
// 234
// 123
// 123
// function (){}


var array02 = { 1: 1, "cuker": 2 };  //映射
var array01 = [[312, 32, 2, array02], 1, 2, 3, 4, 5]   //数组
function func001(a) {
    var sName = "Tangyao"

    if (sName == "tangyao") {
        console.log("Yes");
    } else {
        console.log("No")
    }

    while (a < 10) {

        console.log("这是:", a);
        a++
    }
}

$(".myBtn001")[0].onclick = function () {

    console.log("myBtn001 is clicking")
    
}


var array03 = [31,534,674,423]

$.each(array01,function (index, value) {
    console.log(index, value);
})


func001(4)

function funct002() {
    console.log("clicking");
}

document.addEventListener("keyup", mykeydown)

document.addEventListener("onclick", wholeClick)

function mykeydown(ev) {
    if (ev.keyCode == 83) {
        console.log("s");
    }
    console.log(ev.keyCode);
}

function wholeClick(ev) {
    console.log(ev)
}

var arr = [11,33,55,77,99];

arr.forEach(function(value,index){
    console.log(value,index);
})

console.log()



$(function () {
    alert("hehehe")
})
