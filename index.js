let boi;
let width = 1200;
let height = 800;

function setup() {
    createCanvas(width, height);
    rectMode(CENTER)
    push()
    translate(width / 2, height / 2)
    boi = new Player()
    rooms[0][0] = new Room
    Room.generateAdjacent(0, 0)
    pop()
}


function draw() {
    push()
    translate(width / 2, height / 2)
    background("lightgrey")
    rooms[0][0].draw()
    boi.draw()
    pop()
}
