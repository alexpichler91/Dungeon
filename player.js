function Player() {
    this.pos=createVector(500,500)
    this.acc=createVector(0,0)
    this.maxspeed=10;
    this.big = 20;


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

    push()
    translate(this.pos.x,this.pos.y)
    fill("red")
    line(0,0,0,-20)
    ellipse(0,0,this.big,this.big)

    pop()
    }
}

