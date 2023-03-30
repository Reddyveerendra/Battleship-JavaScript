import { ui } from "./code/ui";

ui()
const ships = document.querySelectorAll(".ship");

function handleDrag(e) {
    console.log(e)
    e.preventDefault()
}
ships.forEach((ship) => (ship.addEventListener("dragend", handleDrag)))