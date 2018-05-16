let Chance_Sword = 50;
let Items_Rooms = [[]]
let Items_Inv=[]

function Sword(){
    this.type="sword"
    this.pos = createVector(-50,-100)
    this.size = createVector(5,25)
    this.collectable=true
    this.collected=false

    this.draw = function(){
        push()
        fill("black")
        translate(width/2,height/2.5)
        rect(this.pos.x,this.pos.y,this.size.x,this.size.y)
        pop()
    }
}



function ItemsInRoom(){
    this.itemArr = []

    this.spawn = function(){
        this.random = random(0,100)

        if(this.random<=Chance_Sword){
            this.itemArr.push(new Sword);
        }
    }

    this.collect = function(i){
        if( Items_Rooms[roomPos.x][roomPos.y].itemArr[i].collectable==true){
            
            if(collideRectCircle(Items_Rooms[roomPos.x][roomPos.y].itemArr[i].pos,Items_Rooms[roomPos.x][roomPos.y].itemArr[i].size,boi.pos,boi.size/2) && findUndefined(Items_Inv)<9){
                Items_Rooms[roomPos.x][roomPos.y].itemArr[i].collected=true;    
                Items_Inv[findUndefined(Items_Inv)]=Items_Rooms[roomPos.x][roomPos.y].itemArr[i]
                    Items_Rooms[roomPos.x][roomPos.y].itemArr.splice(i)
                }
        }else   {
            setTimeout(function(){ Items_Rooms[roomPos.x][roomPos.y].itemArr[i].collectable=true},1500);
        }
    }

    this.draw = function(){
        for(let i = this.itemArr.length-1;i>-1;i--){
            this.itemArr[i].draw();
            this.collect(i);
        }
    }
}

function SpawnItems(){

    if(Items_Rooms[roomPos.x] == undefined) {
        Items_Rooms[roomPos.x] = []
    }
    if(Items_Rooms[roomPos.x][roomPos.y]==undefined){
        Items_Rooms[roomPos.x][roomPos.y]= new ItemsInRoom();
        Items_Rooms[roomPos.x][roomPos.y].spawn();
    }
}


function findUndefined(arr){
    let i=0
    for(;i<9;i++){
        if(arr[i]==undefined)
        {
            return i;
        }
    }
    return i;
}

let anglebuffer=0
let active=false

function drawEquipt(item){

    if(Items_Inv[overlay.equiptslot]!= undefined && Items_Inv[overlay.equiptslot].type=="sword"){
        push()
        translate(boi.pos.x + width / 2, boi.pos.y + height / 2.5)
        rotate(boi.angle+PI*0.75+anglebuffer)
        fill("black")
        rect(0,boi.size,Items_Inv[overlay.equiptslot].size.x,Items_Inv[overlay.equiptslot].size.y)
        pop()
        if(active==true){
            anglebuffer+=0.1
            if(anglebuffer>=PI/2+0.1){
                anglebuffer=0
                active=false
            }
        }
    }

    if (mouseIsPressed) {
        if (mouseButton === LEFT) {
            active=true
        }
    }
}