let textitem=document.querySelector(".textitem");
let todobox=document.querySelector(".todobox");

textitem.addEventListener("keyup",function(e){
    if(this.value==""&&e.key=="Enter"){
        alert("Enter simething here... ");
    }else if(e.key=="Enter"){
        addtodo(this.value);
        this.value="";
    }
})
function addtodo(e){
    const li=document.createElement("li");
    li.innerHTML=`${e} <i>&times;</i>`
    
    li.addEventListener("click",function(){
        this.classList.toggle("done");
    })
    
    li.querySelector("i").addEventListener("click",function(){
        li.remove();
    })

    todobox.appendChild(li);
}