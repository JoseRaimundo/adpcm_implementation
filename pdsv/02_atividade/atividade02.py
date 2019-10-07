# http://bastian.rieck.ru/blog/posts/2014/simple_experiments_speech_detection/

import numpy as np
import sys
import matplotlib.pyplot as plt
from random import random
from scipy.spatial.distance import euclidean
import soundfile as sf

# Energia do Sinal
def shortTimeEnergy(frame):
	return sum([ abs(x)**2 for x in frame ])# / len(frame)

# Magnitude do sinal
def shortTimeMagnitude(frame):
	return sum([ abs(x) for x in frame ])# / len(frame)

# Taxa de Cruzamentos por Zero
def zeroCrossingRate(frame):
    signs = np.sign(frame)
    signs[signs == 0] = -1

    return len(np.where(np.diff(signs))[0])# / len(frame)

# Carregando o sinal de voz
file_audio = sys.argv[1]
signal, samplerate = sf.read(file_audio)
sampletime = 1 / samplerate
#signal = signal[2*samplerate:]#3*samplerate]
time = np.arange(0, len(signal) * sampletime, sampletime)

# Definindo variáveis
overlap = 0.5
frame_time = 0.02
samples_frame = int(frame_time * samplerate)
shift_frame = int(samples_frame * overlap)
qtd_frames = len(signal) * sampletime * frame_time * overlap
k_means = False

# Criando arrays para armazenar Energia, Magnitude e TCZ
frame_energy = []
frame_tcz = []
frame_magnitude = []
voiced = []
voz_silencio = []

limiar_energia = 3
limiar_tcz = 100
limiar_energia2 = 1
limiar_tcz2 = 40

for i in range(0, len(signal), shift_frame):
    frame = signal[i:i + samples_frame]
    frame_energy.append(shortTimeEnergy(frame))
    frame_magnitude.append(shortTimeMagnitude(frame))
    frame_tcz.append(zeroCrossingRate(frame))

    if (frame_energy[-1] > limiar_energia):
        if (frame_tcz[-1] > limiar_tcz):
            voiced.append(0)
        else:
            voiced.append(np.max(signal))
    else:
    	voiced.append(0)

    if (frame_energy[-1] < limiar_energia2 and frame_energy[-1] < limiar_tcz2):
        voz_silencio.append(0)
    else:
        voz_silencio.append(np.max(signal))

frame_energy = np.array(frame_energy)
frame_magnitude = np.array(frame_magnitude)
frame_tcz = np.array(frame_tcz)
frames = np.arange(0, len(signal) * sampletime, shift_frame * sampletime)

print(len(frame_energy))

plt.figure(0)
plt.subplots_adjust(hspace=0.4)
plt.subplot(211)
plt.title('Sinal Original')
plt.plot(time, signal)
plt.subplot(212)
plt.title('Energia Segmental')
plt.ylabel('Amplitude')
plt.xlabel('Tempo (s)')
plt.plot(frames, frame_energy)

plt.figure(1)
plt.subplots_adjust(hspace=0.4)
plt.subplot(211)
plt.title('Sinal Original')
plt.plot(time, signal)
plt.subplot(212)
plt.title('Magnitude Segmental')
plt.ylabel('Amplitude')
plt.xlabel('Tempo (s)')
plt.plot(frames, frame_magnitude)

plt.figure(2)
plt.subplots_adjust(hspace=0.4)
plt.subplot(211)
plt.title('Sinal Original')
plt.plot(time, signal)
plt.subplot(212)
plt.title('Taxa de Cruzamentos por Zero (TCZ)')
plt.ylabel('Amplitude')
plt.xlabel('Tempo (s)')
plt.plot(frames, frame_tcz)

plt.figure()
plt_signal, = plt.plot(time, signal)
plt_voiced, = plt.plot(frames, np.array(voiced), 'r.')
plt.legend([plt_signal, plt_voiced], ['Sinal Original', 'Sons Sonoros (1) / Surdos (0)'])

plt.figure()
plt_signal, = plt.plot(time, signal)
plt_voz_silencio, = plt.plot(frames, np.array(voz_silencio), 'r.')
plt.legend([plt_signal, plt_voz_silencio], ['Sinal Original', 'Atividade de Voz (1) / Silêncio (0)'])
plt.show()

