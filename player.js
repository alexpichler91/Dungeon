function Player() {
    this.pos=createVector(0,0)
    this.acc=createVector(0,0)
    this.maxspeed=10;
    this.big = 20;

    this.roomcollision = function(){
        if(this.pos.x+this.big>=rooms[0][0].size){
            console.log("trigger")
        }
    }

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

        this.RoomCollider();
        this.acc.mult(0.95)
        this.pos.add(this.acc)
        
    fill("red")
    line(this.pos.x,this.pos.y,this.pos.x,this.pos.y-20)
    ellipse(this.pos.x,this.pos.y,this.big,this.big)
    this.roomcollision();
    }
}

function FieldOfView() {
    this.dpos= createVector((mouseX-boi.pos.x)*-1 , (mouseY-boi.pos.y)*-1)
    return atan2(this.dpos.x,this.dpos.y)*-1
}
