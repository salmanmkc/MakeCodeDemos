// Shows a random number between 1 and 6 to represent dice numbers
// Have a go at doing dice symbols!

input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Math.randomRange(1, 6))
})
