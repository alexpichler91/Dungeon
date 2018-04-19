function Player() {
    this.pos=createVector(width/2,height/2)
    this.acc=createVector(0,0)
    this.maxspeed=10;
    this.big = 20;

    this.roomcollision = function(){
        if(this.pos.x+this.big>=rooms[0][0].size)
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
        //console.log("its here")
    push()
    //translate(this.pos.x,this.pos.y)
    fill("red")
    line(0,0,0,-20)
    ellipse(0,0,this.big,this.big)

    pop()
    }
}

