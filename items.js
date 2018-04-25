let Chance_Sword = 100;
let Items_Rooms = [[]]

function Sword(){
<<<<<<< HEAD
    this.pos = createVector(width/1.5,150)
    this.size = createVector(0,0)
    this.InvPlace = 10
=======
    this.pos = createVector(width/2,300)
    this.size = createVector(20,50)
    this.color = "black"

    this.active = function(){
        console.log("Pew")
    }
>>>>>>> a263327217b0de89a6aa31c5f197829fddc24b5b

    this.draw = function(){
        fill("black")
        rect(this.pos.x,this.pos.y,this.size.x,this.size.y)
    }

<<<<<<< HEAD
    this.active = function(){
=======
function SpawnItems(){

    this.spawnItems = function(){
        if( itemsInRoom[roomPos.x][roomPos.y] == undefined){
            this.random= random(0,100)
            itemsInRoom[roomPos.x][roomPos.y] = new Items();
            if(Swordchance>=this.random){
                if(roomInArr(itemsInRoom[roomPos.x][roomPos.y].items)<100){
                    itemsInRoom[roomPos.x][roomPos.y].items[roomInArr(itemsInRoom[roomPos.x][roomPos.y].items)] = new Sword();
                }
            }
>>>>>>> a263327217b0de89a6aa31c5f197829fddc24b5b

    }
}

<<<<<<< HEAD

function ItemsInRoom(){
    this.itemArr = []

    this.spawn = function(){
        this.random = random(0,100)

        if(this.random<=Chance_Sword){
            this.itemArr.push(new Sword);
=======
function Items(){
    this.itemcnt=0
    this.items = []
    this.length = 0

    this.draw=function(){
        this.length = this.items.length;
        this.collect();
        for(let i=0;i<this.length;i++){
            if(this.items[i]!=undefined){
                this.items[i].draw();
            }
>>>>>>> a263327217b0de89a6aa31c5f197829fddc24b5b
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
<<<<<<< HEAD
    if(Items_Rooms[roomPos.x][roomPos.y]==undefined){
        Items_Rooms[roomPos.x][roomPos.y]= new ItemsInRoom();
        Items_Rooms[roomPos.x][roomPos.y].spawn();
    }
=======
>>>>>>> a263327217b0de89a6aa31c5f197829fddc24b5b
}
