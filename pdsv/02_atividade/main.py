
import numpy as np
import sys
from scipy.io import wavfile
import matplotlib.pyplot as plt
from random import random
from scipy.spatial.distance import euclidean
import soundfile as sf

fName = sys.argv[1]
fs, signal = wavfile.read(fName)

startTime = 0.50                      # of frame, units=seconds
stopTime = 0.60  
# extract the frame
startIdx = int(startTime * fs)
stopIdx = int(stopTime * fs)
s = signal[startIdx:stopIdx]              # /s/ is the frame, named to correspond to the equation                     # ditto

plt.plot(s)
plt.title('Frame')
plt.ylabel('AMPLITUDE')
plt.xlabel('SAMPLE')
plt.autoscale(tight='both');
plt.show()

total = 400

phis = []
N = len(s)

# Autocorrelation
for k in range(0, total):
    phi = 0
    for n in range(k, N):
        phi += s[n] * s[n - k]
    phi *= 1 / N
    phis.append(phi)

plt.plot(phis)
plt.title('Autocorrelation of Frame')
plt.ylabel('PHI')
plt.autoscale(tight='both');
plt.show()
Ds = []
N = len(s)

#AMDF
med = 0
for k in range(0, total):
    D = 0
    for n in range(k, N):
        D = D + abs(s[n] - s[n - k])
    D *= 1 / N
    med = med + D 
    Ds.append(D)

print(med/total)
plt.plot(Ds)
plt.title('Average Magnitude Difference Function of Frame')
plt.ylabel('D')
plt.xlabel('DELAY INDEX')
plt.autoscale(tight='both');
plt.show()