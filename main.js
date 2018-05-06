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

    rooms[roomPos.x][roomPos.y].generateAdjacent()
    rooms[roomPos.x][roomPos.y].fillObstacles()
    SpawnItems();
}


function draw() {
    background("lightgrey")
    rooms[roomPos.x][roomPos.y].draw()
    boi.draw()
    overlay.draw()
    Items_Rooms[roomPos.x][roomPos.y].draw();
}
