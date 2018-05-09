let Chance_Sword = 50;
let Items_Rooms = [[]]
let Items_Inv=[]

function Sword(){
    this.pos = createVector(-50,-100)
    this.size = createVector(5,25)
    this.InvPlace = 10
    this.collectable=true
    this.cooldown = 1
    this.active =false
    this.anglebuffer = 0 ;
    this.attack_angle=90
    this.attack_speed=5

    this.draw = function(){
        push()
        fill("black")
        translate(width/2,height/2.5)
        rect(this.pos.x,this.pos.y,this.size.x,this.size.y)
        pop()
        this.animation()
    }

    this.animation = function(){
        if(this.active){
           melee(this.size,this.attack_angle,this.attack_speed,"black")
        }
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



function melee(size,angle,angle_speed,color){
    this.a_angle=boi.angle-angle/2
    this.swish = function(){
        push()

        translate(boi.pos.x,boi.pos.y)
        rotate(a_angle)
        fill(color)
        rect(0,boi.size/2,size.x,size.y)
        this.a_angle+=angle_speeds
        pop()
    }
}