class Quadtree {
    constructor(pos, size, maxObjects, maxLevel, currentLevel) {
        this.pos = pos || createVector(0, 0)
        this.size = size || createVector(width, heigth)
        this.maxObjects = maxObjects || 5
        this.maxLevel = maxLevel || 10
        this.currentLevel = currentLevel || 0
        this.nodes = []
        this.objects = []
    }

    clear() {
        this.nodes = []
        this.objects = []
    }

    // rect Object = {pos: p5.Vector, size: p5.Vector}
    add(rect) {
        let idx

        if(this.nodes[0] !== undefined) {
            idx = this.indexOf(rect)

            if(idx !== -1) {
                this.nodes[idx].add(rect)
                return
            }
        }
        this.objects.push(rect)

        if(this.objects.length > this.maxObjects && this.currentLevel <= this.maxLevel) {
            if(this.nodes[0] === undefined) {
                this.split()
            }
            for(let i = 0; i < this.objects.length; i++) {
                idx = this.indexOf(this.objects[i])

                if(idx !== -1) {
                    this.nodes[idx].add(this.objects.splice(i, 1)[0])
                }
            }
        }
    }

    // rect Object = {pos: p5.Vector, size: p5.Vector}
    indexOf(rect) {
        let idx = -1
        if(rect.pos.y + (rect.size.y / 2) < this.pos.y) {
            if(rect.pos.x + (rect.size.x / 2) < this.pos.x) {
                idx = 0
            }
            else if(rect.pos.x - (rect.size.x / 2) >= this.pos.x) {
                idx = 1
            }
        }
        else if(rect.pos.y - (rect.size.y / 2) >= this.pos.y) {
            if(rect.pos.x + (rect.size.x / 2) < this.pos.x) {
                idx = 2
            }
            else if(rect.pos.x - (rect.size.x / 2) >= this.pos.x) {
                idx = 3
            }
        }
        return idx
    }

    // rect Object = {pos: p5.Vector, size: p5.Vector}
    getCollisions(rect) {
        let idx
        let bufferObjects = this.objects

        if(this.nodes[0] !== undefined) {
            idx = this.indexOf(rect)

            if(idx !== -1) {
                bufferObjects = bufferObjects.concat(this.nodes[idx].getCollisions(rect))
            } else {
                for(let node of this.nodes) {
                    bufferObjects = bufferObjects.concat(node.getCollisions(rect))
                }
            }
        }

        return bufferObjects
    }

    split() {
        let subSize = p5.Vector.div(this.size, 2)
        let nextLevel = this.currentLevel + 1

        // top left
        this.nodes[0] = new Quadtree(p5.Vector.sub(this.pos, p5.Vector.div(subSize, 2)), subSize, this.maxObjects, this.maxLevel, nextLevel)

        // top right
        this.nodes[1] = new Quadtree(createVector(this.pos.x + (subSize.x / 2), this.pos.y - (subSize.y / 2)), subSize, this.maxObjects, this.maxLevel, nextLevel)

        // bottom left
        this.nodes[2] = new Quadtree(p5.Vector.add(this.pos, p5.Vector.div(subSize, 2)), subSize, this.maxObjects, this.maxLevel, nextLevel)

        // bottom right
        this.nodes[3] = new Quadtree(createVector(this.pos.x - (subSize.x / 2), this.pos.y + (subSize.y / 2)), subSize, this.maxObjects, this.maxLevel, nextLevel)
    }

    // returns all objects in the node and its subnodes
    getObjects() {
        let bufferObjects = this.objects

        if(this.nodes[0] !== undefined) {
            for(let node of this.nodes) {
                bufferObjects = bufferObjects.concat(node.getObjects())
            }
        }

        return bufferObjects
    }

    // draws tree borders for debugging
    draw() {
        if(this.nodes[0] !== undefined) {
            for(let node of this.nodes) {
                node.draw()
            }
        }
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y)
    }

    // draws objects for debugging
    drawObjects() {
        if(this.nodes[0] !== undefined) {
            for(let node of this.nodes) {
                node.drawObjects()
            }
        }
        for(let obj of this.objects) {
            rect(obj.pos.x, obj.pos.y, obj.size.x, obj.size.y)
        }
    }
}
