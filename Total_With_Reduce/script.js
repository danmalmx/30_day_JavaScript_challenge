const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
    }).reduce((total, vidSeconds) => total + vidSeconds);

    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    console.log(hours);
    secondsLeft = secondsLeft - (hours * 3600);
    const mins = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft - (mins * 60);

    console.log(`Total Playing Time: ${hours === 1 ? `${hours} hr` : `${hours} hrs`} ${mins} min, ${secondsLeft} sec`);
