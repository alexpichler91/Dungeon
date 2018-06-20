collideCircleCircle = function(circlePos1, r1, circlePos2, r2) {
    return p5.Vector.sub(circlePos1, circlePos2).mag() < r1 + r2
}
