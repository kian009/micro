def on_button_pressed_a():
    music.play_melody("G B C5 A B G A F ", 500)
input.on_button_pressed(Button.A, on_button_pressed_a)

music.play_melody("A - D - G B D - ", 120)
led.enable(True)

def on_forever():
    pass
basic.forever(on_forever)
