
winLog = JSON.parse(localStorage.getItem('score')) || {
        Wins:0,
        Losses:0,
        Ties:0
    }
    display()

function playGame(playerPick){
    const compVal = computerValue()

    let result = ''

    if(playerPick === 'rock'){
        if(compVal === 'rock'){
        result = 'Tie!'
        }
        else if(compVal === 'paper'){
            result = 'You lose!'
        }
        else if (compVal === 'scissors'){
            result = 'You win!'
        }


    }else if(playerPick === 'paper'){
        if(compVal === 'rock'){
            result = 'You win!'      
        }
        else if(compVal === 'paper'){
            result = 'Tie!'
        }
        else if (compVal === 'scissors'){
            result = 'You win!'
        }


    }else if(playerPick === 'scissors'){
        if(compVal === 'rock'){
            result = 'You lose!'

        }else if(compVal === 'paper'){
            result = 'You win!'

        }else if(compVal === 'scissors'){
            result = 'Tie!'
        }
    }
    if (result === 'You Win'){
        winLog.Wins += 1
    }else if(result === 'You lose'){
        winLog.Losses += 1
    }else if(result === 'Tie'){
        winLog.Ties +=1
    }
    localStorage.setItem('score',JSON.stringify(winLog))

    
    display()
    document.querySelector('.result').innerHTML = result
    document.querySelector('.moves').innerHTML = `You = ${playerPick} ||{<<:::::>>}|| Computer = ${compVal}`

}

function computerValue(){
    const num = Math.random()
    let compVal = ''
    if(num > 0 && num < 1/3){
        compVal = 'rock'
    }
    else if(num >1/3 && num < 2/3){
        compVal = 'paper'
    }
    else {
        compVal = 'scissors'
    }
    return compVal;
}   

function clearfn(){

    winLog.Wins = 0;
    winLog.Losses = 0;
    winLog.Ties = 0
    
    localStorage.removeItem('score')
    display ()
    document.querySelector('.moves').innerHTML = ''
    document.querySelector('.result').innerHTML = ''

}
function display(){

        document.querySelector('.winLog').innerHTML = `Win Log : Wins: ${winLog.Wins} , Losses: ${winLog.Losses} , Ties: ${winLog.Ties}`

    

}
