let boi;
let width = 1200;
let height = 800;
let overlay;

function setup() {
    createCanvas(width, height);
    rectMode(CENTER)

    boi = new Player()
    rooms[0][0] = new Room()
    overlay=new Overlay()

    Room.generateAdjacent(0, 0)
    let obsSize = createVector(floor(random(minObstacleX, maxObstacleX)), floor(random(minObstacleY, maxObstacleY)))
    let obsPos = createVector(floor(random(-(rooms[0][0].size.x - obsSize.x) / 2, (rooms[0][0].size.x - obsSize.x) / 2)), floor(random(-(rooms[0][0].size.y - obsSize.y) / 2, (rooms[0][0].size.y - obsSize.y) / 2)))
    let obs = new Obstacle_Stone(obsPos, obsSize)
    rooms[0][0].addObstacle(obs)
    /*console.log("rectPos: " + rooms[0][0].obstacles[0].pos)
    console.log("rectSize: " + rooms[0][0].obstacles[0].size)
    console.log("circlePos: " + boi.pos)
    console.log("circleSize: " + boi.size / 2)
    console.log(collideRectCircle(rooms[0][0].obstacles[0].pos, rooms[0][0].obstacles[0].size, boi.pos, boi.size / 2))*/
}


function draw() {
    background("lightgrey");
    rooms[0][0].draw();
    rooms[0][0].obstacles[0].draw();
    boi.draw();
    //console.log(collideRectCircle(rooms[0][0].obstacles[0].pos, rooms[0][0].obstacles[0].size, boi.pos, boi.size / 2))
    overlay.draw()
}
