import _ from 'underscore';
import { createDeck, getValueCard, getCard, getWinner } from './usecases';
 
let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

let pointsPlayers = [];

const btnStopGame = document.querySelector('#btnStop'),
    btnGet = document.querySelector("#btnGet"),
    btnNewGame = document.querySelector('#btnNewGame');

const divCardsPlayers = document.querySelectorAll('.divCards'),
    pointsHtml = document.querySelectorAll('small');


const initGame = (numPlayers = 2) =>{
    deck = createDeck(types, specials);   
    pointsPlayers = [];

    for(let i = 0; i<numPlayers; i++){
        pointsPlayers.push(0);
    }

    pointsHtml.forEach(element => element.innerText = 0);
    divCardsPlayers.forEach(element => element.innerHTML = '');

    btnGet.disabled = false;
    btnStopGame.disabled = false;
}
    

const accumulatePoints = (card, turn) =>{
    pointsPlayers[turn] = pointsPlayers[turn] + getValueCard(card);
    pointsHtml[turn].innerText = pointsPlayers[turn];

    return pointsPlayers[turn];
}

const createCard = (card, turn) =>{
    const imgCard = document.createElement('img');
    imgCard.src =  `assets/cartas/${ card }.png`;
    imgCard.classList.add('carta');
    divCardsPlayers[turn].append(imgCard);
}


const turnComputer = (minpoints) =>{
    let pointsComputer = 0;

    do{
        const card = getCard(deck);
        pointsComputer = accumulatePoints(card, pointsPlayers.length-1);
        createCard(card, pointsPlayers.length-1);

    }while( (pointsComputer < minpoints) && (minpoints <= 21) );

    getWinner(pointsPlayers);
}  


btnGet.addEventListener('click', () =>{
    const card = getCard(deck);
    const pointsPlayer = accumulatePoints(card, 0);

    createCard(card, 0);

    if(pointsPlayer > 21){
        btnGet.disabled = true;
        btnStopGame.disabled = true;
        turnComputer(pointsPlayer);
    }
    else if(pointsPlayer === 21){
        btnGet.disabled = true;
        btnStopGame.disabled = true;
        turnComputer(pointsPlayer);
    }
});

btnStopGame.addEventListener ('click', () =>{
    btnGet.disabled = true;
    btnStopGame.disabled = true;

    turnComputer(pointsPlayers[0]);
});

btnNewGame.addEventListener('click', ()=>{
    initGame(2);
});



