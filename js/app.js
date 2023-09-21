/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
const startButton = document.getElementById('btn__reset');
const keyboard = document.querySelectorAll('.key');

startButton.addEventListener('click', e => {
    reset();
    game = new Game();
    game.startGame();
})

keyboard.forEach(button => {
    button.addEventListener('click', e => {
        game.handleInteraction(e.target);
    })
})

function reset() {
    const ul = document.querySelector('ul');
    ul.innerHTML = '';
    keyboard.forEach(key => {
        key.disabled = false;
        key.classList.remove('wrong');
        key.classList.remove('chosen');
    });
    const heartImg = document.querySelectorAll('.tries img');
    heartImg.forEach(img => img.src = 'images/liveHeart.png');
}