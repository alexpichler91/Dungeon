function Room(difficulty = 0) {
    this.size = createVector(floor(random(minRoomX, maxRoomX)), floor(random(minRoomY, maxRoomY)))
    this.difficulty = difficulty

    this.draw = function() {
        strokeWeight(4)
        rect(width / 2, height / 2, this.size.x, this.size.y)
    }
}
