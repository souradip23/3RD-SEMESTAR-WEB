function clock(){
    let date=new Date()
 let clo=document.getElementById("clock")
 clo.innerHTML=date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds()+" "; 
}
setInterval(clock,1000);
// setTimeout(clock,1000);