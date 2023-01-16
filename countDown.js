const deadline = new Date('3/31/2023 10:01 AM');
        
    const dSecond = 1000;
    const dMinute = dSecond * 60;
    const dHour = dMinute * 60;
    const dDay = dHour * 24;
    let timer;

/* Function to find 31st March, 2023 */
function showRemaining() {

    /* Subtract March 31st, 2023; 10:01 am from the current date */
    const currentDate = new Date();
    const difference = deadline - currentDate;
    if (difference < 0) {
        clearInterval(timer);
        document.getElementById('countDown').innerHTML = 'CLASSES HAVE BEGUN! KINDLY WAIT FOR OUR NEXT ANNOUCEMENT.';
        return;
    }

    /* Calculate the days, hours, minutes, and seconds until 31st March, 2023 */
    const days = Math.floor(difference / dDay);
    const hours = Math.floor((difference % dDay) / dHour);
    const minutes = Math.floor((difference % dHour) / dMinute);
    const seconds = Math.floor((difference % dMinute) / dSecond);

    /* Store the current date and time */
    const localDate = currentDate.toLocaleDateString();
    const localTime = currentDate.toLocaleTimeString();

    /* Display the current date and time */
    document.getElementById("currentTime").innerHTML = localDate + "<br />" + localTime;
}