const GameBoard = require("./GameBoard")
const shipFactory = require("./ship")
const ui = () => {
    const content = document.querySelector("#content");
    const header = document.createElement("div")
    var main = document.createElement("div")
    const footer = document.createElement("div")
    content.style = "display: grid;height: 100vh;width: 100vw;margin: 0%;padding: 0%;";
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
    /* header */
    const header_h1 = document.createElement("h1");
    header_h1.textContent = "BATTLESHIP"
    header_h1.style = "margin:0%"
    header.style = "text-align: center;border: 1px solid black;background: burlywood;";
    header.appendChild(header_h1);
    /* footer */
    const footer_h3 = document.createElement("h3");
    const footer_a = document.createElement("a");
    footer_a.href = "https://github.com/Reddyveerendra";
    footer_h3.textContent = "Copyright © 2023 Reddyveerendra";
    footer_h3.style = "margin:0%"
    footer.style = "text-align: center;border: 1px solid black;background: burlywood;";
    footer_a.appendChild(footer_h3);
    footer_a.style = "color: black;text-decoration-line: none;"
    footer.appendChild(footer_a);
    /* main */
    const Turn = document.createElement("p");
    Turn.id = "turn";
    Turn.style = "margin:0%;margin-left:2%"
    Turn.textContent = "TURN :"
    const info = document.createElement("p");
    info.id = "info";
    info.style = "margin:0%;margin-left:2%";
    info.textContent = "INFO :"
    main.appendChild(Turn);
    main.appendChild(info)
    const headerGameBoard = document.createElement("div");
    headerGameBoard.style = "display:flex; justify-content:space-around;"
    const header_computer = document.createElement("h3");
    header_computer.textContent = "COMPUTER";
    header_computer.style = "margin:0"
    const header_player = document.createElement("h3");
    header_player.style = "margin:0"
    header_player.textContent = "PLAYER";
    headerGameBoard.appendChild(header_player);
    headerGameBoard.appendChild(header_computer);
    main.appendChild(headerGameBoard);
    /** GAME BOARD */
    main.appendChild(GameBoard);
    /** OPTION CONTAINER */
    const option_container = document.createElement("div");
    const buttons = document.createElement("div");
    option_container.style = "background: yellow;height: 100px;margin: 3%;align-items: center;display: flex;justify-content: center;";
    const flip = document.createElement("input");
    flip.value = "FLIP";
    flip.type = "button"
    const start = document.createElement("input");
    start.value = "START";
    start.style = "margin:2%;";
    flip.style = 'margin:2%;';
    var flipper = false;
    flip.onclick = function flipOptions() {
        const optionShips = [...option_container.children];
        if (!flipper) {
            optionShips.forEach((optionShip) => (optionShip.style.transform = "rotate(90deg)"));
            flipper = !flipper
        }
        else {
            optionShips.forEach((optionShip) => (optionShip.style.transform = "rotate(0deg)"));
            flipper = !flipper
        }
    }
    const end = document.createElement("div");
    main.appendChild(option_container);
    main.appendChild(flip);
    main.appendChild(start);
    /* options */
    option_container.classList.add("option_container");
    const Carrier = shipFactory("Carrier", 5);
    const Battleship = shipFactory('Battleship', 4);
    const Cruiser = shipFactory('Cruiser', 3);
    const Submarine = shipFactory("Submarine", 3);
    const Destroyer = shipFactory("Destroyer", 2);
    function shipMaker(name) {
        const div = document.createElement("div");
        div.classList.add(name, `${name}-preview`);
        option_container.appendChild(div);
        div.draggable = true;
    }
    shipMaker('carrier');
    shipMaker('battleship');
    shipMaker('cruiser');
    shipMaker('submarine');
    shipMaker('destroyer');
    /* ships computer */
    let carrier = new shipFactory('carrier', 5);
    let battleship = new shipFactory('battleship', 4);
    let cruiser = new shipFactory('cruiser', 3);
    let submarine = new shipFactory('submarine', 3);
    let destroyer = new shipFactory('destroyer', 2);
    let computer_ships = [carrier, battleship, cruiser, submarine, destroyer];
    let computer_space = document.querySelectorAll("#computer .cell");
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
}
module.exports = ui; 