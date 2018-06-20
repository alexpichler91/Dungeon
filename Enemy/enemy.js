class Enemy {
    constructor(obj = {pos, size, coneLength, coneAngle, detectionRadius, rotationSpeed, moveSpeed, maxSpeed, level, maxHP, currentHP}) {
        this.pos                = obj.pos               || createVector(0, 0)
        this.size               = obj.size              || 10
        this.coneLength         = obj.coneLength        || createVector(-50, 50)
        this.coneAngle          = obj.coneAngle         || HALF_PI
        this.detectionRadius    = obj.detectionRadius   || 20
        this.rotationSpeed      = obj.rotationSpeed     || 0.04
        this.moveSpeed          = obj.moveSpeed         || createVector(0, 0)
        this.maxSpeed           = obj.maxSpeed          || 2.5
        this.level              = obj.level             || 1
        this.maxHP              = obj.maxHP             || 100
        this.currentHP          = obj.currentHP         || this.maxHP
        this.coneMag = this.coneLength.mag()
    }

    checkFOV(obj = {pos, size}) {
        if(this.checkRadius(obj)) {
            return 'RADIUS'
        } else if(this.checkCone(obj)) {
            return 'CONE'
        }
        return false
    }

    checkRadius(obj = {pos, size}) {
        let dist = this.pos.dist(obj.pos) - obj.size / 2
        if(dist <= this.detectionRadius) {
            return true
        }
        return false
    }

    checkCone(obj = {pos, size}) {
        let dist = this.pos.dist(obj.pos) - obj.size
        if(dist * dist <= this.coneLength.magSq()) {
            let angle = obj.pos.copy().sub(this.pos).heading()
            let minAngle = (this.coneLength.heading() - this.coneAngle / 2)
            let maxAngle = (this.coneLength.heading() + this.coneAngle / 2)

            if((angle >= PI - 0.1 || angle <= -PI + 0.1) && (-angle <= maxAngle && -angle >= minAngle)) {
                return true
            }

            if(angle <= maxAngle && angle >= minAngle) {
                return true
            }
        }
        return false
    }

    showFOV() {
        this.showRadius()
        this.showCone()
    }

    showRadius() {
        push()
        noFill()
        translate(width / 2, height / 2.5)
        ellipse(this.pos.x, this.pos.y, this.detectionRadius * 2, this.detectionRadius * 2)
        pop()
    }

    showCone() {
        push()
        let coneRight = this.coneLength.copy().rotate(this.coneAngle / 2)
        let coneRightCtrl = coneRight.copy().rotate(HALF_PI).mult(2).add(coneRight)
        let coneLeft = this.coneLength.copy().rotate(-this.coneAngle / 2)
        let coneLeftCtrl = coneLeft.copy().rotate(-HALF_PI).mult(2).add(coneLeft)
        translate(width / 2, height / 2.5)
        noFill()
        curve(this.pos.x + coneRightCtrl.x, this.pos.y + coneRightCtrl.y, this.pos.x + coneRight.x, this.pos.y + coneRight.y, this.pos.x + coneLeft.x, this.pos.y + coneLeft.y, this.pos.x + coneLeftCtrl.x, this.pos.y + coneLeftCtrl.y)
        line(this.pos.x, this.pos.y, this.pos.x + coneRight.x, this.pos.y + coneRight.y)
        line(this.pos.x, this.pos.y, this.pos.x + coneLeft.x, this.pos.y + coneLeft.y)
        pop()
    }

    update() {
        let state = this.checkFOV({pos: boi.pos, size: boi.size})
        let instant = false
        if(state) {
            let angle = boi.pos.copy().sub(this.pos).heading()
            if(state == 'RADIUS') {
                instant = true
            }
            this.look(angle, instant)
            this.moveToPos({pos: boi.pos, size: boi.size})
        }
    }

    look(angle, instant) {
        if(angle >= TWO_PI) {
            angle -= TWO_PI
        }
        if(instant) {
            this.coneLength = p5.Vector.fromAngle(angle).mult(this.coneMag)
        } else {
            let diff = angle - this.coneLength.heading()
            if(diff >= 0.11 || diff <= -0.11) {
                if(diff >= 0) {
                    this.coneLength.rotate(this.rotationSpeed)
                    if(this.coneLength.heading() >= PI - (this.rotationSpeed)) {
                        this.coneLength.rotate(0.3)
                    }
                } else if(diff <= 0) {
                    this.coneLength.rotate(-this.rotationSpeed)
                    if(this.coneLength.heading() <= -PI + (this.rotationSpeed)) {
                        this.coneLength.rotate(-0.3)
                    }
                }
            }
        }
    }

    moveToPos(obj = {pos, size}) {
        let diff = obj.pos.copy().sub(this.pos)
        let mag = diff.mag()
        this.moveSpeed = diff.setMag(this.maxSpeed)
        this.pos.add(this.moveSpeed)
    }

    draw() {
        push()
        translate(width / 2, height / 2.5)
        ellipse(this.pos.x, this.pos.y, this.size.x, this.size.y)
        pop()
    }
}
