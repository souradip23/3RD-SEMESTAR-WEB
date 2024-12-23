const loadScript=(src)=>{
    return new Promise(resolve=>{

    
let script=document.createElement("script");
script.type="text/javascript"
script.src=src
document.body.appendChild(script);
script.onload=()=>{
    resolve(1);}
script.omerror=()=>{
    reject(0);}
})
}
