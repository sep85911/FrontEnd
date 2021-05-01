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
