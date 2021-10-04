function animacion2 () {
    basic.showLeds(`
        . # . # .
        # . . . #
        . # . . .
        . . . # .
        # . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . . .
        . . . # .
        `)
    basic.showLeds(`
        # . . . .
        . . # . .
        . # . # .
        # . . . #
        . # . . .
        `)
    basic.showLeds(`
        . # . # .
        # . . . .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . # . . .
        . . . # .
        # . . . .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        # . . . #
        . # . . .
        . . . # .
        # . . . .
        . . # . .
        `)
}
radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Cow)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P2, 1)
    animacion2()
    basic.clearScreen()
    basic.showString("Hidratado")
})
radio.setGroup(1)
basic.forever(function () {
    animacion2()
})
