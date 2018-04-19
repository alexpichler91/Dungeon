let boi;
let width = 1200;
let height = 800;

function setup() {
    createCanvas(width, height);
    rectMode(CENTER)
    translate(900, 800)
    boi = new Player()
    rooms[0][0] = new Room
    Room.generateAdjacent(0, 0)
    Room.getDoors(0, 0)
}


function draw() {
    background("lightgrey");
    boi.draw();
    rooms[0][0].draw();
}
