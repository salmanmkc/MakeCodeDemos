// This will flash a heart using the LEDs

basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
