function Player() {
    let obs                              // private obstacle
    this.pos = createVector(0, 0)        // Position des Spielers
    this.size = 20;                      // Größe des Spielers
    this.vel = createVector(0, 0)        // Geschwindigkeit ...
    this.maxSpeed = 3                    // maximale Geschwindigkeit
    this.acc = 0.9;                      // Wie schnell er (pro frame) Beschleunigt

    this.draw = function(){
        if(!dead){
            if(keyIsDown(87)) {
                this.vel.y-=this.acc;
            }
            if(keyIsDown(83)) {
                this.vel.y+=this.acc;
            }
            if(keyIsDown(65)) {
                this.vel.x-=this.acc;
            }
            if(keyIsDown(68)) {
                this.vel.x+=this.acc;
            }

            this.roomCollider()
            this.obstacleCollider()
            this.doorCollider()
            if(this.vel.x >= this.maxSpeed) {
                this.vel.x = this.maxSpeed
            }
            if(this.vel.x <= -this.maxSpeed) {
                this.vel.x = -this.maxSpeed
            }
            if(this.vel.y >= this.maxSpeed) {
                this.vel.y = this.maxSpeed
            }
            if(this.vel.y <= -this.maxSpeed) {
                this.vel.y = -this.maxSpeed
            }
            this.vel.mult(0.88)
            this.pos.add(this.vel)
        }
        push()
        translate(this.pos.x + width / 2, this.pos.y + height / 2.5)
        fill("red");
        rotate(FieldOfView())
        line(0,0,0,-12)
        ellipse(0,0,this.size,this.size)
        pop()
    }

    this.roomCollider = function() {
        if(collideRectCircle(createVector(rooms[roomPos.x][roomPos.y].size.x / 2, 0), createVector(0, rooms[roomPos.x][roomPos.y].size.y), this.pos, this.size / 2) && this.vel.x > 0){
            this.pos.x = (rooms[roomPos.x][roomPos.y].size.x - this.size) / 2
            this.vel.x = 0
        }
        if(collideRectCircle(createVector(-rooms[roomPos.x][roomPos.y].size.x / 2, 0), createVector(0, rooms[roomPos.x][roomPos.y].size.y), this.pos, this.size / 2) && this.vel.x < 0){
            this.pos.x = -(rooms[roomPos.x][roomPos.y].size.x - this.size) / 2
            this.vel.x = 0
        }

        if(collideRectCircle(createVector(0, rooms[roomPos.x][roomPos.y].size.y / 2), createVector(rooms[roomPos.x][roomPos.y].size.x, 0), this.pos, this.size / 2) && this.vel.y > 0){
            this.pos.y = (rooms[roomPos.x][roomPos.y].size.y - this.size) / 2
            this.vel.y = 0
        }
        if(collideRectCircle(createVector(0, -rooms[roomPos.x][roomPos.y].size.y / 2), createVector(rooms[roomPos.x][roomPos.y].size.x, 0), this.pos, this.size / 2) && this.vel.y < 0){
            this.pos.y = -(rooms[roomPos.x][roomPos.y].size.y - this.size) / 2
            this.vel.y = 0
        }
    }

    this.obstacleCollider = function() {
        for(obs of rooms[roomPos.x][roomPos.y].obstacles.getCollisions({pos: this.pos, size: createVector(this.size, this.size)})) {
            if(this.vel.x > 0 && collideRectCircle(createVector(obs.pos.x - (obs.size.x / 2), obs.pos.y), createVector(0, obs.size.y), this.pos, this.size / 2)) {
                this.vel.x = 0
            }
            else if(this.vel.x < 0 && collideRectCircle(createVector(obs.pos.x + (obs.size.x / 2), obs.pos.y), createVector(0, obs.size.y), this.pos, this.size / 2)) {
                this.vel.x = 0
            }
            else if(this.vel.y > 0 && collideRectCircle(createVector(obs.pos.x, obs.pos.y - (obs.size.y / 2)), createVector(obs.size.x, 0), this.pos, this.size / 2)) {
                this.vel.y = 0
            }
            else if(this.vel.y < 0 && collideRectCircle(createVector(obs.pos.x, obs.pos.y + (obs.size.y / 2)), createVector(obs.size.x, 0), this.pos, this.size / 2)) {
                this.vel.y = 0
            }
        }
    }

    this.doorCollider = function() {
        for(door of rooms[roomPos.x][roomPos.y].doors) {
            if(door.x != undefined) {
                if(door.x != 0) {
                    if(collideRectCircle(createVector(door.x * ((rooms[roomPos.x][roomPos.y].size.x - doorWidth) / 2), 0), createVector(doorWidth, doorHeight), this.pos, this.size / 2)) {
                        roomPos.add(door)
                        this.pos = createVector(-door.x * (rooms[roomPos.x][roomPos.y].size.x / 2 - doorWidth * 2), 0)
                        rooms[roomPos.x][roomPos.y].generateAdjacent()
                        rooms[roomPos.x][roomPos.y].fillObstacles()
                        SpawnItems();
                        break
                    }
                } else if(door.y != 0) {
                    if(collideRectCircle(createVector(0, door.y * ((rooms[roomPos.x][roomPos.y].size.y - doorWidth) / 2)), createVector(doorHeight, doorWidth), this.pos, this.size / 2)) {
                        roomPos.add(door)
                        this.pos = createVector(0, -door.y * (rooms[roomPos.x][roomPos.y].size.y / 2 - doorWidth * 2))
                        rooms[roomPos.x][roomPos.y].generateAdjacent()
                        rooms[roomPos.x][roomPos.y].fillObstacles()
                        SpawnItems();
                        break
                    }
                }
            }
        }
    }
}

function FieldOfView() {
    this.dpos= createVector(-(mouseX-boi.pos.x-(width / 2)) , -(mouseY-boi.pos.y-(height / 2.5)))
    return -atan2(this.dpos.x,this.dpos.y)
}
