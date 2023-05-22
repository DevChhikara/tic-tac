const gameData=[
    [0,0,0],
    [0,0,0],
    [0,0,0],
];
let currentRound=1;
let gameOver=false;

let editedPlayer=0;
let activePlayer=0;
const players=[
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];
const startNewGameBtnElement=document.getElementById('start-game-btn');
const playerConfigOverlayElement=document.getElementById('config-overlay');
const backdropElement=document.getElementById('backdrop');
const formElement=document.querySelector('form');

const editPlayer1BtnElement=document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement=document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement=document.getElementById('cancel-config-btn');
const errorsOutputElemnt=document.getElementById('config-errors');
const gameAreaElement=document.getElementById('active-game');
const gameFieldElements=document.querySelectorAll('#game-board');
const activePlayerNameElement=document.getElementById('active-player-name');
const gameOverElement=document.getElementById('game-over');
const gameBoardElement=document.getElementById('game-board');

editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);
cancelConfigBtnElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);
startNewGameBtnElement.addEventListener('click',startNewGame);

for(const gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener('click',selectGameField);
}
