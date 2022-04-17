

const gameBoard = (() => {

    let gameBoardArr = []
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
    
    console.log(gameBoardArr)
    return {gameBoardArr}
})()


const player = ((name, sign) => {
    const boardMove = () => {
    for (let pos of gameBoard.gameBoardArr) {
        pos.addEventListener('click', function(event) {
        event.target.innerText = "X"
        })
    }
    return {
        name,
        sign,
        boardMove
    }
}})


const game = (() => {
    const gameBoardArr = gameBoard.gameBoardArr

    const player1 = player("player1", "X") 
    const player2 = player("player2", "O")

    console.log(player1)

    const playerMove = () => {
        let turn = true;

        function markBoard() {
            if (turn) {
                turn = false;
                return player1.boardMove()
            } else {
                turn = true;
                return player2.boardMove()
            }
        }
        markBoard()
        return{player1, player2, markBoard}
    }

    playerMove()
    
    // const classX = "X"
    // const classO = "O"

    // const paste = (event) =>{
    //     if (event.target.innerText === classX) {
    //         event.target.innerText = classO
    //     } else {
    //         event.target.innerText = classX
    //     }
        
    // }

    // gameBoardArr.forEach(pos => {
    //     pos.addEventListener("click", paste)
    // })
})()


const displayController = (() => {


})()

