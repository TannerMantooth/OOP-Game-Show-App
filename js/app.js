/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
const startButton = document.getElementById('btn__reset');
const keyboard = document.querySelectorAll('.key');

startButton.addEventListener('click', e => {
    game = new Game();
    game.startGame();
})

keyboard.forEach(button => {
    button.addEventListener('click', e => {
        game.handleInteraction(e.target);
    })
})