input.onButtonPressed(Button.A, function () {
    radio.sendString("hi my name is rayan")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
