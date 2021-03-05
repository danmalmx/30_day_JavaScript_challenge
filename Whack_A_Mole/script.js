const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;

function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randHoles(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  if (hole === lastHole) {
    return randHoles(holes);
  }

  lastHole = hole;
  return hole;
}

function molePeep() {
  const time = randTime(200, 1000);
  const hole = randHoles(holes);
  hole.classList.add('up');

  setTimeout(() => {
    hole.classList.remove('up')
  }, time)
  console.log(time, hole);
}
