let boi
let laBatta
let width = 1200
let height = 800
let overlay
let items
let roomPos
let spawnItem
let projectiles = []

function setup() {
    createCanvas(width + 200, height)
    rectMode(CENTER)

    roomPos = createVector(0, 0)
    boi = new Player()
    rooms[roomPos.x][roomPos.y] = new Room()
    overlay = new Overlay()
    rooms[roomPos.x][roomPos.y].generateAdjacent()
    rooms[roomPos.x][roomPos.y].fillObstacles()
    laBatta = new Bat({})
    SpawnItems();
}


function draw() {
    background("lightgrey")
    rooms[roomPos.x][roomPos.y].draw()

    /*for (projectile of projectiles) {
        projectile.draw()
    }*/

    laBatta.update()
    //laBatta.showFOV()
    laBatta.draw()

    boi.draw()
    overlay.draw()
    Items_Rooms[roomPos.x][roomPos.y].draw();

    /*for(let i = projectiles.length - 1; i >= 0; i--) {
        if(projectiles[i].checkCollisions()) {
            projectiles.splice(i, 1)
        }
    }*/
}

/*
function mousePressed() {
    if(projectiles.length < 50) {
        projectiles.push(new Projectile(boi.pos.copy(), createVector(5, 5), p5.Vector.fromAngle(boi.angle - HALF_PI).mult(2)))
    }
}
*/
