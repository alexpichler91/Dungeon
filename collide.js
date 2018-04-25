collideRectCircle = function(rectPos, rectSize, circlePos, r) {
    if(circlePos.x + r >= rectPos.x - (rectSize.x / 2) && circlePos.x - r <= rectPos.x + (rectSize.x / 2)) {
        if(circlePos.y + r >= rectPos.y - (rectSize.y / 2) && circlePos.y - r <= rectPos.y + (rectSize.y / 2)) {
            return true
        }
    }
    return false
}
