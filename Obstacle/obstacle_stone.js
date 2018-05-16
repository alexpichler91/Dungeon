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
