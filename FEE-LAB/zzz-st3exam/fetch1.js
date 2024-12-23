let tbody=document.getElementById("tbody");

//By using xhr

// let xhr=new XMLHttpRequest();
// xhr.open("GET","https://jsonplaceholder.typicode.com/users",false);
// xhr.send();
// let data1=JSON.parse(xhr.responseText);
// console.log(xhr);

//By using fetch method
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>{
    return response.json();
}).then(data1=>{



data1.forEach((data)=>{

let tr=document.createElement("tr");
let tname=document.createElement("td");
let tid=document.createElement("td");
let tusername=document.createElement("td");
let taddress=document.createElement("td");
let tphone=document.createElement("td");
let twebsite=document.createElement("td");
let tcompany=document.createElement("td");

tname.textContent=data.name;
tid.textContent=data.id;
tusername.textContent=data.username;
taddress.textContent=`${data.address.street},${data.address.city}`;
tphone.textContent=data.phone;
twebsite.innerHTML=`<a href="https://${data.website}" target="_blank">${data.website}</a>`
// twebsite.innerHTML = `<a href="https://${data.website}" target="_blank">${data.website}</a>`;

tcompany.textContent=data.company.name;

tr.appendChild(tname)
tr.appendChild(tid)
tr.appendChild(tusername)
tr.appendChild(taddress)
tr.appendChild(tphone)
tr.appendChild(twebsite)
tr.appendChild(tcompany)
tbody.appendChild(tr);





})
});


