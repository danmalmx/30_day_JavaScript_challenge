const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegree = ((seconds / 60) * 360) + 90;
    const minutesDegree = ((minutes / 60) * 360) + 90;
    const hoursDegree = ((hours / 12) * 360) +90;


    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    minHand.style.transform = `rotate(${minutesDegree}deg)`;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    
    if(seconds === 59) {
        secondHand.style.transition = null;
    }
    console.log(seconds);

    
}

setInterval(setDate, 1000);
