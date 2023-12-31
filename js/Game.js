/* Game section of project that holds main game processes
 * Game.js */

//Game class with constructor that creates an array of phrases that will be used
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Finishing the fight sir'),
            new Phrase('It is no sin to fight for what is right'),
            new Phrase('Death is simply another stage of our life'),
            new Phrase('I would rather be a brainless monkey than a heartless monster'),
            new Phrase('You will laugh at your fears when you find out who you are')
        ];
        this.activePhrase = null;
    }

    //Method that hides the main screen overlay once start button is clicked and sets the active phrase to a random selected one
    startGame() {
        const overlay = document.getElementById('overlay')
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    //Method that returns a random chosen phrase from the phrases array
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /*Handles the cross interaction between the two classes and the app.js section
    Calls created methods from both classes based of what buttons are clicked on the on screen keyboard*/
    handleInteraction(button) {
        button.disabled = true;
        const buttonLetter = button.textContent;
        const correctLetter = this.activePhrase.checkLetter(buttonLetter);

        if(correctLetter) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(buttonLetter);
            if(this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }

    //Method that updates missed count and changes heart images to lost heart image when wrong selection is made
    removeLife() {
        const heartImg = document.querySelectorAll('.tries img');

        if(this.missed < 5) {
            heartImg[this.missed].src = 'images/lostHeart.png';
            this.missed++;
        }
        
        if(this.missed === 5) {
            this.gameOver();
        }
    }

    //Method checks for either a win or loss depending on how many letters are still hidden
    checkForWin() {
        const hidden = document.querySelectorAll('.hidden');
        if(hidden.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    //Method that displays message and changes screen background depending on win or loss for the player
    gameOver(gameWon) {
        const overlay = document.getElementById('overlay')
        const message = document.getElementById('game-over-message')
        overlay.style.display = 'block';

        if(gameWon === true) {
            overlay.className = 'win';
            message.textContent = 'You have won the game!';
        } else {
            overlay.className = 'lose';
            message.textContent = 'Sorry, you have lost the game.';
        }
    }
}