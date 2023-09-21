/* Phrase section of project that contains main methods that involve phrase manipulation
 * Phrase.js */

//Phase class that uses a constructor to convert phases from game.phases array to all lower case
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    
    //Method that adds the chosen random phrase to the display by adding list elements to the unordered list
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

    //Method that checks if current active phrase contains the letter that was selected by the player
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    //Method that makes letter visisble on screen if the correct letter was guess by player
    showMatchedLetter(letter) {
        const letters = document.getElementsByClassName(letter);

        for(let i = 0; i < letters.length; i++) {
            letters[i].classList.remove('hidden');
            letters[i].classList.add('show');
        }
    }
}
