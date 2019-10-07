/*
- the game has two players,playing in rounds
- in each turn,a player can roll a dice as many times as he wishes,Each result gets added to his ROUNDSCORE.
- but if the player rolls a 1,all his ROUNDSCORE gets lost.after that,it is the next players turn.
- the player can choose to 'HOLD',which means that his roundscore gets added to his global score,after that it is the next players turn.
- the first player to reach the 100 points in global score wins the game.
*/
var scores,roundScore,activePlayer,randomNumber,gameOn;

//********** game    initialization****************
    
init();

// **************function roll****

document.querySelector('.btn-roll').addEventListener('click',function(){
     
    if(gameOn){
        
    }

    //     random number generation
    randomNumber = Math.floor(Math.random() * 6) + 1;
    
    //display the dice image as result
    
    var diceImage = document.querySelector('.dice-img');
    diceImage.style.display = 'block';
     
    
    diceImage.src = `./images/dice${randomNumber}.png`;
    if(randomNumber !== 1){
        roundScore += randomNumber;
        document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
    }
    else{
        //   **next player ****
        nextPlayer();
       
//        document.querySelector('.player-0-panel').classList.remove('active');
//        document.querySelector('.player-0-panel').classList.add('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        diceImage = document.querySelector('.dice-img');
        diceImage.style.display = 'none';
    }
    
    
    
});
//         ***function hold   ***************

document.querySelector('.btn-hold').addEventListener('click',function(){
    //  ****add current score to global score***
    scores[activePlayer] += roundScore;
    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
    
    //*********** if player won the game****
    if(scores[activePlayer] >= 30){
        document.querySelector(`#name-${activePlayer}`).textContent = 'WINNER!!';
        document.querySelector('.dice-img').style.display = 'none';
        document.querySelector(`.player-${activePlayer-panel}`).classList.remove('active');
        document.querySelector(`.player-${activePlayer-panel}`).classList.add('winner');
        
        
    }else{
        //*********next player*****
        nextPlayer();
    }
})


//************* function NEW**************

document.querySelector('.btn-new').addEventListener('click',init);


//**************initialisation function************

function init(){
     scores = [0,0];
 roundScore = 0;
activePlayer = 0;
     document.querySelector('.dice-img').style.display = 'none';
     document.getElementById(`score-0`).textContent = '0';
    document.getElementById(`score-1`).textContent = '0';
    document.getElementById(`current-0`).textContent = '0';
    document.getElementById(`current-1`).textContent = '0';
    document.querySelector(`#name-0`).textContent = 'PLAYER1';
    document.querySelector(`#name-1`).textContent = 'PLAYER 2';
    document.querySelector('.player-0-panel').classList.remove('winner');document.querySelector('.player-1-panel').classList.remove('winner');document.querySelector('.player-0-panel').classList.remove('active');document.querySelector('.player-1-panel').classList.remove('active');document.querySelector('.player-0-panel').classList.add('active');
}




// ************NEXT PLAYER FUNCTION*************

function nextPlayer(){
     activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
         roundScore = 0;
        document.getElementById(`current-0`).textContent = '0';
        document.getElementById(`current-1`).textContent = '0';
}
