console.log("JS started");
let hangok = {};
let currentOsc;
let audioContext = new(window.AudioContext || window.webkit.AudioContext)();

hangok.c = 261.625565300598634;
hangok.cisz = 277.182630976872096;
hangok.d = 293.664767917407560;
hangok.disz = 311.126983722080910;
hangok.e = 329.627556912869929;
hangok.f = 349.228231433003884;
hangok.fisz = 369.994422711634398;
hangok.g = 391.995435981749294;
hangok.gisz = 415.304697579945138;
hangok.a = 440.000000000000000;
hangok.be = 466.163761518089916;
hangok.h = 493.883301256124111;
hangok.cc = 523.251130601197269;
hangok.ccisz = 554.365261953744192;

function keyPressed(event) {
    let whichId = event.target.id;
    event.target.classList.add("keydown");
    let baseHz = hangok[whichId];
    currentOsc = startSound(baseHz);
}

function startSound(freq) {
    let osc = audioContext.createOscillator();
    osc.connect(audioContext.destination);
    osc.type = "sawtooth";
    osc.frequency.value = freq;
    osc.start();
    return osc;
}

function keyReleased(event) {
    event.target.classList.remove("keydown");
    currentOsc.stop();
    delete currentOsc;
}

let keyboard = document.querySelectorAll('.key');
keyboard.forEach(
    whichOne => {
        whichOne.addEventListener('mousedown', keyPressed);
        whichOne.addEventListener('mouseup', keyReleased);
    }
);