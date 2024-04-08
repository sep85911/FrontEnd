
let btn001 = document.getElementById("btn001")

btn001.innerText = "测试"
btn001.addEventListener("click",OnBtn001Pressed)

function OnBtn001Pressed(params) {

    let arr = [1,2,3,4,4,5,6,7,8,9,9,534,535,67453,637,56,523453,45] 

    for (let index = 0; index < arr.length; index++) {
        btn001.innerText = "测试" + index
    }
}

