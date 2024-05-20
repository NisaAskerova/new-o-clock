var h2hours=document.getElementById("hours")
var h2minut=document.getElementById("minutes")
var h2seconds=document.getElementById("seconds")

let time=()=>{
    var date=new Date()
    h2hours.innerText=date.getHours()
    h2minut.innerText=date.getMinutes()
    h2seconds.innerText=date.getSeconds()
}
setInterval(time,1000)
time()

