let container=document.getElementById("div-container")

let xhr=new XMLHttpRequest();
xhr.open("GET","https://feecq.github.io/api/movies.json",false)
xhr.send();
let data=JSON.parse(xhr.responseText);
console.log(data)
data.forEach(obj=>{
    
let card=document.createElement("div")
card.classList.add("card")

card.innerHTML=`
<img src="${obj.image}">
<div class="card-content">
<h3>${obj.movie}</h3>
<p>${obj.rating}</p>
<a href="${obj.imdb_url}" target=_blank>imdb</a>
</div>
`


container.appendChild(card)
})






