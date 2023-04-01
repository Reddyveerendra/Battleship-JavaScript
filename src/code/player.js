const shipFactory = require("./ship")
const Player = () => {
    const button = document.getElementById("start");
    button.onclick = "";
    const computer_ships = [];
    const player_ships = [];
    computer_ships.push(shipFactory("Carrier", 5));
    computer_ships.push(shipFactory('Battleship', 4));
    computer_ships.push(shipFactory('Cruiser', 3));
    computer_ships.push(shipFactory("Submarine", 3));
    player_ships.push(shipFactory("Destroyer", 2));
    player_ships.push(shipFactory("Carrier", 5));
    player_ships.push(shipFactory('Battleship', 4));
    player_ships.push(shipFactory('Cruiser', 3));
    player_ships.push(shipFactory("Submarine", 3));
    player_ships.push(shipFactory("Destroyer", 2));
    console.log("hi")
    const player_cells = document.querySelectorAll("#player div")
    player_cells.forEach((player_cell) => player_cell.addEventListener("click", handleClick))
    function handleClick(e) {
        const a = [...e.target.classList];
        if (a.includes("taken")) {
            computer_ships[0].hit();
            player_ships[1].hit();
            console.log(computer_ships[0].hits, player_ships[0].hits)
            console.log(computer_ships[1].hits, player_ships[1].hits)
        }
    }
}
module.exports = Player;