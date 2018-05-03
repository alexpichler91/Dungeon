let rooms = [[]]
let roomProbability = 0.75
let minRoomX = 200
let maxRoomX = 800
let minRoomY = 150
let maxRoomY = 600
let doorHeight = 50
let doorWidth = 20
let doorFreeSpace = 50
let cellHeight = 100
let cellWidth = 100

function Room(difficulty = 0) {
    let door
    let obstacle
    let obsPos
    let obsSize
    let obstructed
    this.size = createVector(floor(random(minRoomX, maxRoomX)), floor(random(minRoomY, maxRoomY)))
    this.difficulty = difficulty
    this.obstaclesFilled = false
    this.adjacentRoomsGenerated = false
    this.doors = []
    this.obstacles = []
    this.items = []

    this.draw = function() {
        push()
        translate(width / 2, height / 2.5)
        // draw room
        fill("white")
        strokeWeight(4)
        rect(0, 0, this.size.x, this.size.y)
        // draw doors
        strokeWeight(2)
        fill("lightgrey")
        for(door of this.doors) {
            if(door.x != undefined) {
                if(door.x != 0) {
                    rect(door.x * ((this.size.x - doorWidth) / 2), 0, doorWidth, doorHeight)
                } else if(door.y != 0) {
                    rect(0, door.y * ((this.size.y - doorWidth) / 2), doorHeight, doorWidth)
                }
            }
        }
        // draw obstacles
        for(obs of this.obstacles) {
            if(obs != undefined)
                obs.draw()
        }
        pop()
    }
    this.addObstacle = function(obstacle) {
        this.obstacles.push(obstacle)
    }
    this.fillObstacles = function() {
        if(!this.obstaclesFilled) {
            let roomSizeModifier = (this.size.x / maxRoomX) * (this.size.y / maxRoomY)
            while(this.obstacles.indexOf(undefined) != -1) {
                this.obstacles.splice(this.obstacles.indexOf(undefined), 1)
            }
            for (let i = 0; i < maxObstaclesPerRoom; i++) {
                if(random(1) <= obstacleProbability * roomSizeModifier || this.obstacles.length < minObstaclesPerRoom) {
                    do {
                        obstructed = false
                        obsSize = createVector(floor(random(minObstacleX, maxObstacleX)), floor(random(minObstacleY, maxObstacleY)))
                        obsPos = createVector(floor(random(-(this.size.x - obsSize.x) / 2, (this.size.x - obsSize.x) / 2)), floor(random(-(this.size.y - obsSize.y) / 2, (this.size.y - obsSize.y) / 2)))
                        if(collideRectCircle(obsPos, obsSize, boi.pos, boi.size / 2)) {
                            obstructed = true
                        }
                        for(obs of this.obstacles) {
                            if(obs != undefined) {
                                if(collideRectRect(obsPos, obsSize, obs.pos, obs.size)) {
                                    obstructed = true
                                    break
                                }
                            }
                        }
                        for (door of this.doors) {
                            if(door.x != undefined) {
                                if(door.x != 0) {
                                    if(collideRectRect(obsPos, obsSize, createVector(door.x * ((this.size.x - doorWidth) / 2), 0), createVector(doorWidth + doorFreeSpace, doorHeight + doorFreeSpace * 2))) {
                                       obstructed = true
                                       break
                                    }
                                } else if(door.y != 0) {
                                    if(collideRectRect(obsPos, obsSize, createVector(0, door.y * ((this.size.y - doorWidth) / 2)), createVector(doorHeight + doorFreeSpace * 2, doorWidth + doorFreeSpace))) {
                                        obstructed = true
                                        break
                                    }
                                }
                            }
                        }
                    } while(obstructed)

                    switch(floor(random(obstacleTypes))) {
                        case 0: {
                            obstacle = new Obstacle_Stone(obsPos, obsSize)
                            break
                        }
                        case 1: {
                            obstacle = new Obstacle_Wood(obsPos, obsSize)
                            break
                        }
                        case 2: {
                            obstacle = new Obstacle_Dirt(obsPos, obsSize)
                            break
                        }
                        default:
                            break
                    }
                    if(obstacle != undefined) {
                        this.obstacles.push(obstacle)
                    }
                }
            }
            this.obstaclesFilled = true
        }
    }
    this.generateAdjacent = function() {
        if(!this.adjacentRoomsGenerated) {
            this.offset = createVector(-1, -1)

            for(; this.offset.x <= 1; this.offset.x++) {
                for(this.offset.y = -1; this.offset.y <= 1; this.offset.y++) {
                    if(this.offset.x != this.offset.y && this.offset.x != -this.offset.y) {
                        if(rooms[roomPos.x + this.offset.x] === undefined) {
                            rooms[roomPos.x + this.offset.x] = []
                        }
                        if(rooms[roomPos.x + this.offset.x][roomPos.y + this.offset.y] === undefined) {
                            if(random(1) <= roomProbability) {
                                rooms[roomPos.x + this.offset.x][roomPos.y + this.offset.y] = new Room
                            }
                            else {
                                rooms[roomPos.x + this.offset.x][roomPos.y + this.offset.y] = null
                            }
                        }
                    }
                }
            }
            this.getDoors()
            this.adjacentRoomsGenerated = true
        }
    }
    this.getDoors = function() {
        this.offset = createVector(-1, -1)
        this.doors = []
        for(this.offset.x = -1; this.offset.x <= 1; this.offset.x++) {
            for(this.offset.y = -1; this.offset.y <= 1; this.offset.y++) {
                if(this.offset.x != this.offset.y && this.offset.x != -this.offset.y) {
                    if(rooms[roomPos.x + this.offset.x] != undefined) {
                        if(rooms[roomPos.x + this.offset.x][roomPos.y + this.offset.y] != undefined) {
                            this.doors.push(createVector(this.offset.x, this.offset.y))
                        }
                    }
                }
            }
        }
        if(rooms[roomPos.x][roomPos.y].doors.length == 0) {
            this.generateAdjacent()
        }
    }
}
