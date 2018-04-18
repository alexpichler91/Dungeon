function Player() {
    this.x = 0;
    this.y = 0;
    this.big = 20;
    this.FOV = 0;


    this.draw = function(){

        ellipse(this.x,this.y,this.big,this.big)
    }
}

function FieldOfView() {

}