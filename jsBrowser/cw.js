// let div =document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);

// let name=div.getAttribute("name");
// console.log(name); 
// let para=document.querySelector("p");
// console.log(para.getAttribute("class"));

// console.log(para.setAttribute("class","newClass"))




// let newBtn=document.createElement("button");
// newBtn.innerText="click me"; 
// console.log(newBtn);
// div.before(newBtn);
// div.after(newBtn);
// div.prepend(newBtn);
// let newheading=document.createElement("h1");
// newheading.innerHTML="<i>My Name is Souradip</i>";
// document.querySelector("body").prepend(newheading);
// let para=document.querySelector("p");
// para.remove();
// newheading.remove();


//practice

let newBtn=document.createElement("button");
newBtn.innerText="click me";
newBtn.style.backgroundColor="red";
newBtn.style.color="white"
document.querySelector("body").prepend(newBtn);
