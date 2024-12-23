let item=document.querySelectorAll("p")
// item.forEach(el=>{
//        el.addEventListener("click",function(){
//         if(el.style.backgroundColor=="red"){
//             el.style.backgroundColor='';
//         }else
//         el.style.backgroundColor="red";
//        })
// })

item.forEach(el=>{
    el.addEventListener("click",function(){
        el.remove();
    })
})
