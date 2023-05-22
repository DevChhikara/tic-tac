function resetGameStatus(){
    activePlayer=0;
    currentRound=1;
    gameOverElement.firstElementChild.innerHTML='<h2>YOU WON!! <span id="winner-name">PLAYERNAME</span></h2>';
    gameOverElement.style.display='none';
    let gameBoardIndex=0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            gameData[i][j]=0;
            gameBoardElement.children[gameBoardIndex].textContent='';
            gameBoardElement.children[gameBoardIndex].classList.remove('disabled');
            gameBoardIndex++;
        }
    }
    gameOver=false;
}

function startNewGame(){
    if(players[0].name==='' || players[1].name===''){
        alert("Please Set Name For Users");
        return;
    }

    resetGameStatus();

    activePlayerNameElement.textContent=players[activePlayer].name;
    gameAreaElement.style.display='block';
}

function checkForGameOver(){
    for(let i=0;i<3;i++){
        if(gameData[i][0]>0 && gameData[i][0]===gameData[i][1] && gameData[i][1]===gameData[i][2]){
            return gameData[i][0];
        }
    }
    for(let i=0;i<3;i++){
        if(gameData[0][i]>0 && gameData[0][i] === gameData[1][i] && gameData[0][i] === gameData[2][i]){
            return gameData[0][i];
        }
    }
    if(gameData[0][0]>0 && gameData[0][0]===gameData[1][1] && gameData[1][1]===gameData[2][2]){
        return gameData[0][0];
    }
    if(gameData[0][2]>0 && gameData[0][2]===gameData[1][1] && gameData[1][1]===gameData[2][0]){
        return gameData[0][2];
    }
    if(currentRound===9){
        return -1;
    }
    return 0;
}

function switchPLayer(){
    if(activePlayer===0){
        activePlayer=1;
    }
    else{
        activePlayer=0;
    }
    activePlayerNameElement.textContent=players[activePlayer].name;
}

function selectGameField(event){
    if(gameOver){
        return;
    }
    const selectedField=event.target;
    const selectedColumn=selectedField.dataset.col-1;
    const selectedRow=selectedField.dataset.row-1;

    if(gameData[selectedRow][selectedColumn] > 0){
        alert('Select another field');
        return;
    }
    event.target.textContent=players[activePlayer].symbol;
    event.target.classList.add('disabled');


    gameData[selectedRow][selectedColumn]=activePlayer+1;


    const winnerId=checkForGameOver();
    if(winnerId!==0){
        endGame(winnerId);
    }
    currentRound++;
    switchPLayer();
}

function endGame(winnerId){
    gameOver=true;
    gameOverElement.style.display='block';
    if(winnerId>0){
        gameOverElement.firstElementChild.firstElementChild.textContent=players[winnerId-1].name;
    }
    else{
        gameOverElement.firstElementChild.textContent="It's a draw";
    }
}