input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . # . # .
        . # # # .
        # . # . #
        `)
    music.playMelody("C C C C C C D E ", 315)
})
music.playMelody("A - D - G B D - ", 120)
led.enable(true)
