let rooms = [[]]
let roomProbability = 0.1
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
    this.doors["x"] = []
    this.doors["y"] = []

    this.draw = function() {
        // draw room
        strokeWeight(4)
        rect(width / 2, height / 2, this.size.x, this.size.y)
        // draw doors
        strokeWeight(2)
        fill("lightgrey")
        translate(width / 2, height / 2)
        for (idx of this.doors["x"]) {
            if(this.doors["x"][idx] != undefined) {
                if(this.doors["x"][idx] != 0) {
                    rect(this.doors["x"][idx] * ((this.size.x - doorWidth) / 2), 0, doorWidth, doorHeight)
                } else if(this.doors["y"][idx] != 0) {
                    rect(0, this.doors["y"][idx] * ((this.size.y - doorWidth) / 2), doorHeight, doorWidth)
                }
            }
        }
        fill("white")
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
    for(; this.offset.x <= 1; this.offset.x++) {
        for(this.offset.y = -1; this.offset.y <= 1; this.offset.y++) {
            if(this.offset.x != this.offset.y && this.offset.x != -this.offset.y) {
                if(rooms[this.pos.x + this.offset.x] != undefined) {
                    if(rooms[this.pos.x + this.offset.x][this.pos.y + this.offset.y] != undefined) {
                        rooms[this.pos.x][this.pos.y].doors["x"].push(this.pos.x + this.offset.x)
                        rooms[this.pos.x][this.pos.y].doors["y"].push(this.pos.y + this.offset.y)
                    }
                }
            }
        }
    }
    if(rooms[this.pos.x][this.pos.y].doors["x"].length == 0) {
        Room.generateAdjacent(this.pos.x, this.pos.y)
    }
}
