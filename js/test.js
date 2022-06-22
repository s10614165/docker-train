const { default: axios } = require("axios");

const optionmeanu= document.querySelector(".SelectMenu");
const selectbtn=optionmeanu.querySelector(".selectbtn");
const options=optionmeanu.querySelectorAll(".option");
const sbtntext=optionmeanu.querySelector(".sbtntext");
selectbtn.addEventListener("click",() => optionmeanu.classList.toggle("active"));
options.forEach(option => {
  option.addEventListener('click',()=>{
    let selectedoption = option.querySelector(".optiontext").innerText;
    console.log(selectedoption);
    sbtntext.innerText=selectedoption;
  })
  
 });

// let www =123;
// let rrer ="qwewqe";

// let ovo=`第一個數字 ${www},後面的 ${rrer}`;
// console.log(ovo);