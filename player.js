function Player() {
    this.pos=createVector(500,500)
    this.acc=createVector(0,0)
    this.maxspeed=10;
    this.big = 20;

    this.pos = createVector(width / 2, height / 2)    // Position des Spielers
    this.big = 20;                      //Größe des Spielers
    this.acc = createVector(0,0)        //Beschleunigung ...
    this.accspeed=0.3;                  //Wie schnell er Beschleunigt

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

        this.RoomCollider();
        this.acc.mult(0.95)
        this.pos.add(this.acc)
        
        
        push()
        translate(this.pos.x, this.pos.y)
        fill("red");
        rotate(FieldOfView())
        line(0,0,0,-20)
        ellipse(0,0,this.big,this.big)
        pop()
    }
    
    this.RoomCollider=function(){
    if(boi.pos.x+boi.big-(width / 2) > rooms[0][0].size.x/2 && boi.acc.x>0){
        boi.acc.x=0;
    }
    if(boi.pos.x-boi.big-(width / 2) < (-rooms[0][0].size.x/2) && boi.acc.x<0){
        boi.acc.x=0;
    }

    if(boi.pos.y+boi.big-(height / 2) > (rooms[0][0].size.y/2) && boi.acc.y>0){
        boi.acc.y=0;
    }
    if(boi.pos.y-boi.big-(height / 2)< (-rooms[0][0].size.y/2) && boi.acc.y<0){
        boi.acc.y=0;
    }
    }
}



function FieldOfView() {
    this.dpos= createVector((mouseX-boi.pos.x)*-1 , (mouseY-boi.pos.y)*-1)
    return atan2(this.dpos.x,this.dpos.y)*-1
}
