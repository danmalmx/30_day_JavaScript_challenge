let cuntdown;

function timer(sec) {
  const now = Date.now();
  const then = now + (sec * 1000)
  displayTmeLeft(sec);
  countdown = setInterval(() => {
    const secLeft = Math.round((then - Date.now()) / 1000);

    if(secLeft === 0) {
      clearInterval(countdown);
      return;
    }
    displayTmeLeft(secLeft);
  }, 1000);
}

function displayTmeLeft(sec) {
  console.log(sec);
}
