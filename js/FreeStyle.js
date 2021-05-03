console.log("fuck you!")


var btns = document.getElementsByClassName("btnStyle")
var divs = document.getElementsByClassName("content")

for (var i = 0; i < btns.length; i++) {


    (function (n) {
        btns[n].onclick = function(){
            for (var j = 0; j < btns.length; j++) {
                btns[j].className = "btnStyle"
                divs[j].style.display = "none"
            }
    
            this.className += " active"
            divs[n].style.display = "block"
        }
    }(i))
}

var btn = $(".btnStyle")[0]

console.log(btn)