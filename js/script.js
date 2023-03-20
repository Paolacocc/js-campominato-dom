//-------primo giorno
//trovo il bottone
document.querySelector(".start-btn").addEventListener("click", gameStarter);


/**
 * Description funzione che crea la griglia quando premi il bottone
 * @returns {any}
 */
function gameStarter() {
    //seleziono la grid 
    const gridElem = document.querySelector(".grid");
    gridElem.innerHTML = "";
    const welcomeText = document.querySelector("h2");

    welcomeText.classList.add("hidden")
    gridElem.classList.remove('hidden');


    //genero le caselle della griglia

    for (let i = 1; i <= 100; i++) {
        const numbers = i;
        //richiamo la funzione
        const newGrid = generateGridElements(numbers);
        //stampo la griglia
        newGrid.addEventListener('click', clickGenerator)
        gridElem.append(newGrid);
    
    }

    const bombs = generetedBombs(16, gridElem);
    console.log(bombs);
}


//function genera elementi html
function generateGridElements(text) {
    const square = document.createElement ("div");
    square.classList.add('grid-items');
    square.innerHTML = `<span>${text}</span>`;
    return square;

}

//function al CLICK colora le celle
function clickGenerator() {
    this.classList.add("selected");
    const clickedNum = this.querySelector("span").textContent;
    console.log(clickedNum);
}

//-------secondo giorno
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// [23, 65, 1, 4,78,15,....];
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

function generetedBombs(numbersTot, maxNum) {
    const randomBombs = [];
    while (randomBombs.length < numbersTot) {
        const randomNum = getRndInteger(1, maxNum);
        if (!randomBombs.includes(randomNum)) {
            randomBombs.push(randomNum)
        }
    }
    return randomBombs;

}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
