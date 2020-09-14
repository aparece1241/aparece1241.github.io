from adafruit_circuitplayground import cp
from time import sleep
cp.pixels.brightness = 1


color = 0
index = 0
mx = 32
temp = 0
while True:  
    if cp.light > 0:
        if(cp.light % 32 == 0):
            index = int((cp.light / 32))
            temp = 0 if cp.light < 32 else cp.light

    if cp.light < temp:
        temp = temp -mx
        index = index -1

    color = int(255 * (cp.light - temp)/ 32) 
    if index == 10:
        index - 1
        color = 247
    cp.pixels[index] = (0,color,0)
    