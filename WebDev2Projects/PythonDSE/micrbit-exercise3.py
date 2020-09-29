from microbit import *
from time import sleep


while True:
    brightnessControl = (display.read_light_level() // 10) * 10
    brightness = display.read_light_level() - brightnessControl
    posControl = display.read_light_level() // 50
    xpos = (display.read_light_level()-(posControl*50))// 10
    ypos = 4 - posControl
    
    for i in range(5):
        if i > ypos:
            for j in range(5):
                display.set_pixel(j, i, 9)
        if i < ypos:
            for j in range(5):
                display.set_pixel(j, i, 0)
        if i == ypos:
            for j in range(5):
                if j < xpos:
                    display.set_pixel(j, i, 9)
                if j > xpos:
                    display.set_pixel(j, i, 0)
                    
    if ypos > -1:
        display.set_pixel(xpos, ypos, brightness)
