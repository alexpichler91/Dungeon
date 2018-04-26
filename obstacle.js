let obstacleProbability = 0.5
let minObstaclesPerRoom = 2
let maxObstaclesPerRoom = 15
let obstacleTypes = 3
let minObstacleX = 20
let maxObstacleX = 100
let minObstacleY = 20
let maxObstacleY = 100

Obstacle = function(pos, size, level = -1, hiddenItem = undefined) {
    this.pos = pos
    this.size = size
    this.level = level
    if(this.level != -1 && hiddenItem != undefined) {
        this.hiddenItem = hiddenItem
    }

    this.draw = function() {
        push()
        fill('black')
        noStroke()
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y, 10)
        pop()
    }
}

Obstacle_Stone = function(pos, size) {
    Obstacle.call(this, pos, size)

    this.draw = function() {
        push()
        fill('darkgrey')
        noStroke()
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y, 10)
        pop()
    }
}

Obstacle_Wood = function(pos, size, hiddenItem) {
    Obstacle.call(this, pos, size, 1, hiddenItem)

    this.draw = function() {
        push()
        fill('orange')
        noStroke()
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y)
        pop()
    }
}

Obstacle_Dirt = function(pos, size, hiddenItem) {
    Obstacle.call(this, pos, size, 0, hiddenItem)

    this.draw = function() {
        push()
        fill('brown')
        noStroke()
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y)
        pop()
    }
}
