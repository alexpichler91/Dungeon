collideRectCircle = function(rectPos, rectSize, circlePos, r, tolerance) {
    if(tolerance !== undefined) {
        if(circlePos.x + r >= rectPos.x - (rectSize.x / 2) && circlePos.x - r <= rectPos.x + (rectSize.x / 2)) {
            if(circlePos.y + r >= rectPos.y - (rectSize.y / 2) - (tolerance / 2) && circlePos.y + r <= rectPos.y - (rectSize.y / 2) + (tolerance / 2)) {
                return "UP"
            }
            if(circlePos.y - r <= rectPos.y + (rectSize.y / 2) + (tolerance / 2) && circlePos.y - r >= rectPos.y + (rectSize.y / 2) - (tolerance / 2)) {
                return "DOWN"
            }
        }
        if(circlePos.y + r >= rectPos.y - (rectSize.y / 2) && circlePos.y - r <= rectPos.y + (rectSize.y / 2)) {
            if(circlePos.x + r >= rectPos.x - (rectSize.x / 2) - (tolerance / 2) && circlePos.x + r <= rectPos.x - (rectSize.x / 2) + (tolerance / 2)) {
                return "RIGHT"
            }
            if(circlePos.x - r <= rectPos.x + (rectSize.x / 2) + (tolerance / 2) && circlePos.x - r >= rectPos.x + (rectSize.x / 2) - (tolerance / 2)) {
                return "LEFT"
            }
        }
    }
    if(circlePos.x + r >= rectPos.x - (rectSize.x / 2) && circlePos.x - r <= rectPos.x + (rectSize.x / 2)) {
        if(circlePos.y + r >= rectPos.y - (rectSize.y / 2) && circlePos.y - r <= rectPos.y + (rectSize.y / 2)) {
            return true
        }
    }

    return false
}

collideCircleCircle = function(circlePos1, r1, circlePos2, r2) {
    return p5.Vector.sub(circlePos1, circlePos2).mag() < r1 + r2
}

collideRectRect = function(rectPos1, rectSize1, rectPos2, rectSize2) {
    if(rectPos1.x + (rectSize1.x / 2) >= rectPos2.x - (rectSize2.x / 2) && rectPos1.x - (rectSize1.x / 2) <= rectPos2.x + (rectSize2.x / 2)) {
        if(rectPos1.y + (rectSize1.y / 2) >= rectPos2.y - (rectSize2.y / 2) && rectPos1.y - (rectSize1.y / 2) <= rectPos2.y + (rectSize2.y / 2)) {
            return true
        }
    }
    return false
}
