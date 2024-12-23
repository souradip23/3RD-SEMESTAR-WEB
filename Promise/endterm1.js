const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,network

    setTimeout(() => {
        console.log('Async task is complete');
        resolve();

    }, 1000);

})

promiseOne.then(function(){
    console.log("Promise Comsume");
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolve");
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"Chai",email:"souradip@gmail.com"})
    }, 1000)
});
promiseThree.then(function(user){
console.log(user);


})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({username:"Souradip",password:"123"})
        }else{
            reject('Error : Something went wrong')

        }
    }, 1000);
})
promiseFour.then((user)=>{
console.log(user);
return user.username;
}).then((username)=>{
    console.log(username)

}).catch(function(error){
console.log(error);

}).finally(()=>{
    console.log("The promise is eitheer resolve or rejected");
})



const promiseFive=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({username:"Javascript",password:"123soura"})
        }else{
            reject('Error :  JS  went wrong')

        }
    }, 1000);

})


async function consumePromiseFive(){
  try {
    const response= await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }

}
consumePromiseFive();



// async function getAllUsers(){
// try {
//     const response= await fetch('https://jsonplaceholder.typicode.com/posts')
//     //endterm1.htmlconsole.log(response);
//     const data= await response.json();
//     console.log(data);
// } catch (error) {
//     console.log("E:" ,error);
// } 

// }
// getAllUsers();



fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
 
})
.catch((error)=>{
    console.log(error);
})