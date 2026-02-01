let slide = document.getElementById('slide');
let position = 1;
const Bb = new Audio('audio/bbtrombone.mp3');
Bb.preservesPitch = false;

slide.addEventListener('input', () => {
    position = Number(slide.value);
    console.log(position, Bb.playbackRate);
})
addEventListener('keydown', () => {
    Bb.currentTime = 0;
    if(event.key === 'z') {
            if(position === 1) {
        Bb.playbackRate = 1;
    }
    if(position === 2) {
        Bb.playbackRate = 0.944;
    }
    if(position === 3) {
        Bb.playbackRate = 0.891;
    }
    if(position === 4) {
        Bb.playbackRate = 0.841;
    }
    if(position === 5) {
        Bb.playbackRate = 0.794;
    }
    if(position === 6) {
        Bb.playbackRate = 0.749;
    }
    if(position === 7) {
        Bb.playbackRate = 0.707;
    }
    }
    if(event.key === 'x') {
            if(position === 1) {
        Bb.playbackRate = 1.498;
    }
    if(position === 2) {
        Bb.playbackRate = 1.414;
    }
    if(position === 3) {
        Bb.playbackRate = 1.335;
    }
    if(position === 4) {
        Bb.playbackRate = 1.26;
    }
    if(position === 5) {
        Bb.playbackRate = 1.189;
    }
    if(position === 6) {
        Bb.playbackRate = 1.122;
    }
    if(position === 7) {
        Bb.playbackRate = 1.059;
    }
    }
    Bb.play()
    console.log(position, Bb.playbackRate);
});