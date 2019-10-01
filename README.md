
### ADPCM

Compile

 > make  clean; make


Running encoder

 > ./bin/main e input_file output_file


Running decoder


 > ./bin/main d input_file output_file


### Description





    /*The basic structure
    struct ADPCMstate {
        short prevsample;/* Predicted sample */
        int previndex;/* Index into step size table */
    };
    /* Function prototype for the ADPCM Encoder routine */
    char ADPCMEncoder(short , struct ADPCMstate *);
    /* Function prototype for the ADPCM Decoder routine */
    int ADPCMDecoder(char , struct ADPCMstate *);


#### Encoder

![adpcm encoder](https://github.com/JoseRaimundo/adpcm_implementation/blob/master/img/endoder_adpcm.png?raw=true)




#### Decoder

![adpcm decoder](https://github.com/JoseRaimundo/adpcm_implementation/blob/master/img/decoder_adpcm.png?raw=true)


### Reference

 - http://ww1.microchip.com/downloads/en/appnotes/00643b.pdf

 - https://www.st.com/content/ccc/resource/technical/document/application_note/0b/3c/eb/33/eb/27/4f/fd/DM00109192.pdf/files/DM00109192.pdf/jcr:content/translations/en.DM00109192.pdf

 - https://www.st.com/content/ccc/resource/technical/document/application_note/b2/e5/1c/0d/c2/ab/4d/45/CD00224093.pdf/files/CD00224093.pdf/jcr:content/translations/en.CD00224093.pdf
