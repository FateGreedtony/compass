let bearing = 0
basic.forever(function () {
    bearing = input.compassHeading()
    if (bearing >= 270) {
        basic.showString("N")
    } else if (bearing >= 180) {
        basic.showString("W")
    } else if (bearing >= 90) {
        basic.showString("S")
    } else if (bearing >= 0) {
        basic.showString("E")
    } else {
        basic.showString("compas")
    }
})
