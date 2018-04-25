let boi;
let width = 1200;
let height = 800;
let overlay;
let items
let roomPos;
let spawnItem

function setup() {
    createCanvas(width, height);
    rectMode(CENTER)

    roomPos = createVector(0,0)
    boi = new Player()
    rooms[roomPos.x][roomPos.y] = new Room()
    overlay=new Overlay()

    Room.generateAdjacent(0, 0)
    let obsSize = createVector(floor(random(minObstacleX, maxObstacleX)), floor(random(minObstacleY, maxObstacleY)))
    let obsPos = createVector(floor(random(-(rooms[0][0].size.x - obsSize.x) / 2, (rooms[0][0].size.x - obsSize.x) / 2)), floor(random(-(rooms[0][0].size.y - obsSize.y) / 2, (rooms[0][0].size.y - obsSize.y) / 2)))
    let obs = new Obstacle_Stone(obsPos, obsSize)
    rooms[0][0].addObstacle(obs)
    
}


function draw() {
    background("lightgrey");
    rooms[0][0].draw();
    rooms[0][0].obstacles[0].draw();
    boi.draw();
    overlay.draw()
}
