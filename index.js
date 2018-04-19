let boi;
let width = 1200;
let height = 800;

function setup() {
    createCanvas(width, height);
    rectMode(CENTER)
    boi = new Player()
    rooms[0][0] = new Room
    Room.generateAdjacent(0, 0)
}


function draw() {
    background("lightgrey");
    rooms[0][0].draw();
    boi.draw();
}
