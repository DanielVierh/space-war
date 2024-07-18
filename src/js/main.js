const spaceship = document.getElementById('spaceship');
const canvas = document.getElementById('bdy');

let spaceShipIsSelected = false;

let mouse = {
    x: undefined,
    y: undefined,
}

const spaceship_height = spaceship.clientHeight / 2;
const spaceship_width = spaceship.clientWidth / 2;
spaceship.style.left = `${200 - spaceship_width}px`
spaceship.style.top = `${600 - spaceship_height}px`



canvas.addEventListener('click', (e)=> {
    console.log('canvas');
    console.log('spaceShipIsSelected', spaceShipIsSelected);
    mouse.x = e.clientX
    mouse.y = e.clientY

    if(spaceShipIsSelected === true ) {
        const spaceship_height = spaceship.clientHeight / 2;
        const spaceship_width = spaceship.clientWidth / 2;
        spaceship.style.left = `${mouse.x - spaceship_width}px`
        spaceship.style.top = `${mouse.y - spaceship_height}px`
        spaceShipIsSelected = false;
        spaceship.classList.remove('selected')
    }

})

spaceship.addEventListener('click', ()=> {
    console.log('Spceship');
    spaceShipIsSelected = true;
    spaceship.classList.add('selected');

})