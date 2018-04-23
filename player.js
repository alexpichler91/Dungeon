function Player() {
<<<<<<< HEAD
    this.pos=createVector(0,0)
    this.acc=createVector(0,0)
    this.maxspeed=10;
    this.big = 20;

    this.roomcollision = function(){
        if(this.pos.x+this.big>=rooms[0][0].size){
            console.log("trigger")
        }
    }
=======
    this.pos = createVector(width / 2, height /2.5)    // Position des Spielers
    this.size = 20;                      //Größe des Spielers
    this.acc = createVector(0,0)        //Beschleunigung ...
    this.accspeed=0.3;                  //Wie schnell er Beschleunigt
>>>>>>> b50d92b30555fdc89a445b6dba61c2102accd6b2

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
<<<<<<< HEAD
        
    fill("red")
    line(this.pos.x,this.pos.y,this.pos.x,this.pos.y-20)
    ellipse(this.pos.x,this.pos.y,this.big,this.big)
    this.roomcollision();
=======

        }
        push()
        translate(this.pos.x, this.pos.y)
        fill("red");
        rotate(FieldOfView())
        line(0,0,0,-12)
        ellipse(0,0,this.size,this.size)
        pop()
    }

    this.RoomCollider=function(){
    if(this.pos.x+this.size-(width / 2) > rooms[0][0].size.x/2 && boi.acc.x > 0){
        boi.acc.x=0;
    }
    if(this.pos.x-this.size-(width / 2) < (-rooms[0][0].size.x/2) && boi.acc.x < 0){
        boi.acc.x=0;
    }

    if(this.pos.y+this.size-(height / 2.5) > (rooms[0][0].size.y/2) && boi.acc.y > 0){
        boi.acc.y=0;
    }
    if(this.pos.y-this.size-(height / 2.5)< (-rooms[0][0].size.y/2) && boi.acc.y < 0){
        boi.acc.y=0;
    }
>>>>>>> b50d92b30555fdc89a445b6dba61c2102accd6b2
    }
}

function FieldOfView() {
    this.dpos= createVector((mouseX-boi.pos.x)*-1 , (mouseY-boi.pos.y)*-1)
    return atan2(this.dpos.x,this.dpos.y)*-1
}
