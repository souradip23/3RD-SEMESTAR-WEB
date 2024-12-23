let tbody=document.getElementById("tbody")
// let xhr=new XMLHttpRequest();
// xhr.open("GET","https://jsonplaceholder.typicode.com/users",false)
// xhr.send();
// let data=JSON.parse(xhr.responseText)

fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>{
    return response.json();
}).then(data=>{


data.forEach(obj=>{
    let tr=document.createElement("tr")
    let tid=document.createElement("td")
    let tname=document.createElement("td");
    let tuname=document.createElement("td")
    let email=document.createElement("td")
    let address=document.createElement("td");
    let phone=document.createElement("td")
    let website=document.createElement("td")
    let company=document.createElement("td")
    tid.textContent=obj.id;
    tname.textContent=obj.name;
    tuname.textContent=obj.username;
    email.textContent=obj.email;
    address.textContent=`${obj.address.street},${obj.address.city},${obj.address.zepcode},${obj.address.geo.lat}`
    phone.textContent=obj.phone;
    website.innerHTML=`<a href="https://${obj.website}" terget="_blank">${obj.website}</a>`;
    company.textContent=`${obj.company.name},${obj.company.bs}`
    tr.appendChild(tid)
    tr.appendChild(tname)
    tr.appendChild(tuname)
    tr.appendChild(email)
    tr.appendChild(address)
    tr.appendChild(phone)
    tr.appendChild(website)
    tr.appendChild(company)
    tbody.appendChild(tr);


    

})
})
