function Player() {webkitCancelAnimationFrame
    this.pos = createVector(0, 0)        // Position des Spielers
    this.size = 20;                      //Größe des Spielers
    this.acc = createVector(0, 0)        //Beschleunigung ...
    this.accspeed=0.9;                   //Wie schnell er Beschleunigt

    this.draw = function(){
        if(!dead){
        if(keyIsDown(87)){
            this.acc.y-=this.accspeed;
        }
        if(keyIsDown(83)){
            this.acc.y+=this.accspeed;
        }
        if(keyIsDown(65)){
            this.acc.x-=this.accspeed;
        }
        if(keyIsDown(68)){
            this.acc.x+=this.accspeed;
        }

        this.roomCollider();
        this.acc.mult(0.88)
        this.pos.add(this.acc)

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
        if(collideRectCircle(createVector(rooms[roomPos.x][roomPos.y].size.x / 2, 0), createVector(0, rooms[roomPos.x][roomPos.y].size.y), this.pos, this.size / 2 + 5) && boi.acc.x > 0){
            this.pos.x = (rooms[roomPos.x][roomPos.y].size.x - this.size) / 2
            this.acc.x = 0
        }
        if(collideRectCircle(createVector(-rooms[roomPos.x][roomPos.y].size.x / 2, 0), createVector(0, rooms[roomPos.x][roomPos.y].size.y), this.pos, this.size / 2 + 5) && boi.acc.x < 0){
            this.pos.x = -(rooms[roomPos.x][roomPos.y].size.x - this.size) / 2
            this.acc.x = 0
        }

        if(collideRectCircle(createVector(0, rooms[roomPos.x][roomPos.y].size.y / 2), createVector(rooms[roomPos.x][roomPos.y].size.x, 0), this.pos, this.size / 2 + 5) && boi.acc.y > 0){
            this.pos.y = (rooms[roomPos.x][roomPos.y].size.y - this.size) / 2
            this.acc.y = 0
        }
        if(collideRectCircle(createVector(0, -rooms[roomPos.x][roomPos.y].size.y / 2), createVector(rooms[roomPos.x][roomPos.y].size.x, 0), this.pos, this.size / 2 + 5) && boi.acc.y < 0){
            this.pos.y = -(rooms[roomPos.x][roomPos.y].size.y - this.size) / 2
            this.acc.y = 0
        }
    }

    this.obstacleCollider = function() {

    }
}

function FieldOfView() {
    this.dpos= createVector(-(mouseX-boi.pos.x-(width / 2)) , -(mouseY-boi.pos.y-(height / 2.5)))
    return -atan2(this.dpos.x,this.dpos.y)
}
