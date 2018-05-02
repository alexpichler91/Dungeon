let Chance_Sword = 50;
let Items_Rooms = [[]]
let Items_Inv=[]

function Sword(){
    this.pos = createVector(-50,-100)
    this.size = createVector(5,25)
    this.InvPlace = 10
    this.collectable=true
    this.cooldown = 5
    this.buffer =0

    this.draw = function(){
        push()
        fill("black")
        translate(width/2,height/2.5)
        rect(this.pos.x,this.pos.y,this.size.x,this.size.y)
        pop()
    }

    this.active = function(){
        console.log(this.buffer)
        if(this.buffer <= 0){
        clearInterval();
        console.log("suicide")
        this.buffer = this.cooldown;
        } else {
            setInterval(function(){this.buffer--},1000)
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
            
            if(collideRectCircle(Items_Rooms[roomPos.x][roomPos.y].itemArr[i].pos,Items_Rooms[roomPos.x][roomPos.y].itemArr[i].size,boi.pos,boi.size/2) && findUndefined(Items_Inv)<9)
                {
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