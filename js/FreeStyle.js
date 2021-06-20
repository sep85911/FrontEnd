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


function ShowPic(whichpic){
    var adafa = whichpic.getAttribute("href");
    var imgg = document.getElementById("placehold");
    imgg.setAttribute("src",adafa)
    console.log(adafa)

    var sText = whichpic.title;

    var ppp = document.getElementById("description");

    ppp.firstChild.nodeValue = sText;

}