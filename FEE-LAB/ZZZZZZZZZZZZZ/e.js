let product=document.getElementById("product")
let qty=document.getElementById("qty");
let price=document.getElementById("price")
let submit=document.getElementById("submit")
let tbody=document.getElementById("tbody")
let gtotal=document.getElementById("gtotal")
let count=1;
let grand=0;
submit.addEventListener("click",function(){
    if(product.value&&qty.value&&price.value){
        
        let tr=document.createElement("tr")
        let tsl=document.createElement("td");
        let tproduct=document.createElement("td");
        let tqty=document.createElement("td")
        let tprice=document.createElement("td")
        let ttotal=document.createElement("td");

        tsl.textContent=count;
        count++;
        
        tproduct.textContent=product.value;
        tqty.textContent=qty.value;
        tprice.textContent=price.value;
        let total=qty.value*price.value;
        ttotal.textContent=total;

        tr.appendChild(tsl);
        tr.appendChild(tproduct)
        tr.appendChild(tqty)
        tr.appendChild(tprice)
        tr.appendChild(ttotal)
        tbody.appendChild(tr);
        


      grand+=total;
      gtotal.innerText="Grand Total: "+grand;

    }
})