console.log("fuck you!")

var hButton = document.getElementById("btn001")

console.log("这个hButton是个:" + typeof hButton)

function clickbtn001() {
    console.log(hButton.innerHTML + "   " + Date());
    // hButton.innerHTML="点就点！"

    // 改变css属性
    hButton.style.margin = "100px"
    hButton.style.padding = "25px"
    hButton.style.backgroundColor = "green"

    console.log(typeof hButton.onclick)
    hButton.onclick = clickbtn001_2

    console.log(typeof hButton.onclick)

    hButton.onmouseover = mouseoverbtn001

    console.log(typeof hButton.onclick)
}

function clickbtn001_2() {
    console.log("中途改变了函数噢!")
}

function mouseoverbtn001() {
    console.log('鼠标掠过!')
}