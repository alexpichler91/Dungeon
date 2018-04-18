let boi;
let rooms = [[]];
let width = 1200;
let height = 800;
let minRoomX = 200;
let maxRoomX = 800;
let minRoomY = 150;
let maxRoomY = 600;

function setup() {
    createCanvas(width, height);
    rectMode(CENTER)
    translate(900, 800)
    boi = new Player();
    rooms[0].push(new Room());
}


function draw() {
    background("lightgrey");
    boi.draw();
    rooms[0][0].draw();
}
