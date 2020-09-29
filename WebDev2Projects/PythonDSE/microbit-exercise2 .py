from microbit import *
from time import sleep

dot = "00000:00000:00000:00000:00000"

currentIndex = 0
incrementBy = [1,6,-1,-6]
index = 0
times = 3
numberOfindex = 4


while True:

    #if number of index is one change the times to 3
    if numberOfindex == 1:
        times = 3

    for i in range(times):
        for j in range(numberOfindex):   
            # to avoid the index of incrementBy out range
            index = 0 if index > 3 else index

            #converts and show
            dotList = list(dot)
            dotList[currentIndex] = '9'
            display.show(Image(''.join(dotList)))

            currentIndex += incrementBy[index] if currentIndex != 14 else currentIndex
            sleep(0.2)

            #reset the values
            if currentIndex == 28 and numberOfindex == 1:
                numberOfindex = 5
                currentIndex = 0
                index = -1
                times = 4
                break

        index +=1
    numberOfindex -= 1

    
    if times > 2:
        times -= 1