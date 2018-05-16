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
