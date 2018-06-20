collideRectRect = function(rectPos1, rectSize1, rectPos2, rectSize2) {
    if(rectPos1.x + (rectSize1.x / 2) >= rectPos2.x - (rectSize2.x / 2) && rectPos1.x - (rectSize1.x / 2) <= rectPos2.x + (rectSize2.x / 2)) {
        if(rectPos1.y + (rectSize1.y / 2) >= rectPos2.y - (rectSize2.y / 2) && rectPos1.y - (rectSize1.y / 2) <= rectPos2.y + (rectSize2.y / 2)) {
            return true
        }
    }
    return false
}
