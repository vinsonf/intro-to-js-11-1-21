export function createAlphaButtons() {
  for (let i = 65; i < 91; i++) {
    console.log(String.fromCharCode(i));
    let button = document.createElement("button");
    button.innerHTML = String.fromCharCode(i);
    document.body.appendChild(button);
    button.dataset.letter = String.fromCharCode(i).toLowerCase();
  }
  document.body.appendChild(document.createElement("hr"));
}

export function createLocationButtons(location) {
  for (let i = 0; i < location.length; i++) {
    if (location[i] === ",") {
        document.body.appendChild(document.createElement("br"));
    } else {

        if (location[i] !== " " ) {
            let button = document.createElement("button");
            button.innerHTML = location[i];
            document.body.appendChild(button);
            button.style.color = 'transparent';
            button.dataset.answerLetter = location[i].toLowerCase();
        }

    }
  }
}

document.addEventListener('keydown', (event) => {
    const {key, code} = event;
    console.log(key, code);

    const button = document.querySelector(`button[data-letter="${key}"]`);
    if (button) {
        button.disabled = true;

        const buttons = document.querySelectorAll(`button[data-answer-letter="${key}"]`);
        console.log(buttons);

        buttons.forEach( item => {
            item.style.color = 'black';
        })
    }
    
});

export function buildCardElements(deck) {
    deck.forEach( card => {
        const element = document.createElement("div");
        element.classList.add("card");
        document.body.appendChild(element);
        element.classList.add("flipped");
        if (['hearts', 'diams'].includes(card.suit)) {
            element.classList.add("red");
           
        }
        element.innerHTML = `
        <div class="value">${card.value}</div>
        <div class="suit">&${card.suit};</div>
        <div class="value">${card.value}</div>
        `;
        card.element = element;
        element.addEventListener('click', () => {
            element.classList.toggle("flipped");
            const flippedCards = [...document.querySelectorAll('.card:not(.flipped)')];
            console.log(flippedCards)
            if (flippedCards.length === 2) {
                flippedCards.sort((a, b) => { 
                    if (a.value === b.value) {
                        return alert ("Tie");
                    }
                    if (getValue(a.value) > getValue(b.value)) {
                        console.log(a.name)
                        return alert (a.name + " You win");
                    } else {
                        console.log(b.name)
                        return alert (b.name + " You win");
                    }

                });
            }
        });
    });
}


export function createPile() {
    const pile = document.createElement("div");
    pile.classList.add("pile");
    document.body.appendChild(pile);
    pile.addEventListener( 'click', () => {
        console.log('pile clicked');
    })
    return pile;
}

export function placeCardsOnPile({deck, top, pile, name}) {
    pile.style.top = top;
    pile.style.zIndex = '0';
    deck.forEach(( card, index) => {
        card.element.style.top = top;
        card.element.style.zIndex = index + 1;
        card.element.name = name;
        card.element.value = card.value;
    });
}

function getValue(string) {
    switch(string) {
        case 'A':
            return 14;
        case 'K':
            return 13;
        case 'Q':
            return 12;
        case 'J':
            return 11;
        default:
            return parseInt(string);
    }

}