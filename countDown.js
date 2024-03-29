const deadline = new Date('4/30/2023 10:01 AM');
        
    const dSecond = 1000;
    const dMinute = dSecond * 60;
    const dHour = dMinute * 60;
    const dDay = dHour * 24;
    let timer;

/* Function to find 30th April, 2023 */
function showRemaining() {

    /* Subtract April 30, 2023; 10:01 am from the current date */
    const currentDate = new Date();
    const difference = deadline - currentDate;
    if (difference < 0) {
        clearInterval(timer);
        document.getElementById('countDown').innerHTML = 'CLASSES HAVE BEGUN! KINDLY WAIT FOR OUR NEXT ANNOUCEMENT.';
        return;
    }

    /* Calculate the days, hours, minutes, and seconds until 30th April, 2023 */
    const days = Math.floor(difference / dDay);
    const hours = Math.floor((difference % dDay) / dHour);
    const minutes = Math.floor((difference % dHour) / dMinute);
    const seconds = Math.floor((difference % dMinute) / dSecond);

    /* Store the current date and time */
    const localDate = currentDate.toLocaleDateString();
    const localTime = currentDate.toLocaleTimeString();

    /* Display the current date and time */
    document.getElementById("currentTime").innerHTML = localDate + "<br />" + localTime;

    /* Display the time left until April 30th, 2023; 10:01 am */
    document.getElementById('daysLeft').innerHTML = days + 'days ';
    document.getElementById('hoursLeft').innerHTML = hours + 'hours ';
    document.getElementById('minsLeft').innerHTML = minutes + 'mins ';
    document.getElementById('secsLeft').innerHTML = seconds + 'secs';
}

/* Assign a value to the timer variable and execute the function to run and display the countdown clock*/
timer = setInterval(showRemaining, 1000);