function shipFactory(name, length) {

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
    ship.name = name;
    ship.length = length;
    return ship;
}
module.exports = shipFactory;