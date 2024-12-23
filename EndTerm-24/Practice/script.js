// console.log("hello");
let tbody=document.getElementById("tbody")

//Using XHr Method

// let xhr=new XMLHttpRequest();
// xhr.open("GET","https://jsonplaceholder.typicode.com/users",false);
// xhr.send();
// let data=JSON.parse(xhr.responseText);
// // console.log(data);



// data.forEach(obj=>{
//     let tr=document.createElement("tr");
//     let tid=document.createElement("td");
//     let tname=document.createElement("td");
//     let tuname=document.createElement("td");
//     let email=document.createElement("td");
//     let address=document.createElement("td");
//     let phone=document.createElement("td");
//     let website=document.createElement("td");
//     let company=document.createElement("td");
//     tid.textContent=obj.id;
//     tname.textContent=obj.name;
//     tuname.textContent=obj.username;
//     email.textContent=obj.email;
//     address.textContent=`${obj.address.street}, ${obj.address.zipcode}, ${obj.address.city}`;
//     phone.textContent=obj.phone;
//     website.textContent=obj.website;
//     company.textContent=obj.company.name;
//     tr.appendChild(tid);
//     tr.appendChild(tname);
//     tr.appendChild(tuname)
//     tr.appendChild(email)
//     tr.appendChild(address)
//     tr.appendChild(phone)
//     tr.appendChild(website)
//     tr.appendChild(company);
//     tbody.appendChild(tr);


// })

//Using Normal Fetch Method


fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>{
    return response.json();
}).then(data=>{



data.forEach(obj=>{
    let tr=document.createElement("tr");
    let tid=document.createElement("td");
    let tname=document.createElement("td");
    let tuname=document.createElement("td");
    let email=document.createElement("td");
    let address=document.createElement("td");
    let phone=document.createElement("td");
    let website=document.createElement("td");
    let company=document.createElement("td");
    tid.textContent=obj.id;
    tname.textContent=obj.name;
    tuname.textContent=obj.username;
    email.textContent=obj.email;
    // address.textContent=`${obj.address.street}, ${obj.address.zipcode}, ${obj.address.city}`;
    address.innerHTML=`
    <ul>
    <li>${obj.address.street}</li>
    <li>${obj.address.zipcode}</li>
    <li>${obj.address.city}</li>
    
    </ul>

    `
    phone.textContent=obj.phone;
    website.textContent=obj.website;
    company.textContent=obj.company.name;
    tr.appendChild(tid);
    tr.appendChild(tname);
    tr.appendChild(tuname)
    tr.appendChild(email)
    tr.appendChild(address)
    tr.appendChild(phone)
    tr.appendChild(website)
    tr.appendChild(company);
    tbody.appendChild(tr);


})
})