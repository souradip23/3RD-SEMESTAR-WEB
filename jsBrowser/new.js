// let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("btn1 is cliked")
//     let a=25;
//     a++;
//     console.log(a);//26

// }
// let div =document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("you are inside the div element")

// }

let modebtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode="light";

modebtn.addEventListener("click",()=>{
    if(currMode=="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");

    }else {
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
})