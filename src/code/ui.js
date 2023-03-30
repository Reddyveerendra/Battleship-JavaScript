export const ui = () => {
    const content = document.querySelector("#content");
    const header = document.createElement("div")
    var main = document.createElement("div")
    const footer = document.createElement("div")
    content.style = "display: grid;height: 100vh;width: 100vw;grid-template-rows: 1fr 5fr 1fr;margin: 0%;padding: 0%;";
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
    /* header */
    const header_h1 = document.createElement("h1");
    header_h1.textContent = "BATTLESHIP"
    header.style = "text-align: center;border: 1px solid black;background: burlywood;";
    header.appendChild(header_h1);
    /* footer */
    const footer_h3 = document.createElement("h3");
    const footer_a = document.createElement("a");
    footer_a.href = "https://github.com/Reddyveerendra";
    footer_h3.textContent = "Copyright © 2023 Reddyveerendra";
    footer.style = "text-align: center;border: 1px solid black;background: burlywood;";
    footer_a.appendChild(footer_h3);
    footer_a.style = "color: black;text-decoration-line: none;"
    footer.appendChild(footer_a);
    /* main */
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    function arrangeGrids(n = 10) {
        let container = document.createElement("div");
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                let cell = document.createElement("div");
                cell.innerHTML = "";
                cell.classList.add("unit");
                cell.classList.add(`unit${i}${j}`);
                cell.style = "border:1px solid black; padding: 6px;"
                container.appendChild(cell);
            }
        }
        container.style = `display:grid;grid-template-columns: repeat(${n},1fr);grid-template-rows: repeat(${n},1fr); boarder:2px solid black;`;
        return container;
    }
    const title = document.createElement("div");
    const title_h31 = document.createElement("h3");
    const title_h32 = document.createElement("h3");
    title_h31.textContent = "YOU";
    title_h32.textContent = "ENEMY";
    title_h31.style.margin = "0%";
    title_h32.style.margin = "0%";
    title.appendChild(title_h31);
    title.appendChild(title_h32);
    title.style = "display:flex; justify-content: space-evenly;margin:4px;gap:15px;";
    const user = arrangeGrids();
    const computer = arrangeGrids();
    user.id = "user";
    computer.id = "computer";
    div1.appendChild(user);
    div1.appendChild(computer);
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.textContent = "Turn :"
    p1.id = "Turn";
    p2.textContent = "Info :"
    p2.id = "Info";
    main.appendChild(p1);
    main.appendChild(p2);
    main.appendChild(title);
    main.appendChild(div1)
    div1.style = "display:flex;gap:15px;justify-content: space-evenly;margin:4px;"
    main.style = "margin:2%;"
    p1.style = "margin:4px";
    p2.style = "margin:4px";
    /* ships container */
    const ships_container = document.createElement("div");
    ships_container.id = "ships-container";
    const ships_maker = (n, name) => {
        const ship = document.createElement("div")
        for (let j = 0; j < n; j++) {
            let cell = document.createElement("div");
            cell.innerHTML = "";
            cell.id = name;
            cell.style = "border:1px solid black; padding: 6px;";
            ship.appendChild(cell);
        }
        ship.draggable = true;
        ship.style = "display:flex; width: fit-content;"
        ship.id = name;
        ship.className = "ship";
        return ship;
    }
    const Carrier = ships_maker(5, "Carrier");
    Carrier.style.background = "red"
    const Battleship = ships_maker(4, "Battleship");
    Battleship.style.background = "orange";
    const Cruiser = ships_maker(3, "Cruiser");
    Cruiser.style.background = "yellow";
    const Submarine = ships_maker(3, "Submarine");
    Submarine.style.background = "yellow";
    const Destroyer = ships_maker(2, "Destroyer");
    Destroyer.style.background = "green";
    ships_container.appendChild(Carrier);
    ships_container.appendChild(Battleship);
    ships_container.appendChild(Cruiser);
    ships_container.appendChild(Submarine);
    ships_container.appendChild(Destroyer);
    main.appendChild(ships_container);
}