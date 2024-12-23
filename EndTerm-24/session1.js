const people = [
{ name: "Alice", age: 30, bloodType: "O+" },
{ name: "Bob", age: 25, bloodType: "A-" },
{ name: "Charlie", age: 35, bloodType: "B+" },
{ name: "David", age: 28, bloodType: "O+" },
{ name: "Eve", age: 40, bloodType: "AB-" }
];
let body=document.querySelector("body");
function printName(people){
    people.forEach(obj=>{
        if(obj.bloodType=='O+'){
            // console.log(obj.name)
            let div=document.createElement("div");
            div.textContent=obj.name;
            body.appendChild(div);
        }
    })
}
console.log(printName(people))
