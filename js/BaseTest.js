
let btn001 = document.getElementById("btn001")

btn001.innerText = "测试"
btn001.addEventListener("click", OnBtn001Pressed)

function OnBtn001Pressed(params) {

    let arr = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 9, 534, 535, 67453, 637, 56, 523453, 45]

    for (let index = 0; index < arr.length; index++) {
        btn001.innerHTML = "测试" + index
    }

    this.innerText = Date() //点击后把日期显示在按钮上
}


let num = "5"

if (num != 5) {
    console.log("yes!")
} else {
    console.log("no!")
}

let now = new Date();
let timestamp = now.getTime()
document.querySelector("#btn002").innerHTML = timestamp  // 输出当前时间戳 哇塞 js的时间戳是毫秒级别

let div001 = document.querySelector("#div001")
// let div002 = document.querySelector("#div002")
// let div003 = document.querySelector("#div003")

//这样设置innerText 都只设置父元素的innerText属性 
div001.innerText = "测试div1"
// div002.innerText = "测试div2"   //这行无用  
// div003.innerText = "测试div3"   //这行无用


function getSelectedOption() {
    let radios = document.getElementsByName('habbit');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            console.log('Selected option: ', radios[i].value);
            // 在这里处理选中的选项
            break;
        }
    }
}

let submitBtn = document.querySelector("#sexbtn")

submitBtn.addEventListener("click", sexSelected)

function sexSelected() {
    let sex = document.querySelector('input[name="sex"]:checked').value;
    console.log(sex);
}



