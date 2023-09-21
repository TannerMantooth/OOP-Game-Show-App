/* app.js section for word guess game that contains event listeners for buttons
 * app.js */
//Declaring variables that will be used
let game;
const startButton = document.getElementById('btn__reset');
const keyboard = document.querySelectorAll('.key');

//Event listener for start game button that also resets the game after playing
startButton.addEventListener('click', e => {
    reset();
    game = new Game();
    game.startGame();
})

//Loop that assigns a event listener to each of the on screen keyboard buttons
keyboard.forEach(button => {
    button.addEventListener('click', e => {
        game.handleInteraction(e.target);
    })
})

//Function that is used to reset the game after playing. Function is called in start button event listener above. 
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