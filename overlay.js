function Overlay(){
    this.sizehotbar = createVector(1000,100)
    this.poshotbar = createVector(width/2,height-this.sizehotbar.y/2);

    this.drawhotbar = function(){
        fill("lightblue")
        rect(this.poshotbar.x,this.poshotbar.y,this.sizehotbar.x,this.sizehotbar.y)
    }

    this.healthbar = function(){

    }

    this.draw = function(){
        this.drawhotbar()
    }  
}