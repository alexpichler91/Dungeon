function Player() {
<<<<<<< HEAD
    this.pos = createVector(900,600)    // Position des Spielers
    this.big = 20;                      //Größe des Spielers
    this.acc = createVector(0,0)        //Beschleunigung ...
    this.accspeed=0.5;                     //Wie schnell er Beschleunigt        
=======
    this.pos=createVector(500,500)
    this.acc=createVector(0,0)
    this.maxspeed=10;
    this.big = 20;

>>>>>>> f314978ebc9965dcbebd6fcae0c2768f7cbaef95

    this.draw = function(){
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

        this.acc.mult(0.95)
        this.pos.add(this.acc)

<<<<<<< HEAD
        fill("red");
        push()
        translate(this.pos.x,this.pos.y)
        rotate(FieldOfView())
        line(0,0,0,-20)
        ellipse(0,0,this.big,this.big)
        pop()
        
    }
}

function FieldOfView() {
    this.dpos= createVector((mouseX-boi.pos.x)*-1 , (mouseY-boi.pos.y)*-1) 
    return atan2(this.dpos.x,this.dpos.y)*-1
}
=======
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

>>>>>>> f314978ebc9965dcbebd6fcae0c2768f7cbaef95
