// async function getdata(){
//     setTimeout(() => {
//         console.log(" I am inside the timeout");

//     }, 3000);
// }
// let output=getdata();//return a promise





//await

//fetch API

async function getdata(){
    let responce =await fetch('https://jsonplaceholder.typicode.com/posts');
    //parse json-async
    let data=await responce.json();
    console.log(data);
}
getdata();
