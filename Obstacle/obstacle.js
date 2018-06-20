let obstacleProbability = 0.3
let minObstaclesPerRoom = 0
let maxObstaclesPerRoom = 15
let obstacleTypes = 3
let minObstacleX = 20
let maxObstacleX = 100
let minObstacleY = 20
let maxObstacleY = 100

Obstacle = function(pos, size, tier = -1, hiddenItem = undefined) {
    this.pos = pos
    this.size = size
    this.tier = tier
    if(this.tier != -1 && hiddenItem != undefined) {
        this.hiddenItem = hiddenItem
    }

    this.draw = function() {
        push()
        fill('black')
        noStroke()
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y)
        pop()
    }
}
