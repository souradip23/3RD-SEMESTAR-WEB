var array = [1,4,9,16,25];
var eidx=0;
var oidx=0;
var err=[];
var orr=[];
var sqr=[];
for(var i=0;i<array.length;i++){
    if(array[i]%2==0){
        err[eidx++]=array[i];
        
    }
    else{
        orr[oidx++]=array[i];
        
    }
}

for(var i=0;i<array.length;i++){
    // sqr[i]=array[i]**2;
    sqr[i]=Math.sqrt(array[i]);
    
}
console.log(err);
console.log(orr);
console.log(sqr);