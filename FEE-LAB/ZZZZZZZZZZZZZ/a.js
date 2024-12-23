let input=document.getElementById("input")
let add=document.getElementById("add");
let dl=document.getElementById("dl")
let display=document.getElementById("display")
let arr=[];
add.addEventListener("click",function(){
    
    if(input.value){
      arr.push(input.value);
      updatetable();
      input.value="";

    }
})
dl.addEventListener("click",function(){
    arr.pop();
    updatetable();
})
function updatetable(){
    display.textContent=arr.join(", ");
}