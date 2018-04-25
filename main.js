let boi;
let width = 1200
let height = 800
let overlay
let items
let roomPos
let spawnItem

function setup() {
    createCanvas(width, height)
    rectMode(CENTER)

    roomPos = createVector(0, 0)
    boi = new Player()
    rooms[roomPos.x][roomPos.y] = new Room()
    overlay = new Overlay()

    Room.generateAdjacent(roomPos.x, roomPos.y)
    let obsSize = createVector(floor(random(minObstacleX, maxObstacleX)), floor(random(minObstacleY, maxObstacleY)))
    let obsPos = createVector(floor(random(-(rooms[roomPos.x][roomPos.y].size.x - obsSize.x) / 2, (rooms[roomPos.x][roomPos.y].size.x - obsSize.x) / 2)), floor(random(-(rooms[roomPos.x][roomPos.y].size.y - obsSize.y) / 2, (rooms[roomPos.x][roomPos.y].size.y - obsSize.y) / 2)))
    let obs = new Obstacle_Stone(obsPos, obsSize)
    rooms[roomPos.x][roomPos.y].addObstacle(obs)
}


function draw() {
    background("lightgrey")
    rooms[roomPos.x][roomPos.y].draw()
    rooms[roomPos.x][roomPos.y].obstacles[0].draw()
    //itemsInRoom[roomPos.x][roomPos.y].draw()
    boi.draw()
    overlay.draw()
}
