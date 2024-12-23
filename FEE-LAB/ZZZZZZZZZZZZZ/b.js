let add=document.getElementById("add")
let sub=document.getElementById("sub")
let display=document.getElementById("display")
let count=0;
add.addEventListener("click",function(){
    count++;
    display.innerText=count;
})
sub.addEventListener("click",function(){
    if(count>0){
        count--;
    }
    display.innerText=count;
})