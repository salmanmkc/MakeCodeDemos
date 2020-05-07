// Coin Flipper / Head or tails game

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Skull)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Skull)
    basic.showIcon(IconNames.SmallDiamond)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
