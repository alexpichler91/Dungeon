class Bat extends Enemy {
constructor(obj = {pos, size, coneLength, coneAngle, detectionRadius, rotationSpeed, moveSpeed, maxSpeed, level, maxHP, currentHP}) {
        super(obj)
    }

    draw() {
        push()
        translate(this.pos.x + width / 2, this.pos.y + height / 2.5)
        fill(160, 82, 45)
        rotate(this.coneLength.heading() + PI / 2)
        line(0, 0, 0, -8)
        ellipse(0, 0, this.size, this.size)
        pop()
    }
}
