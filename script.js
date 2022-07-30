// Finding Html elements
const getHours = document.getElementById("hours");
const getMin = document.getElementById("min");
const getSec = document.getElementById("sec");
const getFormat = document.getElementById("format");

const digitalClock=()=>
{
    let date=new Date();
    let hours=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    if(hours>12)
    {
        hours=hours-12;
        getFormat.innerHTML="PM";
    }
    else
    {
        getFormat.innerHTML="AM";
    }
    sec=(sec<10)?"0"+sec:sec;
    hours=(hours<10)?"0"+hours:hours;
    min=(min<10)?"0"+min:min;

    getHours.innerHTML=hours;
    getMin.innerHTML=min;
    getSec.innerHTML=sec;
    setInterval(digitalClock,1000);
}

digitalClock();