"""plt.figure(0)
plt.subplots_adjust(hspace=0.8)
plt.subplot(411)
plt.title('Sinal Original')
plt.plot(time, signal)
plt.subplot(412)
plt.title('Energia de Curta Duração')
plt.plot(frames, frame_energy)
plt.subplot(413)
plt.title('Magnitude')
plt.plot(frames, frame_magnitude)
plt.subplot(414)
plt.title('TCZ')
plt.plot(frames, frame_tcz)
plt.show()"""

plt.title('Energia e TCZ de cada Frame')
plt.plot(frame_energy, frame_tcz, '.')
plt.xlabel('Energia Segmental')
plt.ylabel('TCZ')
plt.show()



# Plot autocorrelation

plot.acorr(data, maxlags=9)


# Add labels to autocorrelation plot

plot.title('Autocorrelation of XYZ stock price data')

plot.xlabel('Lag')

plot.ylabel('Autocorrelation')

 

# Display the autocorrelation plot

plot.show()

# IMPLEMENTAÇÃO DO K-MEANS
if (k_means):
    X_train = np.concatenate((frame_energy.reshape(-1, 1), frame_tcz.reshape(-1, 1)), axis=1)

    k = 2 # número de classes
    m = 2 # número de parâmetros
    maxit = 10
    it = 1

    centroid = np.zeros((k, m))
    colors = ['r', 'b', 'g', 'k']
    symbols = ['^', '*', 's']
    label = ['plt_surdo', 'plt_sonoro']
    legenda = ['Som Sonoro', 'Som Surdo']

    #for i in range(k):
    centroid[0] = np.array([np.min(X_train[0,:]), np.max(X_train[1,:])])
    centroid[1] = np.array([np.max(X_train[0,:]), np.min(X_train[1,:])])

    while True:
        data_clusters = []
        for i in range(k):
            data_clusters.append([])

        for i in range(len(X_train)):
            min_dist = 1e15
            ct = 0
            for c in range(len(centroid)):
                dist = euclidean(X_train[i], centroid[c])
                if (dist < min_dist):
                    ct = c
                    min_dist = dist
            data_clusters[ct].append([X_train[i, 0], X_train[i, 1]])

        data_clusters = np.array(data_clusters)

        # Plotando centróides
        plt.cla()
        plt.clf()
        #plt.axis([0, np.max(X_train[0,:]), 0, np.max(X_train[1,:])])
        plt.text(115, 140, 'Iteração: ' + str(it))

        for i in range(k):
            plt.plot(centroid[i,0], centroid[i,1], colors[i] + 'x', linewidth=5)
            try:
                if (i == 0):
                    plt_surdo, = plt.plot(np.array(data_clusters[i])[:,0], np.array(data_clusters[i])[:,1], colors[i] + symbols[i])
                else:
                    plt_sonoro, = plt.plot(np.array(data_clusters[i])[:,0], np.array(data_clusters[i])[:,1], colors[i] + symbols[i])
            except:
                pass
        plt.legend([plt_surdo, plt_sonoro], ['Som Surdo', 'Som Sonoro'])
        plt.title('K-means para a Detecção Automática de Sons Sonoros e Surdos')
        plt.xlabel('Energia Segmental')
        plt.ylabel('TCZ')
        plt.pause(2)

        meanx, meany = 0, 0

        centroid_ant = np.copy(centroid)

        for i in range(k):
            try:
                meanx = np.mean(np.array(data_clusters[i])[:,0])
                meany = np.mean(np.array(data_clusters[i])[:,1])
                centroid[i] = np.array([meanx, meany])
            except:
                centroid[i] = np.array([random() * np.max(X_train), random() * np.max(X_train)])

        # média do somatório da diferença das coordenadas dos centróides
        mean  = np.mean(np.abs(centroid_ant - centroid))
        if (mean < 1e-10):
            plt.show()
            break

        it += 1

    voiced_kmeans = []

    for i in range(len(X_train)):
        min_dist = 1e15
        ct = 0
        for c in range(len(centroid)):
            dist = euclidean(X_train[i], centroid[c])
            if (dist < min_dist):
                ct = c
                min_dist = dist
        if (ct == 0):
            voiced_kmeans.append(0)
        else:
            voiced_kmeans.append(np.max(signal))

    plt_signal, = plt.plot(time, signal, label='plt_signal')
    plt_kmeans, = plt.plot(frames, voiced_kmeans, 'r.', label='plt_kmeans')
    plt.legend([plt_signal, plt_kmeans], ['Sinal Original', 'Sons Sonoros (K-means)'])
    plt.title('Detecção Automática do Som Sonoro realizada com a Aplicação do K-means')
    plt.xlabel('Tempo (s)')
    plt.ylabel('Amplitude')
    plt.show()




