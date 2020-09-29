from microbit import *
from time import sleep

count = 0
dot = "00000:00000:00000:00000:00000:"

while True:
    
    count = 0 if count > 29 else count
    
    if dot[count] != ":":
        dotList = list(dot)
        dotList[count] = '9'
        display.show(Image(''.join(map(str, dotList))))
        dotList[count] = '0'
        dot = ''.join(map(str, dotList))
        sleep(0.2) 
    count += 1
    

    