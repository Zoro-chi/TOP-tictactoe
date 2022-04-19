let resetbtn = document.querySelector(".reset")
let turn = document.querySelector(".turn")
const player1 = new Player("player1", "X") 
const player2 = new Player("player2", "O")
let currentPlayer = player1
turn.innerText = `${currentPlayer.name}`

const gameBoard = (() => {

    let gameBoardArr = []
    let spaces = [null, null, null, null, null, null, null, null, null]
    const board = document.querySelector("#game-board")
    let positionOne = gameBoardArr.push(document.querySelector(".one"))
    let positionTwo = gameBoardArr.push(document.querySelector(".two"))
    let positionThree = gameBoardArr.push(document.querySelector(".three"))
    let positionFour = gameBoardArr.push(document.querySelector(".four"))
    let positionFive = gameBoardArr.push(document.querySelector(".five"))
    let positionSix = gameBoardArr.push(document.querySelector(".six"))
    let positionSeven = gameBoardArr.push(document.querySelector(".seven"))
    let positionEight = gameBoardArr.push(document.querySelector(".eight"))
    let positionNine =gameBoardArr.push( document.querySelector(".nine"))
    
    return {gameBoardArr, spaces}
})()

function Player(name, mark){
    this.name = name
    this.mark = mark
}

const game = (() => {
    const gameBoardArr = gameBoard.gameBoardArr
    let player1Wins = document.querySelector(".p1wins")
    let player2Wins = document.querySelector(".p2wins")
    let winningPlayer;

    
    const reset = () =>{
        gameBoard.spaces = [null, null, null, null, null, null, null, null, null]
        gameBoardArr.forEach(pos => pos.innerText = "")
        gameBoardArr.forEach(pos => pos.style.backgroundColor = "initial")
        currentPlayer = player1
        turn.innerText = `${currentPlayer.name}`
        turn.style.backgroundColor = ""
        gameBoardArr.forEach((pos, index) => {
            pos.addEventListener("click", posclicked)
        })
    }
    const hardReset = () =>{
        gameBoard.spaces = [null, null, null, null, null, null, null, null, null]
        gameBoardArr.forEach(pos => pos.innerText = "")
        gameBoardArr.forEach(pos => pos.style.backgroundColor = "initial")
        currentPlayer = player1
        turn.innerText = `${currentPlayer.name}`
        turn.style.backgroundColor = ""
        player1Wins.innerText = ""
        player2Wins.innerText = ""

    }
    resetbtn.addEventListener("click", hardReset)

    const posclicked = (event) => {
        const id = event.target.dataset.position
        const playerHasWon = () =>{
            if (gameBoard.spaces[0] === currentPlayer.mark) {
                if (gameBoard.spaces[1] == currentPlayer.mark && gameBoard.spaces[2] == currentPlayer.mark){
                    winningPlayer = currentPlayer.name
                    if (winningPlayer == player1.name){
                        gameBoardArr[0].style.backgroundColor = "red"
                        gameBoardArr[1].style.backgroundColor = "red"
                        gameBoardArr[2].style.backgroundColor = "red"
                    }
                    if (winningPlayer == player2.name){
                        gameBoardArr[0].style.backgroundColor = "blue"
                        gameBoardArr[1].style.backgroundColor = "blue"
                        gameBoardArr[2].style.backgroundColor = "blue"
                    }
                    return turn.innerText = `${currentPlayer.name} wins up top`
                }
                if (gameBoard.spaces[3] == currentPlayer.mark && gameBoard.spaces[6] == currentPlayer.mark){
                    winningPlayer = currentPlayer.name
                    if (winningPlayer == player1.name){
                        gameBoardArr[0].style.backgroundColor = "red"
                        gameBoardArr[3].style.backgroundColor = "red"
                        gameBoardArr[6].style.backgroundColor = "red"
                    }
                    if (winningPlayer == player2.name){
                        gameBoardArr[0].style.backgroundColor = "blue"
                        gameBoardArr[3].style.backgroundColor = "blue"
                        gameBoardArr[6].style.backgroundColor = "blue"
                    }
                    return turn.innerText = `${currentPlayer.name} wins on the left`
                }
                if (gameBoard.spaces[4] == currentPlayer.mark && gameBoard.spaces[8] == currentPlayer.mark){
                    winningPlayer = currentPlayer.name
                    if (winningPlayer == player1.name){
                        gameBoardArr[0].style.backgroundColor = "red"
                        gameBoardArr[4].style.backgroundColor = "red"
                        gameBoardArr[8].style.backgroundColor = "red"
                    }
                    if (winningPlayer == player2.name){
                        gameBoardArr[0].style.backgroundColor = "blue"
                        gameBoardArr[4].style.backgroundColor = "blue"
                        gameBoardArr[8].style.backgroundColor = "blue"
                    }
                    return turn.innerText = `${currentPlayer.name} wins diagonally`
                }
            }
            if (gameBoard.spaces[8] === currentPlayer.mark){
                if (gameBoard.spaces[2] == currentPlayer.mark && gameBoard.spaces[5] == currentPlayer.mark){
                    winningPlayer = currentPlayer.name
                    if (winningPlayer == player1.name){
                        gameBoardArr[8].style.backgroundColor = "red"
                        gameBoardArr[2].style.backgroundColor = "red"
                        gameBoardArr[5].style.backgroundColor = "red"
                    }
                    if (winningPlayer == player2.name){
                        gameBoardArr[8].style.backgroundColor = "blue"
                        gameBoardArr[2].style.backgroundColor = "blue"
                        gameBoardArr[5].style.backgroundColor = "blue"
                    }
                    return turn.innerText = `${currentPlayer.name} wins on the right`
                }
                if (gameBoard.spaces[6] == currentPlayer.mark && gameBoard.spaces[7] == currentPlayer.mark){
                    winningPlayer = currentPlayer.name
                    if (winningPlayer == player1.name){
                        gameBoardArr[8].style.backgroundColor = "red"
                        gameBoardArr[6].style.backgroundColor = "red"
                        gameBoardArr[7].style.backgroundColor = "red"
                    }
                    if (winningPlayer == player2.name){
                        gameBoardArr[8].style.backgroundColor = "blue"
                        gameBoardArr[6].style.backgroundColor = "blue"
                        gameBoardArr[7].style.backgroundColor = "blue"
                    }
                    return turn.innerText = `${currentPlayer.name} wins on the bottom`
                }
                
            }
            if (gameBoard.spaces[4] === currentPlayer.mark) {
                if (gameBoard.spaces[3] == currentPlayer.mark && gameBoard.spaces[5] == currentPlayer.mark){
                    winningPlayer = currentPlayer.name
                    if (winningPlayer == player1.name){
                        gameBoardArr[4].style.backgroundColor = "red"
                        gameBoardArr[3].style.backgroundColor = "red"
                        gameBoardArr[5].style.backgroundColor = "red"
                    }
                    if (winningPlayer == player2.name){
                        gameBoardArr[4].style.backgroundColor = "blue"
                        gameBoardArr[3].style.backgroundColor = "blue"
                        gameBoardArr[5].style.backgroundColor = "blue"
                    }
                    return turn.innerText = `${currentPlayer.name} wins in the middle`
                }
                if (gameBoard.spaces[1] == currentPlayer.mark && gameBoard.spaces[7] == currentPlayer.mark){
                    winningPlayer = currentPlayer.name
                    if (winningPlayer == player1.name){
                        gameBoardArr[4].style.backgroundColor = "red"
                        gameBoardArr[1].style.backgroundColor = "red"
                        gameBoardArr[7].style.backgroundColor = "red"
                    }
                    if (winningPlayer == player2.name){
                        gameBoardArr[4].style.backgroundColor = "blue"
                        gameBoardArr[1].style.backgroundColor = "blue"
                        gameBoardArr[7].style.backgroundColor = "blue"
                    }
                    return turn.innerText = `${currentPlayer.name} wins in the middle`
                }
            }
            if (gameBoard.spaces[2] === currentPlayer.mark) {
                if (gameBoard.spaces[4] == currentPlayer.mark && gameBoard.spaces[6] == currentPlayer.mark){
                    winningPlayer = currentPlayer.name
                    if (winningPlayer == player1.name){
                        gameBoardArr[2].style.backgroundColor = "red"
                        gameBoardArr[4].style.backgroundColor = "red"
                        gameBoardArr[6].style.backgroundColor = "red"
                    }
                    if (winningPlayer == player2.name){
                        gameBoardArr[2].style.backgroundColor = "blue"
                        gameBoardArr[4].style.backgroundColor = "blue"
                        gameBoardArr[6].style.backgroundColor = "blue"
                    }
                    return turn.innerText = `${currentPlayer.name} wins diagonally`
                }
            }
        }
        if(!gameBoard.spaces[(+id - 1)]){
            gameBoard.spaces[(+id - 1)] = currentPlayer.mark
            event.target.innerText = currentPlayer.mark
            
            if(playerHasWon()) {
                gameBoardArr.forEach(pos => pos.removeEventListener("click", posclicked))
                winningPlayer = currentPlayer.name
                let winColor;
                if (winningPlayer === "player1"){
                        player1Wins.innerText = Number(player1Wins.innerText) + 1
                        winColor = "red"
                    }
                if (winningPlayer === "player2"){
                        player2Wins.innerText = Number(player2Wins.innerText) + 1
                        winColor = "blue"
                    }
                setTimeout(reset, 3000)
                return turn.style.backgroundColor = winColor
                
            }
            currentPlayer = currentPlayer === player1 ? player2 : player1;
            turn.innerText = `${currentPlayer.name}`
        }
        
    }
    
    gameBoardArr.forEach((pos, index) => {
        pos.addEventListener("click", posclicked)
    })

})()



