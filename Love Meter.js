// Hold GND and press pin 0 to execute code

input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(Math.randomRange(0, 100))
})
basic.showString("LOVE METER")
