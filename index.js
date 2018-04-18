let boi;
let width = 1200;
let height = 800;

function setup() {
    createCanvas(width, height);
    rectMode(CENTER)
    translate(900, 800)
    boi = new Player();
}


function draw() {
    boi.draw();
    background("lightgrey");
}
