#import the pyplot and wavfile modules 
import sys
import matplotlib.pyplot as plot

from scipy.io import wavfile

# Read the wav file (mono)
audio_file = sys.argv[1]
samplingFrequency, signalData = wavfile.read(audio_file)

# Plot the signal read from wav file

plot.subplot(211)

plot.title('Spectrograma')

plot.plot(signalData)

plot.xlabel('Sample')

plot.ylabel('Amplitude')

plot.subplot(212)

plot.specgram(signalData,Fs=samplingFrequency)

plot.xlabel('Time')

plot.ylabel('Frequency')

plot.show()