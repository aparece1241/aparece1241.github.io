from microbit import *
from time import sleep


while True:
    
    """initialized the needed variables"""
    brightnessControl = (display.read_light_level() // 10) * 10
    brightness = display.read_light_level() - brightnessControl
    posControl = display.read_light_level() // 50
    xpos = (display.read_light_level()-(posControl*50))// 10
    ypos = 4 - posControl
    
    """loops through all the y position"""
    for i in range(5):

        """check all and light all the 
        position that is less than the current y position"""
        
        if i > ypos:
            for j in range(5):
                display.set_pixel(j, i, 9)

        """check all and turn off all position
        greater than the current ypos"""

        if i < ypos:
            for j in range(5):
                display.set_pixel(j, i, 0)

        """check if the i and the current y position is equal"""
        
        if i == ypos:

            """loops through x positions
            check weither the j is greater than 
            or less than the current x position""" 
            
            for j in range(5):
                if j < xpos:
                    display.set_pixel(j, i, 9)
                if j > xpos:
                    display.set_pixel(j, i, 0)

    if ypos > -1:
        display.set_pixel(xpos, ypos, brightness)
