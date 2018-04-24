let Swordchance=100
let itemsInRoom = [[]]
let itemInv = []

function Sword(){
    this.pos = createVector(width/2,300)
    this.size = createVector(20,50)
    this.color = "black"
    
    this.active = function(){
        console.log("Pew")
    }

    this.draw = function(){
        fill(this.color)
        rect(this.pos.x,this.pos.y,this.size.x,this.size.y)
    }
}

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

            // More IFs for more rdm weapons
        }
    }
}

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
        }
    }

    this.collect =function(){
        for(let i=0;i<this.length;i++){
            if(this.items[i]!=undefined){
                if(mag(boi.pos.x-this.items[i].pos.x,boi.pos.y-this.items[i].pos.y)){
                    if(roomInArr(itemInv)<10){
                        itemInv[roomInArr(itemInv)]=this.items[i];
                        this.items[i]=undefined;
                    }
                }
            }
        }
    }
}

function roomInArr(arr){
    for(let i=0;i<=30;i++){
        if(arr[i]==undefined){
            return i;
        }
        return 1000000000000;
    }
}