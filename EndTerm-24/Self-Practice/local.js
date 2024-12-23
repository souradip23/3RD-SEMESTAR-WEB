let namee=document.getElementById("namee");
let rollNo=document.getElementById("rollNo")
let section=document.getElementById("section")
let Dept=document.getElementById("dept")
let syear=document.getElementById("year")
let btn=document.getElementById("btn")
let tbody=document.getElementById("tbody")
let data=JSON.parse(localStorage.getItem("key"))||[];

window.onload=function(){
    data.forEach(obj=>{
        let tr=document.createElement("tr");
        let tname=document.createElement("td");
        let trollNo=document.createElement("td");
        let tsection=document.createElement("td");
        let tdept=document.createElement("td");
        let tyear=document.createElement("td");
        tname.textContent=obj.nam;
        trollNo.textContent=obj.rollNo;
        tsection.textContent=obj.section;
        tdept.textContent=obj.dept;
        tyear.textContent=obj.year1;
        tr.appendChild(tname)
        tr.appendChild(trollNo)
        tr.appendChild(tsection)
        tr.appendChild(tdept)
        tr.appendChild(tyear)
        tbody.appendChild(tr);
    })
}

btn.addEventListener("click",addRow);
function addRow(event){
    event.preventDefault();
    let tr=document.createElement("tr");
    let tname=document.createElement("td");
    let trollNo=document.createElement("td");
    let tsection=document.createElement("td");
    let tdept=document.createElement("td");
    let tyear=document.createElement("td");
    tname.textContent=namee.value;
    trollNo.textContent=rollNo.value;
    tsection.textContent=section.value;
    tdept.textContent=Dept.value;
    tyear.textContent=syear.value;
    tr.appendChild(tname)
    tr.appendChild(trollNo)
    tr.appendChild(tsection)
    tr.appendChild(tdept)
    tr.appendChild(tyear)
    tbody.appendChild(tr);

    const person={
        nam:namee.value,
        rollNo: rollNo.vaue,
        section: section.value,
        dept: Dept.value,
         year1: syear.value
    };
    data.push(person)
    localStorage.setItem("key",JSON.stringify(data))


     namee.value="";
     rollNo.value=""
     section.value=""
     Dept.value=""
     syear.value=""



}