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
    computer_ships.push(shipFactory("Destroyer", 2));
    player_ships.push(shipFactory("Carrier", 5));
    player_ships.push(shipFactory('Battleship', 4));
    player_ships.push(shipFactory('Cruiser', 3));
    player_ships.push(shipFactory("Submarine", 3));
    player_ships.push(shipFactory("Destroyer", 2));
    const player_cells = document.querySelectorAll("#computer div");
    var computer_cells = [...document.querySelectorAll("#player div")];
    player_cells.forEach((player_cell) => player_cell.addEventListener("click", handleClick))
    function handleClick(e) {
        const a = [...e.target.classList];
        if (a.includes("taken")) {
            if (a.includes("notAttacked")) {
                e.target.classList.remove("notAttacked");
                e.target.classList.add("Attacked")
                e.target.style = "background:black"

                const info = document.getElementById("info");
                info.textContent = "INFO : You fire a shot into enemy waters ...... it's a hit!";
                const turn = document.getElementById("turn");
                turn.textContent = "TURN : COMPUTER";
                for (let i = 0; i < 5; i++) {
                    if (computer_ships[i].name == a[2]) {
                        computer_ships[i].hit();
                        console.log(computer_ships[i].hits, computer_ships[i].name)
                        break
                    }
                }
                for (let i = 0; i < 5; i++) {
                    if (!computer_ships[i].isSink()) {
                        return;
                    }
                }
                console.log("hi");
                alert("All ships were Destroyed by you");
                window.location.reload()
            }
            else {
                const info = document.getElementById("info");
                info.textContent = "INFO : THE LOCATION IS ALREADY ATTACKED";
                const turn = document.getElementById("turn");
                turn.textContent = "TURN : PLAYER"
            }
        }
        else {
            if (a.includes("notAttacked")) {
                e.target.classList.remove("notAttacked");
                e.target.classList.add("Attacked");
                const info = document.getElementById("info");
                info.textContent = "INFO : You fire a shot into enemy waters ...... it's a miss";
                const turn = document.getElementById("turn");
                turn.textContent = "TURN : COMPUTER"
                computer_moves();
            }
            else {
                const info = document.getElementById("info");
                info.textContent = "INFO : THE LOCATION IS ALREADY ATTACKED";
                const turn = document.getElementById("turn");
                turn.textContent = "TURN : PLAYER"
            }
        }
    }
    var computer_attacks = [];
    var computer_moves = () => {

        let x = Math.round(Math.random() * 99)
        while (computer_attacks.includes(x)) {
            x = Math.round(Math.random() * 99)
        }
        computer_attacks.push(x);
        let a = [...computer_cells[x].classList];
        if (a.includes("taken")) {
            computer_cells[x].classList.remove("notAttacked");
            computer_cells[x].classList.add("Attacked")
            computer_cells[x].style = "background:black"
            for (let i = 0; i < 5; i++) {
                if (player_ships[i].name == a[2]) {
                    player_ships[i].hit();
                    break
                }
            }
            for (let i = 0; i < 5; i++) {
                if (!player_ships[i].isSink()) {
                    const info = document.getElementById("info");
                    info.textContent = "INFO : Computer fire a shot into your waters ...... it's a hit!";
                    const turn = document.getElementById("turn");
                    turn.textContent = "TURN : PLAYER"
                    return;
                }
            }
            alert("All ships were Destroyed by Computer");
            window.location.reload()
        }
        else {
            computer_cells[x].classList.remove("notAttacked");
            computer_cells[x].classList.add("Attacked");
            const info = document.getElementById("info");
            info.textContent = "INFO : Computer fire a shot into your waters ...... it's a miss";
            const turn = document.getElementById("turn");
            turn.textContent = "TURN : PLAYER";
        }
    }
}
module.exports = Player;