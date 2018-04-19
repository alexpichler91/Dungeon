let rooms = [[]];
let roomProbability = 0.8;
let minRoomX = 200;
let maxRoomX = 800;
let minRoomY = 150;
let maxRoomY = 600;

function Room(difficulty = 0) {
    this.size = createVector(floor(random(minRoomX, maxRoomX)), floor(random(minRoomY, maxRoomY)))
    this.difficulty = difficulty

    this.draw = function() {
        strokeWeight(4)
        rect(width / 2, height / 2, this.size.x, this.size.y)
    }
}

generateAdjacent = function(x, y) {
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
}
