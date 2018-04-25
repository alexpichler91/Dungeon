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
<<<<<<< HEAD
    overlay = new Overlay()
    spawnItem = new SpawnItems()
=======
    overlay=new Overlay()
>>>>>>> 1c55f8e30782589f02f91ecc3dc008973a96835e

    Room.generateAdjacent(roomPos.x, roomPos.y)
    let obsSize = createVector(floor(random(minObstacleX, maxObstacleX)), floor(random(minObstacleY, maxObstacleY)))
    let obsPos = createVector(floor(random(-(rooms[roomPos.x][roomPos.y].size.x - obsSize.x) / 2, (rooms[roomPos.x][roomPos.y].size.x - obsSize.x) / 2)), floor(random(-(rooms[roomPos.x][roomPos.y].size.y - obsSize.y) / 2, (rooms[roomPos.x][roomPos.y].size.y - obsSize.y) / 2)))
    let obs = new Obstacle_Stone(obsPos, obsSize)
<<<<<<< HEAD
    rooms[roomPos.x][roomPos.y].addObstacle(obs)

    /* einfügen wenn in neuer raum*/
    spawnItem.spawnItems()
    /* einfügen wenn in neuer raum*/
=======
    rooms[0][0].addObstacle(obs)
    
>>>>>>> 1c55f8e30782589f02f91ecc3dc008973a96835e
}


function draw() {
<<<<<<< HEAD
    background("lightgrey")
    rooms[roomPos.x][roomPos.y].draw()
    rooms[roomPos.x][roomPos.y].obstacles[0].draw()
    itemsInRoom[roomPos.x][roomPos.y].draw()
    boi.draw()
=======
    background("lightgrey");
    rooms[0][0].draw();
    rooms[0][0].obstacles[0].draw();
    boi.draw();
>>>>>>> 1c55f8e30782589f02f91ecc3dc008973a96835e
    overlay.draw()
}
