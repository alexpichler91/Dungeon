let obstacleProbability = 1
let minObstaclesPerRoom = 0
let maxObstaclesPerRoom = 25
let obstacleTypes = 3
let minObstacleX = 20
let maxObstacleX = 100
let minObstacleY = 20
let maxObstacleY = 100

Obstacle = function(pos, size, tier = -1, hiddenItem = undefined) {
    this.pos = pos
    this.size = size
    this.tier = tier
    this.type = type.OBSTACLE
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

Obstacle_Stone = function(pos, size) {
    Obstacle.call(this, pos, size)

    this.draw = function() {
        push()
        fill('darkgrey')
        noStroke()
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y)
        pop()
    }
}

Obstacle_Wood = function(pos, size, hiddenItem) {
    Obstacle.call(this, pos, size, 1, hiddenItem)

    this.draw = function() {
        push()
        fill(204, 102, 0)
        noStroke()
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y)
        pop()
    }
}

Obstacle_Dirt = function(pos, size, hiddenItem) {
    Obstacle.call(this, pos, size, 0, hiddenItem)

    this.draw = function() {
        push()
        fill(102, 51, 0)
        noStroke()
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y)
        pop()
    }
}
