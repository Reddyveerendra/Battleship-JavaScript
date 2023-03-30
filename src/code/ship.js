function shipFactory(length) {
    const ship = {
        hits: 0,
        hit() {
            this.hits = this.hits + 1;
            return this.hits;
        },
        isSink() {
            if (ship.length === ship.hits) {
                return true;
            }
            return false;
        }
    }
    ship.length = length;
    return ship;
}
export let Carrier = shipFactory(5);
export let Battleship = shipFactory(4);
export let Cruiser = shipFactory(3);
export let Submarine = shipFactory(3);
export let Destroyer = shipFactory(2);
module.exports = shipFactory;