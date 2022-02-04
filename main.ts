input.onButtonPressed(Button.A, function () {
    basic.showString("" + (pins.analogReadPin(AnalogPin.P1)))
})
let strip = neopixel.create(DigitalPin.P2, 25, NeoPixelMode.RGB_RGB)
basic.forever(function () {
    for (let index = 0; index <= 24; index++) {
        strip.setBrightness(pins.map(
        pins.analogReadPin(AnalogPin.P1),
        1,
        1250,
        1,
        100
        ))
        strip.setPixelColor(index, neopixel.rgb(Math.randomRange(0, 254), Math.randomRange(0, 254), Math.randomRange(0, 254)))
        strip.show()
    }
    basic.pause(100)
})
