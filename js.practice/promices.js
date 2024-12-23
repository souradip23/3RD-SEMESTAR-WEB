
 let promise=new Promise(function(resolve,reject){
   // console.log(" I am a alert in promise ");
   resolve(56);
   alert("hello");
 })

console.log("hello")
setTimeout(function()  {
    console.log("I am a promise")
}, 3000);
console.log("My name is" + "Souradip");
console.log(promise);


//Fetch google.com homepage  ==> console.log("google.com homepage done")
//Fetch data from the data api
//Fetch pictures from the server
//Print downloading
//Rest of the script