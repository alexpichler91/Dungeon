let boi;


function setup() {
    createCanvas(1200, 800);
    rectMode(CENTER)
    translate(900, 800)
    boi = new Player();
}


function draw() {
    boi.draw();
    background("lightgrey");
}
