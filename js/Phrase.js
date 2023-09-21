/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    
    addPhraseToDisplay() {
        const pDiv = document.getElementById('phrase');
        const pUl = pDiv.firstElementChild;

        for(let i = 0; i < this.phrase.length; i++) {
            const li = document.createElement('li');
            if(this.phrase[i] === ' ') {
                li.classList.add('space');
            } else {
                li.classList.add('hidden', 'letter', this.phrase[i]);
                li.textContent = this.phrase[i];
            }
            pUl.appendChild(li);
        }
    }

    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    showMatchedLetter(letter) {
        const letters = document.getElementsByClassName(letter);

        for(let i = 0; i < letters.length; i++) {
            letters[i].classList.remove('hidden');
            letters[i].classList.add('show');
        }
    }
}
