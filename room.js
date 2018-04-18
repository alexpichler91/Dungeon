function Room(difficulty = 0) {
    this.size = createVector(math.floor(random(minRoomX, maxRoomX), math.floor(random(minRoomY, maxRoomY))
    this.difficulty = difficulty

    this.draw = function() {
        rect(width / 2, height / 2, this.size.x, this.size.y)
    }
}
