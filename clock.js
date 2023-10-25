const hour=document.getElementById("hour");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");
const ampm=document.getElementById("ampm");

function updateClock()
{
let hour1=new Date().getHours();
let minutes1=new Date().getMinutes();
let seconds1=new Date().getSeconds();
let ampm1="AM"
/*if(hour1>12)
{
    hour1=hour1-12;
    ampm="PM";
}*/
hour1=hour1<10?"0"+hour1:hour1;
seconds1=seconds1<10?"0"+seconds1:seconds1;
minutes1=minutes1<10?"0"+minutes1:minutes1;
hour.innerText=hour1;
minutes.innerText=minutes1;
seconds.innerText=seconds1;
ampm.innerText=ampm1;
setTimeout(()=>{updateClock()},1000)
}
updateClock();


