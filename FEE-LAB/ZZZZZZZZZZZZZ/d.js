let n=document.getElementById("name")
let roll=document.getElementById("number")
let tbody=document.getElementById("tbody")
let submit=document.getElementById("sub")
const d=document.getElementById("delete")



function loadTable(){
    tbody.innerHTML="";
    let students=JSON.parse(localStorage.getItem("students"))||[];
    students.forEach(s=>{
       

        let tr=document.createElement("tr");
        let tname=document.createElement("td")
        let troll=document.createElement("td");
        tname.textContent=s.name;
        troll.textContent=s.rollno;
        tr.appendChild(tname)
        tr.appendChild(troll)
        tbody.appendChild(tr);
    })
}
function savetoLocalStorage(){
    let students=[];
    tbody.querySelectorAll("tr").forEach(row=>{
        let name=row.cells[0].textContent;
        let rollno=row.cells[1].textContent;
        students.push({name,rollno});
    })
    localStorage.setItem("students",JSON.stringify(students));

}
submit.addEventListener("click",function(){
    if(n.value&&roll.value){
        let tr=document.createElement("tr");
        let tname=document.createElement("td")
        let troll=document.createElement("td");
        tname.textContent=n.value;
        troll.textContent=roll.value;
        tr.appendChild(tname)
        tr.appendChild(troll)
        tbody.appendChild(tr);
        n.value="";
        roll.value="";
        savetoLocalStorage();
    }
    
})
loadTable();
d.addEventListener("click",function(){
   if(tbody.rows.length>0){
    tbody.deleteRow(tbody.rows.length-1);
savetoLocalStorage()
   }
})