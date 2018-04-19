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

        if(keyIsDown(87)){
            this.acc.y-=0.5
        }
        if(keyIsDown(83)){
            this.acc.y+=0.5
        }
        if(keyIsDown(68)){
            this.acc.x+=0.5
        }
        if(keyIsDown(65)){
            this.acc.x-=0.5
        }
        
        this.acc.mult(0.95)
        this.pos.add(this.acc)
        
    fill("red")
    line(this.pos.x,this.pos.y,this.pos.x,this.pos.y-20)
    ellipse(this.pos.x,this.pos.y,this.big,this.big)
    this.roomcollision();
    }
}

