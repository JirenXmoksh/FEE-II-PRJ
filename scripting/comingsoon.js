// Set the date we're counting down to (3 months from now)
const countDownDate = () => {
    const savedDate = localStorage.getItem('countDownDate');
    if (savedDate) {
        return parseInt(savedDate);
    } else {
        const date = new Date();
        date.setMonth(date.getMonth() + 3);
        const newDate = date.getTime();
        localStorage.setItem('countDownDate', newDate.toString());
        return newDate;
    }
};

// Update the count down every 1 second
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate() - now;

    // Time calculations for months, weeks, and days
    const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44));
    const weeks = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = 
    months + " Months &nbsp " +
    weeks + " Weeks &nbsp " + 
    days + " Days &nbsp " +
    hours + " Hours &nbsp " +
    minutes + " Minutes";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);