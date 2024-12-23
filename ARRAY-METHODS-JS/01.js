const arr=[23,11,45,23,3,233];

let first=arr.find((value,index,array)=>{
    return value>18;
});
console.log(first);
