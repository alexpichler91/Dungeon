function Player() {
    this.pos=createVector(500,500)
    this.big = 20;


    this.draw = function(){

        push()
        translate(this.pos.x,this.pos.y)
        rotate(FieldOfView())
        console.log(FieldOfView())
        fill("red")
        line(0,0,0,-20)
        ellipse(0,0,this.big,this.big)

        pop()
    }
}

function FieldOfView() {
    this.dpos=createVector((mouseX - boi.pos.x)*-1,(mouseY - boi.pos.y)*-1)
    return atan(this.dpos.y/this.dpos.x)*-1
}
