let Chance_Sword = 100;
let Items_Rooms = [[]]

function Sword(){
    this.pos = createVector(width/1.5,150)
    this.size = createVector(0,0)
    this.InvPlace = 10

    this.draw = function(){
        fill("black")
        rect(this.pos.x,this.pos.y,this.size.x,this.size.y)
    }

    this.active = function(){

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
        if(mag(Items_Rooms[roomPos.x][roomPos.y].itemArr[i].pos.x-boi.pos.x , Items_Rooms[roomPos.x][roomPos.y].itemArr[i].pos.y-boi.pos.y)<10)
        console.log("YETTTTttt")
    }

    this.draw = function(){
        for(let i = itemArr.length-1;i>-1;i--){
            this.itemArr[i].draw();
            this.collect(i);
        }
    }
}

function SpawnItems(){

    if(Items_Rooms[roomPos.x] == undefined) {
        rooms[roomPos.x] = []
    }
    if(Items_Rooms[roomPos.x][roomPos.y]==undefined){
        Items_Rooms[roomPos.x][roomPos.y]= new ItemsInRoom();
        Items_Rooms[roomPos.x][roomPos.y].spawn();
    }
}
