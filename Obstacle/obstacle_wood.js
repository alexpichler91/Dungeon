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
