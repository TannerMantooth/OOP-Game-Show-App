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

    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    handleInteraction() {

    }

    removeLife() {

    }

    checkForWin() {

    }

    gameOver() {

    }
}