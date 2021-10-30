const maxTime = 2147483647; // 2147483647

function longTimeout(func, time) {
    let timeLeft = time - maxTime; // time for next timeout

    if(timeLeft <= 0) {
        setTimeout(func, time); // if a normal timeout works
        return;
    }

    setTimeout(() => {
        console.log("Getting there...");
        if(timeLeft > maxTime) {
            longTimeout(func, timeLeft); // if time for next timeout is still too large for a normal timeout
        } else {
            setTimeout(func, time); // if time for next timeout works with a normal timeout
        }
    }, maxTime);
}

module.exports = longTimeout;