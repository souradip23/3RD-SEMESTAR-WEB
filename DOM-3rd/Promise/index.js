// let firstPromise=new Promise((resolve, reject) => {
//     console.log("Souradip");

// });
// function saymyname(){
//     console.log("My name is Souradip ");
// }
// setTimeout(saymyname,10000);


let promise1=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Promise Fulfilled");
    }else{
        reject("Promise Rejected");

    }
})
promise1.then((message)=>{
    console.log("The message is "+message);
}).catch((error)=>{
    console.log("Error: "+error);
})
 