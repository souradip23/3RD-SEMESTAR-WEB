let user=prompt ("Enter s,w or g");
let cpuI=Math.floor(Math.random()*3);
let cpu=["S","W","g"][cpuI];
const match=(cpu,user)=>{
    if(cpu===user){
        return "Nobody,Match is Tied";
    }else if(cpu==="S"&&user==="W"){
        return "cpu";
    }else if(cpu==="W"&&user==="G"){
        return "cpu";

    }else if(cpu==="G"&&user==="S"){
        return "cpu";
    }else if(cpu==="S"&&user==="G"){
        return "user";
    }else if(cpu==="W"&&user=="S"){
        return "user";
    }else if(cpu==="G"&&user==="W"){
        return "user";
    }
}
let result=match(cpu,user);
document.write(`CPU:${cpu}</br> User:${user}</br>The Winner is:${result.toUpperCase()}`)