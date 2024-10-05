//dem nguoc
const number = document.querySelector(".succes__number");
const btnSucces = document.querySelector(".btn__succes");
let count = 5;

function updateSuccessNumber(initialCount, interval) {
    let count = initialCount;

    const intervalId = setInterval(() => {
        count--;
        number.innerText = count;

        if (count === 0) {
            clearInterval(intervalId);
            setTimeout(function () {
                btnSucces.click();
            }, 1000);
        }
    }, interval);
}

// Usage example
updateSuccessNumber(5, 1000); // Starts a countdown from 5, updating every 1 second
