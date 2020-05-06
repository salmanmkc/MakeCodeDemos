// Small program to send messages between Micro Bits


input.onButtonPressed(Button.A, function () {
    radio.sendString("Yo")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
// Group Micro Bits in groups to stop receiving messaegs from all Micro Bits
radio.setGroup(1)
