console.log("This my Js")

// https://dummyjson.com/products

/* getElementById .... -> HTML Collection
   querySelector , ... All -> NodeList
*/

// const bd = document.getElementById("bd")
// const bd = document.querySelector("#bd")
// const btn = document.getElementById("btn")
// const ul = document.querySelector("ul")

// ul.style.display = "flex"

// function changeHandler(){
//  bd.innerText = "Sougata"
// }

// kjbskjvb

// btn.addEventListener('click',changeHandler)

// let num = 4;

// var promise = new Promise((resolve,reject)=>{
//     if(num%2 == 0)
//         resolve()
//     else
//       reject()
// })

// promise.then(()=>{
//     console.log("Even Number")
// }).then(()=>{
//     console.log("NUmber")
// })
// .catch(()=>{
//     console.log("Odd Number")
// })


// const getData = async ()=>{
  
// }

// async function getData() {
//     const responce = await fetch("./user.json")
//     const data = await responce.json()
//     console.log(data)

//     data.forEach(ele => {
//         const tr = document.createElement("tr")
//         const td1 = document.createElement("td")
//         td1.innerText = ele.name
//         tr.append(td1)
//         const td2 = document.createElement("td")
//         td2.innerText = ele.age
//         tr.append(td2)
//         document.querySelector("tbody").append(tr)
//     });
// }     


 

// getData()



const input = document.getElementById("inp")
const btn = document.getElementById("btn")
const h1 = document.querySelector("h1")


if(localStorage.getItem("name")){
    h1.innerText = localStorage.getItem("name")
}

btn.addEventListener('click',function(){
   // localStorage.setItem("name",JSON.stringify(input.value))    /// JSON.stringify(data)  --> JSON.parse(localStorage.getItem("name"))
   const value = input.value
   localStorage.setItem("name",value)

    h1.innerText = localStorage.getItem("name")
})