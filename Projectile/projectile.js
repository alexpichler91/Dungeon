class Projectile {
    constructor(pos, size, vel) {
        this.pos = pos || createVector(0, 0)
        this.size = size || createVector(5, 5)
        this.vel = vel || createVector(1, -1)
        this.angle = this.vel.heading()
    }

    draw() {
        this.pos.add(this.vel)
        push()
        translate(this.pos.x + width / 2, this.pos.y + height / 2.5)
        fill("blue")
        rotate(this.angle + HALF_PI)
        line(0, 0, 0, -4)
        noStroke()
        ellipse(0, 0, this.size.x, this.size.y)
        pop()
    }

    checkCollisions() {
        if(!collideRectCircle(createVector(0, 0), p5.Vector.sub(rooms[roomPos.x][roomPos.y].size, this.size), this.pos, this.size.x / 2)) {
            return true
        }
        for(let obs of rooms[roomPos.x][roomPos.y].obstacles.getCollisions({pos: this.pos, size: createVector(this.size, this.size)})) {
            if(collideRectCircle(obs.pos, obs.size, this.pos, this.size.x / 2)) {
                return true
            }
        }
        return false
    }
}
