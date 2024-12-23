// let fpara=document.getElementById('fpara');
// fpara.textContent="Hello Babbar";

// function changetext(event){
//     console.log(event);
//     let fpara=document.getElementById('fpara');
//     fpara.textContent="Babbar"; 
// }
// let fpara=document.getElementById("fpara");
// fpara.addEventListener("click",changetext);

// let anchorE=document.getElementById("fanchor");
// anchorE.addEventListener("click",function(event){
//     event.preventDefault();//this is used to remove the default program in the anchor tag
     
// anchorE.textContent="Click done bhai";

// })

//target===? jei elemnt a click korbe sei element bole debe

function alertpara(event){
    if(event.target.nodeName=='SPAN'){
    alert("You have click an para: " +event.target.textContent);
    }
}

// let paras=document.querySelectorAll('p');
// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     para.addEventListener("click",alertpara)
// }
let mydiv=document.getElementById('wrapper');
document.addEventListener('click',alertpara);

