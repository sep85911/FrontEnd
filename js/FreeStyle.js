console.log("fuck you!")


var btns = document.getElementsByClassName("btnStyle")

for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (e) {

        for (var j = 0; j < btns.length; j++) {
            btns[j].className = "btnStyle"
        }

        this.className += " active"

    }
}