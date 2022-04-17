

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
    
    console.log(gameBoardArr[0].dataset.position)
    return {gameBoardArr, spaces}
})()

function Player(name, sign){
    this.name = name
    this.sign = sign
}
Player.prototype.move = () => {
    let posclicked = (e) =>{
        const dataPos = e.target.dataset.position
        console.log("X")
    for (let pos of gameBoard.gameBoardArr) {
        pos.addEventListener("click", posclicked)
    }
    
}
}


const game = (() => {
    const gameBoardArr = gameBoard.gameBoardArr
    const player1 = new Player("player1", "X") 
    const player2 = new Player("player2", "O")
    let currentPlayer = player1;
    console.log(player1)
    console.log(currentPlayer)
    
    gameBoardArr.forEach((pos, index) => {
        pos.addEventListener("click", currentPlayer.move)
    })


})()


const displayController = (() => {


})()

