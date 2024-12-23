let name1=document.getElementById("name")
let rno=document.getElementById("rno")
let year=document.getElementById("year")
let btn=document.getElementById("btn")
let removelastbtn=document.getElementById("removelastbtn")
let clearAll=document.getElementById("clearAll")

let data=JSON.parse(localStorage.getItem("data"))||[];
window.onload=function(){
    data.forEach(obj=>{
        let tr=document.createElement("tr");
        let tname=document.createElement("td");
        let troll=document.createElement("td");
        let tyear=document.createElement("td");
        tname.textContent=obj.fname;
    troll.textContent=obj.rollNo;
    tyear.textContent=obj.year;
    tr.appendChild(tname)
    tr.appendChild(troll)
    tr.appendChild(tyear)
    tbody.appendChild(tr);
    })
}



btn.addEventListener("click",addRow);
function addRow(event){
    event.preventDefault();
    let tr=document.createElement("tr");
    let tname=document.createElement("td");
    let troll=document.createElement("td");
    let tyear=document.createElement("td");
    tname.textContent=name1.value;
    troll.textContent=rno.value;
    tyear.textContent=year.value;
    tr.appendChild(tname)
    tr.appendChild(troll)
    tr.appendChild(tyear)
    tbody.appendChild(tr);

    const person={
          fname:name1.value,
          rollNo:rno.value,
          year:year.value
    }
    data.push(person);
    localStorage.setItem("data",JSON.stringify(data));
    name1.value=""
    rno.value=""
    year.value=""




}
removelastbtn.addEventListener("click",removeRow);
function removeRow(){
    let row=document.getElementsByTagName("tr");
    if(row.length>0){
        tbody.removeChild(row[row.length-1]);
        data.pop();
        localStorage.setItem("data",JSON.stringify(data));
    }
}

// Clear all rows and data
clearAll.addEventListener("click", clearAll);
function clearAll() {
  tbody.innerHTML = ""; // Clear all rows from the table
  data = []; // Reset the data array
  localStorage.removeItem("data"); // Remove 'data' from localStorage
}