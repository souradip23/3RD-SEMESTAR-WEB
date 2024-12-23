

let input_btn=document.getElementById("input-btn")
let add_btn=document.getElementById("add-btn")
let del_btn=document.getElementById("del-btn")
let label=document.getElementById("label")
let item=[];
add_btn.addEventListener("click",function(){
    
    if(input_btn.value){
 item.push(input_btn.value);
 updatetable();
    }
})
del_btn.addEventListener("click",function(){
    if(item.length>0){
        item.pop();
        updatetable();
    }
})
function updatetable(){
    label.textContent=item.join(" , ");
}

