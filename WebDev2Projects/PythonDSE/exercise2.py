from adafruit_circuitplayground import cp
from time import sleep
cp.pixels.brightness = 1


color = 0
index = 0
while True:
    if cp.light == 0:  
        color = cp.light
    elif cp.light > 0:
        if(cp.light % 32 == 0):
            index = (cp.light / 32) - 1
        print(32 * cp.light/ 32)
    
    
    
    #     color = int(255 * ()/32)
    # cp.pixels[index] = (color,color,color) 