/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    
    addPhraseToDisplay() {
        const pDiv = document.getElementById('phrase');
        const pUl = document.querySelector('ul');

        for(let i = 0; i < this.phrase.length; i++) {
            const li = document.createElement('li');
            if(this.phrase[i] === ' ') {
                li.className = 'space';
            } else {
                li.className = `hide letter ${this.phrase[i]}`;
                li.textContent = this.phrase[i];
            }
            pUl.appendChild(li);
        }
    }

    checkLetter() {

    }

    showMatchedLetter() {

    }
}
