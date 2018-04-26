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
<<<<<<< HEAD
    rooms[roomPos.x][roomPos.y].fillObstacles()
=======
    rooms[roomPos.x][roomPos.y].addObstacle(obs)


>>>>>>> 171c250cc69fd9939137bb62f5bda310265aff77
    SpawnItems();
}


function draw() {
    background("lightgrey")
    rooms[roomPos.x][roomPos.y].draw()
<<<<<<< HEAD
=======
    rooms[roomPos.x][roomPos.y].obstacles[0].draw()
>>>>>>> 171c250cc69fd9939137bb62f5bda310265aff77
    boi.draw()
    overlay.draw()

    Items_Rooms[roomPos.x][roomPos.y].draw();
}
