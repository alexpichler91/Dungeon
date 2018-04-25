let Chance_Sword = 100;
let Items_Rooms = [[]]
let Inv=[]
function Sword(){
    this.pos = createVector(-50,-100)
    this.size = createVector(5,25)
    this.InvPlace = 10

    this.draw = function(){
        push()
        fill("black")
        translate(width/2,height/2.5)
        rect(this.pos.x,this.pos.y,this.size.x,this.size.y)
        pop()
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
        if(collideRectCircle(Items_Rooms[roomPos.x][roomPos.y].itemArr[i].pos,Items_Rooms[roomPos.x][roomPos.y].itemArr[i].size,boi.pos,boi.size/2) && Inv.length<9)
            {
                Inv.push(Items_Rooms[roomPos.x][roomPos.y].itemArr[i])
                Items_Rooms[roomPos.x][roomPos.y].itemArr.splice(i)

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
