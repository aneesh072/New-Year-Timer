const newYears = '1 Jan 2022';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const seconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes =  (Math.floor(seconds / 60) % 60);

    console.log(days, hours, minutes);

    const daysLeft = document.getElementById("days");
    daysLeft.innerText = days;

    const hourLeft = document.getElementById("hours");
    hourLeft.innerText = hours;

    const minsLeft = document.getElementById("mins");
    minsLeft.innerText = minutes;

    
}

//initial call
countdown();

setInterval(countdown, 1000)

