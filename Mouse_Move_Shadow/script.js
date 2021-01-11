const hero = document.querySelector('.hero');
const text = document.querySelector('h1');

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y} = e;
    const distance = 100;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xDistance = (x / width * distance) - (distance / 2)
    const yDistance = (y / height * distance) - (distance / 2)
    
    text.style.textShadow = `
    ${xDistance}px ${yDistance}px 0 red,
    ${xDistance *-1}px ${yDistance}px 0 blue
    
    `
    console.log(xDistance, yDistance);

}

hero.addEventListener('mousemove', shadow);
