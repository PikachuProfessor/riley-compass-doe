let heading = ""
basic.forever(function () {
    if (input.compassHeading() < 45) {
        heading = "N"
    } else if (input.compassHeading() < 135) {
        heading = "E"
    } else if (input.compassHeading() < 225) {
        heading = "S"
    } else if (input.compassHeading() < 315) {
        heading = "W"
    } else {
        heading = "N"
    }
    basic.showString(heading)
})
