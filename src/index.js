let shipFactory = require("./code/ship")
const flipButton = document.querySelector("#Flip-button");
const optionContainer = document.querySelector(".option-container");
const gamesBoardContainer = document.querySelector("#gamesboard-container")
function flip() {
    const optionShips = [...optionContainer.children];
    if (!flipper) {
        optionShips.forEach((optionShip) => (optionShip.style.transform = "rotate(90deg)"));
        flipper = !flipper
    }
    else {
        optionShips.forEach((optionShip) => (optionShip.style.transform = "rotate(0deg)"));
        flipper = !flipper
    }
}
var flipper = false;
function createBoard(color, user) {
    const gameBoardContainer = document.createElement("div");
    gameBoardContainer.classList.add("game-board");
    gameBoardContainer.style = `display: grid;grid-template-columns: repeat(10,1fr);background:${color}`
    gamesBoardContainer.appendChild(gameBoardContainer)
    gameBoardContainer.id = user;
    for (let i = 0; i < 100; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.id = i;
        gameBoardContainer.append(block);
    }
}
createBoard('yellow', "player");
createBoard('pink', 'computer');
flipButton.addEventListener("click", flip)

/* ships computer */
let carrier = new shipFactory('carrier', 5);
let battleship = new shipFactory('battleship', 4);
let cruiser = new shipFactory('cruiser', 3);
let submarine = new shipFactory('submarine', 3);
let destroyer = new shipFactory('destroyer', 2);
let computer_ships = [carrier, battleship, cruiser, submarine, destroyer];
let computer_space = document.querySelectorAll("#computer .block");
let x = Math.round(Math.random() * 5)
var j = 0;
let preplans = [[[0, 1, 2, 3, 4], [96, 97, 98, 99], [90, 80, 70], [9, 19, 29], [48, 49]], [[10, 11, 12, 13, 14], [26, 27, 28, 29], [30, 40, 50], [49, 59, 69], [88, 98]], [[0, 1, 2, 3, 4], [26, 27, 28, 29], [10, 20, 30], [49, 59, 69], [78, 79]], [[90, 91, 92, 93, 94], [26, 27, 28, 29], [10, 20, 30], [49, 59, 69], [78, 79]], [[50, 51, 52, 53, 54], [6, 7, 8, 9], [10, 20, 30], [49, 59, 69], [84, 85]], [[52, 53, 54, 55, 56], [6, 7, 8, 9], [10, 20, 30], [49, 59, 69], [84, 85]]]
computer_ships.forEach((computer_ship) => {
    let pos = preplans[x][j]
    for (let i = 0; i < computer_ship.length; i++) {
        computer_space[pos[i]].classList.add(computer_ship.name)
        computer_space[pos[i]].classList.add('taken')
    }
    return j += 1;
})

/* player */
let draggedShip;
const option_ships = [...optionContainer.children]
option_ships.forEach(option_ship => option_ship.addEventListener("dragstart", dragStart))
const player_spaces = document.querySelectorAll("#player div")
player_spaces.forEach((player_space) => {
    player_space.addEventListener('dragover', dragOver);
    player_space.addEventListener('drop', dropShip);
})
function dragStart(e) {
    draggedShip = e.target;
    notDropped = false;
}
function dragOver(e) {
    e.preventDefault()
}
function dropShip(e) {
    const startId = e.target.id;
    const ship = computer_ships[draggedShip.id];
    userAddShip(ship, startId);
    if (!notDropped) {
        draggedShip.remove()
        console.log([...optionContainer.children].length)
    }
}
function userAddShip(ship, startId) {
    if (!flipper) {
        if (startId % 10 < 5) {
            for (let i = startId; i < parseInt(startId) + ship.length; i++) {
                player_spaces[i].classList.add(ship.name)
                player_spaces[i].classList.add('taken')
            }
        }
        else {
            for (let i = parseInt(startId) - ship.length + 1; i < parseInt(startId) + 1; i++) {
                player_spaces[i].classList.add(ship.name)
                player_spaces[i].classList.add('taken')
            }
        }
    }
    else {
        if (startId / 10 < 5) {
            let i = parseInt(startId)
            while (i < i + (ship.length * 10)) {
                player_spaces[i].classList.add(ship.name)
                player_spaces[i].classList.add('taken')
                i = i + 10;
            }
        }
        else {
            let i = parseInt(startId) - ship.length * 10 + 10
            while (i < parseInt(startId) + 10) {
                player_spaces[i].classList.add(ship.name)
                player_spaces[i].classList.add('taken')
                i = i + 10;
            }
        }
    }
}