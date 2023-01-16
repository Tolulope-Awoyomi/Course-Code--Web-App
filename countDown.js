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
}