const ship = require("./ship")
let gameBoard = () => {
    let board = [];
    let ships = [];
    for (let x = 0; x < 10; x++) {
        let row = [];
        for (let y = 0; y < 10; y++) {
            row.push({ hasShip: -1, attacked: false });
        }
        board.push(row);
    }
    placeShip = (start, length, isHorizontal) => {
        let shipToPlace = ship;
        ships.push(shipToPlace);
        if (isHorizontal) {
            for (let i = start[1]; i < length + start[1]; i++) {
                board[start[0]][i].con
            }
        }
    }
}