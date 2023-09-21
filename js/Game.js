/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

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

    startGame() {
        const overlay = document.getElementById('overlay')
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

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

    checkForWin() {
        const hidden = document.querySelectorAll('.hidden');
        if(hidden.length === 0) {
            return true;
        } else {
            return false;
        }
    }

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