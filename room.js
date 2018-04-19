let rooms = [[]]
let roomProbability = 0.33
let minRoomX = 200
let maxRoomX = 800
let minRoomY = 150
let maxRoomY = 600
let doorHeight = 50
let doorWidth = 20

function Room(difficulty = 0) {
    this.size = createVector(floor(random(minRoomX, maxRoomX)), floor(random(minRoomY, maxRoomY)))
    this.difficulty = difficulty
    this.doors = []
    this.obstacles = []

    this.draw = function() {
        push()
        translate(width / 2, height / 2)
        // draw room
        fill("white")
        strokeWeight(4)
        rect(0, 0, this.size.x, this.size.y)
        // draw doors
        strokeWeight(2)
        fill("lightgrey")
        for (this.door of this.doors) {
            if(this.door.x != undefined) {
                if(this.door.x != 0) {
                    rect(this.door.x * ((this.size.x - doorWidth) / 2), 0, doorWidth, doorHeight)
                } else if(this.door.y != 0) {
                    rect(0, this.door.y * ((this.size.y - doorWidth) / 2), doorHeight, doorWidth)
                }
            }
        }
        pop()
    }
    this.addObstacle = function(obstacle) {
        this.obstacles.push(obstacle)
    }

}

Room.generateAdjacent = function(x, y) {
    this.pos = createVector(x, y)
    this.offset = createVector(-1, -1)

    for(; this.offset.x <= 1; this.offset.x++) {
        for(this.offset.y = -1; this.offset.y <= 1; this.offset.y++) {
            if(random(1) <= roomProbability && this.offset.x != this.offset.y && this.offset.x != -this.offset.y) {
                if(rooms[this.pos.x + this.offset.x] == undefined) {
                    rooms[this.pos.x + this.offset.x] = []
                }
                rooms[this.pos.x + this.offset.x][this.pos.y + this.offset.y] = new Room
            }
        }
    }
    Room.getDoors(this.pos.x, this.pos.y)
}

Room.getDoors = function(x, y) {
    this.pos = createVector(x, y)
    this.offset = createVector(-1, -1)

    for(this.offset.x = -1; this.offset.x <= 1; this.offset.x++) {
        for(this.offset.y = -1; this.offset.y <= 1; this.offset.y++) {
            if(this.offset.x != this.offset.y && this.offset.x != -this.offset.y) {
                if(rooms[this.pos.x + this.offset.x] != undefined) {
                    if(rooms[this.pos.x + this.offset.x][this.pos.y + this.offset.y] != undefined) {
                        rooms[this.pos.x][this.pos.y].doors.push(createVector(this.pos.x + this.offset.x, this.pos.y + this.offset.y))
                    }
                }
            }
        }
    }
    if(rooms[this.pos.x][this.pos.y].doors.length == 0) {
        Room.generateAdjacent(this.pos.x, this.pos.y)
    }
}
