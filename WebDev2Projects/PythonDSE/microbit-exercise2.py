from microbit import *
from time import sleep


dot = "00000:00000:00000:00000:00000:"

misc = [1,6,-1,-6] 
count = -1
index = -1
counter = 0
rep = 3
rep2 = 5
con = 2



while True:
    
    for i in range(rep):
        count+=1
        if count > 3:
            count = 0

        for j in range(rep2):
            index = index + misc[count]

            dotList = list(dot)
            dotList[index] = '9'
            display.show(Image(''.join(map(str, dotList))))
            dotList[index] = '0'
            dot = ''.join(map(str, dotList))


            sleep(0.2)
        counter += 1 

        # ends the loop reset the values of the properties
        if index == 14:
            count = -1
            index = -1
            counter = 0
            rep = 3
            rep2 = 5
            con = 2
            break

        # change the value of the rep
        if rep2  < 0:
            rep2 = 1

        # change the value of the rep2,con,counter
        if counter > con:
            rep2 -= 1
            con = 1
            counter = 0

        # would not let the value of con into 0
        con = 2 if con < 1 else con

        if rep > 2:
            rep = 2
            rep2 = 4
    

