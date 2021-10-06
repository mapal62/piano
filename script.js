console.log("JS started");

function animatePressed(whichId) {
    let whichKey = document.getElementById(whichId);
    whichKey.classList.toggle("keydown");
    setTimeout(
        () => { whichKey.classList.toggle("keydown") },
        200);
}

function playPressed(whichId) {

}

function pressed(event) {
    let notePressed = event.target.id;
    animatePressed(notePressed);
    playPressed(notePressed);
}

let keyboard = document.querySelectorAll('.key');
keyboard.forEach(
    whichOne => { whichOne.addEventListener('click', pressed) }
);