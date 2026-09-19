const button=document.getElementById("search");
const input=document.getElementById("city-input");
async function getdata(cityname){
    const promise=await fetch(`https://api.weatherapi.com/v1/current.json?key=d1f82634c73a44d08cf31135251509&q=${cityname}&aqi=yes`);
    return await promise.json()
}
button.addEventListener("click",async ()=>{
    const value=input.value;
    const result=await getdata(value);
    console.log(result);
}); 