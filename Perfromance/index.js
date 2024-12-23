//Code 1


const t1=performance.now();  //this is gives timestand
for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="This is Para "+i;
    document.body.appendChild(para);

}
const t2=performance.now();
console.log("total time by code 1 : "+(t2-t1));


//Code 2
let t3=performance.now();
let mydiv=document.createElement('div');
for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="This is Para "+i;
    mydiv.append(para);

}
document.body.appendChild(mydiv); 
let t4=performance.now();
console.log("Total time by code 2: " +(t4-t3)); 


//Best Code 

let fragment=document.createDocumentFragment();

for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="This is para "+i;
    fragment.appendChild(para);
}
document.body.appendChild(fragment);

