

const gameBoard = (() => {

    let gameBoardArr = []
    let board = document.querySelector("#game-board")
    let positionOne = gameBoardArr.push(document.querySelector(".one"))
    let positionTwo = gameBoardArr.push(document.querySelector(".two"))
    let positionThree = gameBoardArr.push(document.querySelector(".three"))
    let positionFour = gameBoardArr.push(document.querySelector(".four"))
    let positionFive = gameBoardArr.push(document.querySelector(".five"))
    let positionSix = gameBoardArr.push(document.querySelector(".six"))
    let positionSeven = gameBoardArr.push(document.querySelector(".seven"))
    let positionEight = gameBoardArr.push(document.querySelector(".eight"))
    let positionNine =gameBoardArr.push( document.querySelector(".nine"))
    
    const render = (e) => {
        board.appendChild(e.target.value)
    }

    gameBoardArr.forEach((pos, index) => {
        pos.addEventListener("click", render)
    })
    console.log(gameBoardArr)
    render()

})()

const game = (() => {
    console.log(gameBoard.gameBoardArr)
})()


const player = ((name) => {
    return {
        playerName : name,

    }
})

const displayController = (() => {


})()

