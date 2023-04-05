input.onPinPressed(TouchPin.P0, function () {
    Screen += 5
    makerbit.clearLcd1602()
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    Screen += -1
    makerbit.clearLcd1602()
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
})
input.onPinPressed(TouchPin.P2, function () {
    Screen = 0
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    Screen += -5
    makerbit.clearLcd1602()
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
})
input.onPinPressed(TouchPin.P1, function () {
    Screen += 1
    makerbit.clearLcd1602()
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
})
let Screen = 0
pins.digitalWritePin(DigitalPin.P4, 1)
let Threshold = pins.analogReadPin(AnalogPin.P4)
let LightDrop = 20
Screen = 0
led.enable(true)
makerbit.connectLcd(39)
makerbit.setLcdBacklight(LcdBacklight.Off)
makerbit.setLcdBacklight(LcdBacklight.On)
basic.forever(function () {
    makerbit.showStringOnLcd1602("" + (LightDrop), makerbit.position1602(LcdPosition1602.Pos17), 16)
})
basic.forever(function () {
    LightDrop = pins.analogReadPin(AnalogPin.P4)
    if (LightDrop < 500) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    }
    makerbit.showStringOnLcd1602("" + (Screen), makerbit.position1602(LcdPosition1602.Pos1), 16)
})
