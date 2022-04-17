const player1 = new Player("player1", "X") 
const player2 = new Player("player2", "O")
let currentPlayer = player1;

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
    if(!gameBoard.spaces[(+id - 1)]){
        gameBoard.spaces[(+id - 1)] = currentPlayer
        event.target.innerText = currentPlayer.mark
        currentPlayer = currentPlayer == player1 ? player2 : player1;
    }
    }
    
    gameBoardArr.forEach((pos, index) => {
        pos.addEventListener("click", posclicked)
    })
    

})()


const displayController = (() => {


})()

