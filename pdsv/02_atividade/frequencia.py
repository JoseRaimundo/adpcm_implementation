import sys
import os
import time
import numpy
import pyaudio
import analyse
 
#Eng Eder de Souza – Frequencia Fundamental

pyaud = pyaudio.PyAudio()
Microfone=sys.argv[1]

try:
    stream = pyaud.open(
    format = pyaudio.paInt16,
    channels = 1,
    rate = 44100,
    input_device_index = int(Microfone),
    input = True)
except:
    print ("Falha ao Encontrar Dispositivo")
    sys.exit()
Frequencia = ""
while True:
  
    try: 
       pegaentrada = stream.read(1024)
    except:
        
        print ("%.0f Hz" %Frequencia)
        os.system("cls")
   
    dados = numpy.fromstring(pegaentrada, dtype=numpy.int16)
    if analyse.detect_pitch(dados):
          print ("%.0f Hz" %analyse.detect_pitch(dados))
          os.system("cls")
          Frequencia = analyse.detect_pitch(dados)
        
    else:
        
         print ("%.0f Hz" %Frequencia)
         os.system("cls")