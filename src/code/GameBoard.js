const GameBoard = document.createElement("div");
GameBoard.style = "display:flex;justify-content:space-around; height:150px";
function createGameBoard(user, color) {
    const temp = document.createElement('div');
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement("div");
        temp.appendChild(cell);
        cell.style.border = "1px solid black";
        cell.classList.add('cell', "notTaken");
        cell.id = `${i}`
    }
    temp.id = `${user}`
    temp.style = `display: grid;background: ${color};grid-template-columns: repeat(10,1fr);width: 150px;`;
    return temp;
}
const player_board = createGameBoard("player", "yellow");
const computer_board = createGameBoard("computer", "pink");
GameBoard.appendChild(player_board);
GameBoard.appendChild(computer_board);
module.exports = GameBoard;