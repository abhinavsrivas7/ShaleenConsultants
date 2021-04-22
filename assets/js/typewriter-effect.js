var app = document.getElementById('header-second-line');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Architecture')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Urban Design')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Landscape Design')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Vastu')
    .pauseFor(2500)
    .start();