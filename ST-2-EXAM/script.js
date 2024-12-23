// alert("ok")
const button=document.getElementById("search-button");
const input=document.getElementById("city-input")


const cityname=document.getElementById("city-name")
const citytime=document.getElementById("city-time")
const citytem=document.getElementById("city-temp")
async function getdata(cityname){
const promise=await fetch(
`http://api.weatherapi.com/v1/current.json?key=bc8b935c0f8845b18d2181621242310&q=${cityname}&aqi=yes`);
return await promise.json();
}
button.addEventListener("click",async()=>{
    // console.log(input.value)
    const value=input.value;
    const result=await getdata(value)
//    console.log(result);
cityname.innerText=`${result.location.name},${result.location.region}-${result.loction.country}`

})