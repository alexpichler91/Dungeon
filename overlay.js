let maxhealth=100
let dead = false;

function Overlay(){
    this.hotbarsize = createVector(1000,100)
    this.equiptslot=0
    this.items = [];
    this.slots = 9
    this.hotbarpos = createVector(width/2,height-this.hotbarsize.y/2);
    this.healthbarsize = createVector(500,30)
    this.healthbarpos = createVector(width/2+this.healthbarsize.x/2,height-this.hotbarsize.y-this.healthbarsize.y/2)
    
    this.cooldown=0;
    this.buffer = 0;

    this.maxhealth=maxhealth
    this.health=this.maxhealth

    this.drawhotbar = function(){

        if(keyCode<58 && keyCode > 48)
        this.equiptslot=keyCode-49;
        
        fill("lightblue")
        rect(this.hotbarpos.x,this.hotbarpos.y,this.hotbarsize.x,this.hotbarsize.y)

        fill("lightgrey")
        rect(100 + (37 + 35)*(this.equiptslot+1)+this.equiptslot*35,height-this.hotbarsize.y/2,80,80)

        for(let i=0 , offset=35;i < this.slots;i++){
            fill("green")
            rect(100 + (37 + 35)*(i+1)+i*35,height-this.hotbarsize.y/2,70,70)
        }
        this.ItemDraw();  
    }

    this.drawhealthbar = function(){
        fill("red")
        rect(this.healthbarpos.x+(this.maxhealth-this.health)*2.5,this.healthbarpos.y,this.healthbarsize.x/this.maxhealth*this.health,this.healthbarsize.y)
    }

    this.draw = function(){
        this.drawhotbar()
        this.drawhealthbar()
        if(this.health<=0)
        {   
            textSize(50)
            text("YOU ARE DEAD",width/2.8,height/2);
            dead=true;
        }
    }

    this.ItemDraw = function(){

        if(keyIsDown(81)){
            if(Items_Inv[this.equiptslot] != undefined){
                Items_Inv[this.equiptslot].pos.y=boi.pos.y-25;
                Items_Inv[this.equiptslot].pos.x=boi.pos.x
                Items_Inv[this.equiptslot].collectable=false;
                Items_Rooms[roomPos.x][roomPos.y].itemArr.push(Items_Inv[this.equiptslot]);
                Items_Inv[this.equiptslot]=undefined;
            }
        }

        for(let i=0; i<9;i++){
            fill("black")
            if(Items_Inv[i]!= undefined){
                //rect(100 + (37 + 35)*(i+1)+i*5*7,height-this.hotbarsize.y/2,5*2.5,25*2.5)
                rect(100 + (37 + 35)*(i+1)+i*35,height-this.hotbarsize.y/2,Items_Inv[i].size.x*2.5,Items_Inv[i].size.y*2.5)
            }
        }
    }
}