const nameElement=document.querySelector('.name-tag');
const input=document.querySelector('.name');

const ageElement=document.querySelector('.age-tag');
const age =document.querySelector('.age');


// nameElement.innerText=localStorage.myName; 
// input.addEventListener('input',(e)=>{
//     localStorage.myName=e.target.value;
//     nameElement.innerText=localStorage.myName; 
// })

// //use of getitem and setitem

// ageElement.innerText=localStorage.getItem('myAge');
// age.addEventListener('input',(e)=>{
//     // localStorage.myName=e.target.value;
//     localStorage.setItem('myAge',e.target.value);

//     ageElement.innerText=localStorage.getItem('myAge'); 
// })

 
// const myData={ 
//     name :" ",
//     age: " "
// }
const myData=JSON.parse(localStorage.getItem('myData'))||{ }
if(myData.name){
    nameElement.innerText=myData.name;
}
if(myData.age){
    ageElement.innerText=myData.age;
}
input.addEventListener('input',(e)=>{
    myData.name=e.target.value;
    // localStorage.setItem('myData',myData);
    localStorage.setItem('myData',JSON.stringify(myData));
    nameElement.innerText=e.target.value;

})
age.addEventListener('input',(e)=>{
    myData.age=e.target.value;
    // localStorage.setItem('myData',myData);
    localStorage.setItem('myData',JSON.stringify(myData));
    ageElement.innerText=e.target.value;

})

nameElement.innerText=myData.name;
ageElement.innerText=myData.age;