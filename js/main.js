document.addEventListener("DOMContentLoaded", function(event) { 
    const resultScreen = document.getElementById('game-result');
    const playerScoreP = document.getElementById('player-score');
    const botScoreP = document.getElementById('bot-score');
    
    function computerPlay() {
        const randNumber = Math.floor(Math.random() * 3);
        switch (randNumber) {
            case 0:
                return 'rock';
                break;
            case 1:
                return 'paper';
                break;
            case 2:
                return 'scissors';
        }
    }
    
    function winLoseDraw(playerChoice) {
        const botChoice = computerPlay()
        if (playerChoice == 'rock') {
            switch (botChoice) {
                case 'rock':
                    return 'draw';
                case 'paper':
                    return 'lose';
                case 'scissors':
                    return 'win';
            }
        }
        else if (playerChoice == 'paper') {
            switch (botChoice) {
                case 'rock':
                    return 'win';
                case 'paper':
                    return 'draw';
                case 'scissors':
                    return 'lose';
            }
        }
        else {
            switch (botChoice) {
                case 'rock':
                    return 'lose';
                case 'paper':
                    return 'win';
                case 'scissors':
                    return 'draw';
            }
        }
    }
    
    function postGame(e) {
        switch (winLoseDraw(e.target.id)) {
            case 'win':
                playerScoreP.innerHTML = +playerScoreP.innerHTML + 1;
                resultScreen.innerHTML = 'You won!';
                break;
            case 'lose':
                botScoreP.innerHTML = +botScoreP.innerHTML + 1;
                resultScreen.innerHTML = 'You lost..';
                break;
            case 'draw':
                resultScreen.innerHTML = 'It\'s a draw!'
        }
        if (playerScoreP.innerHTML == '5') {
            alert('You won the match!')
            playerScoreP.innerHTML = '0';
            botScoreP.innerHTML = '0';
            resultScreen.innerHTML = 'Choose your pick!';
        }
        else if (botScoreP.innerHTML == '5') {
            alert('You lost the match..')
            playerScoreP.innerHTML = '0';
            botScoreP.innerHTML = '0';
            resultScreen.innerHTML = 'Choose your pick!';
        }
    }
    
    document.getElementById('rock').addEventListener('click', postGame)
    document.getElementById('paper').addEventListener('click', postGame)
    document.getElementById('scissors').addEventListener('click', postGame)
    // console.log(postGame('win'))
    
  });