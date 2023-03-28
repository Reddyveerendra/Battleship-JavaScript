const ship = require("../code/ship")
test('ship length is 4', () => {
    expect(ship(4).length).toBe(4);
});
test('ship length is toBeUndefined for no argument', () => {
    expect(ship().length).toBeUndefined();
});
let Battleship = ship(2);
test('testing ship by creating new ship with length is 2, hits is 0 and isSink is false', () => {
    expect(Battleship.length).toBe(2);
    expect(Battleship.hits).toBe(0);
    expect(Battleship.isSink()).toBeFalsy();
})
test('testing ship by creating new ship', () => {
    Battleship.hit();
    Battleship.hit();
    expect(Battleship.hits).toBe(2);
    expect(Battleship.isSink()).toBeTruthy();
})