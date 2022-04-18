let turn = document.querySelector(".turn")
const player1 = new Player("player1", "X") 
const player2 = new Player("player2", "O")
let currentPlayer = player1
turn.innerText = `${currentPlayer.name}`

const gameBoard = (() => {

    let gameBoardArr = []
    const spaces = [null, null, null, null, null, null, null, null, null]
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
    
    const posclicked = (event) => {
        const id = event.target.dataset.position
        const playerHasWon = () =>{
            if (gameBoard.spaces[0] === currentPlayer.mark) {
                if (gameBoard.spaces[1] == currentPlayer.mark && gameBoard.spaces[2] == currentPlayer.mark){
                    return turn.innerText = `${currentPlayer.name} wins up top`
                }
                if (gameBoard.spaces[3] == currentPlayer.mark && gameBoard.spaces[6] == currentPlayer.mark){
                    return turn.innerText = `${currentPlayer.name} wins on the left`
                }
                if (gameBoard.spaces[4] == currentPlayer.mark && gameBoard.spaces[8] == currentPlayer.mark){
                    return turn.innerText = `${currentPlayer.name} wins diagonally`
                }
            }
            if (gameBoard.spaces[8] === currentPlayer.mark){
                if (gameBoard.spaces[2] == currentPlayer.mark && gameBoard.spaces[5] == currentPlayer.mark){
                    return turn.innerText = `${currentPlayer.name} wins on the right`
                }
                if (gameBoard.spaces[6] == currentPlayer.mark && gameBoard.spaces[7] == currentPlayer.mark){
                    return turn.innerText = `${currentPlayer.name} wins on the bottom`
                }
            }
            if (gameBoard.spaces[4] === currentPlayer.mark) {
                if (gameBoard.spaces[3] == currentPlayer.mark && gameBoard.spaces[5] == currentPlayer.mark){
                    return turn.innerText = `${currentPlayer.name} wins in the middle`
                }
                if (gameBoard.spaces[1] == currentPlayer.mark && gameBoard.spaces[7] == currentPlayer.mark){
                    return turn.innerText = `${currentPlayer.name} wins in the middle`
                }
            }
        }
        if(!gameBoard.spaces[(+id - 1)]){
            gameBoard.spaces[(+id - 1)] = currentPlayer.mark
            event.target.innerText = currentPlayer.mark

            if(playerHasWon()) {
                return turn.style.backgroundColor = "red"
            }
            currentPlayer = currentPlayer == player1 ? player2 : player1;
            turn.innerText = `${currentPlayer.name}`
        }
        
    }
    
    gameBoardArr.forEach((pos, index) => {
        pos.addEventListener("click", posclicked)
    })
    

})()


const displayController = (() => {


})()

