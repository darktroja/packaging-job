const btn = document.getElementById("btn-info");
const namee = document.getElementById("name");
const number = document.getElementById("number");
const meli= document.getElementById("meli");
const para= document.getElementById("totally");


let result = "name :"+ namee
let result2 = "number :"+ number
let result3 = "name :"+ meli

let total = result.value + result2.value + result3.value
btn.onclick = function(){
    para.textContent = total
}


