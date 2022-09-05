const typewriterDOM = document.getElementById('typewriter');

const typewriter = new Typewriter(typewriterDOM, {
    loop: true,
    delay: 75,
});

typewriter
    .typeString('The capital of the sun')
    .pauseFor(200)
    .start();