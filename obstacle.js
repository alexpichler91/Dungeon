<<<<<<< HEAD
let minObstacleX = 20
let maxObstacleX = 100
let minObstacleY = 20
let maxObstacleY = 100

Obstacle = function(pos, size, isPermanent = true, hiddenItem = undefined) {
    this.pos = pos
    this.size = size
    this.isPermanent = isPermanent
    if(!this.isPermanent) {
        this.hiddenItem = hiddenItem
    }

    this.draw = function() {
        push()
        translate(width / 2, height / 2.5)
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
        translate(width / 2, height / 2.5)
        fill('darkgrey')
        noStroke()
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y, 10)
        pop()
    }
}
=======
let minObstacleX = 20
let maxObstacleX = 100
let minObstacleY = 20
let maxObstacleY = 100

Obstacle = function(pos, size, isPermanent = true, hiddenItem = null) {
    this.pos = pos
    this.size = size
    this.isPermanent = isPermanent
    if(!this.isPermanent) {
        this.hiddenItem = hiddenItem
    }

    this.draw = function() {
        push()
        translate(width / 2, height / 2.5)
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
        translate(width / 2, height / 2.5)
        fill('darkgrey')
        noStroke()
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y, 10)
        pop()
    }
}
>>>>>>> db6b8d9beb0bfebb1d5ae53d479dfe72993e22bb
