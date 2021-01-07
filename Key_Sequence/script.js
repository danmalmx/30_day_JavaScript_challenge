const pressed = [];
const secretCode = 'danpel';


window.addEventListener('keyup', (e) => {
    console.log(e);
    pressed.push(e.key)
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length )
    
    if (pressed.join('').includes(secretCode)) {
        cornify_add();
        console.log('Yaaaaaas');
    }

    console.log(pressed);
})
