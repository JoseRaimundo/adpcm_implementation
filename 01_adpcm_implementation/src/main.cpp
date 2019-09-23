/*****************************************************************************
* Filename: PCSPEECH.C *
******************************************************************************
* Author: Rodger Richey *
* Title: Senior Applications Engineer *
* Company: Microchip Technology Incorporated *
* Revision: 0 *
* Date: 1-11-96 *
* Compiled using Borland C+ Version 3.1 *
******************************************************************************
* Include files: *
* stdio.h - Standard input/output header file *
* stdlib.h - Standard library header file *
* string.h - Standard string header file *
* pcadpcm.h - ADPCM related information header file (Rev0) *
******************************************************************************
* Usage: *
* ADPCM Encode - pcspeech e <infile> <outfile> *
* <infile> is a 16-bit raw speech file *
* <outfile> contains the ADPCM codes *
* ADPCM Decode - pcspeech d <infile> <outfile> *
* <infile> contains the ADPCM codes *
* <outfile> is a 16-bit raw speech file *
******************************************************************************
* This file contains the code to: *
* - Open the input and output files *
* - Read data from the input file *
* - Call the encode/decode routines *
* - Write data to the output file *
*****************************************************************************/
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "../include/pcadpcm.h"
/*****************************************************************************
* Usage - this routine prints a how to message for the pcspeech prgm *
******************************************************************************
* Input variables: *
* None *
* Output variables: *
* None *
*****************************************************************************/
void Usage(void)
{
printf("ADPCM Encoder/Decoder -- usage:\n");
printf("\tEncoder = pcspeech e infile outfile\n");
printf("\tDecoder = pcspeech d infile outfile\n");
exit(1);
}
/*****************************************************************************
* main - controls file I/O and ADPCM calls *
******************************************************************************
* Input variables: *
* int argc - number of arguements in argv *
* char **argv - pointer to an array of strings *
* Return variables: *
* None *
*****************************************************************************/
int main(int argc, char **argv){
    int which;
    short sample;
    unsigned char code;
    int n;
    struct ADPCMstate state;
    FILE *fpin;
    FILE *fpout;
    state.prevsample=0;
    state.previndex=0;
    /* Determine if this is an encode or decode operation */
    if(argc <= 1)
        Usage();
    else if( strcmp(argv[1],"e")==0 || strcmp(argv[1],"E")==0 )
        which = 0;
    else if( strcmp(argv[1],"d")==0 || strcmp(argv[1],"D")==0 )
        which = 1;
        argc--;
        argv++;
        /* Open input file for processing */
    if(argc <= 1)
        Usage();
    else if( (fpin=fopen(argv[1],"rb"))==NULL) {
        printf("ADPCM Encoder/Decoder\n");
        printf("ERROR: Could not open %s for input\n",argv[1]);
        exit(1);
    }
    argc--;
    argv++;
    /* Open output file */
    if(argc <= 1){
        fclose(fpin);
        Usage();
    }else if( (fpout=fopen(argv[1],"wb"))==NULL){
        fclose(fpin);
        printf("ADPCM Encoder/Decoder\n");
        printf("ERROR: Could not open %s for output\n",argv[1]);
        exit(1);
    }
    // ADPCM Decoder selected
    if(which){
        printf("ADPCM Decoding in progress\n");
        /* Read and unpack input codes and process them */
        while (fread(&code, sizeof (char), 1, fpin) == 1) {
            // Send the upper 4-bits of code to decoder
            sample = ADPCMDecoder((code>>4)&0x0f, &state);
            // Write sample for upper 4-bits of code
            fwrite(&sample, sizeof(short), 1, fpout);
            // Send the lower 4-bits of code to decoder
            sample = ADPCMDecoder(code&0x0f,&state);
            // Write sample for lower 4-bits of code
            fwrite(&sample,sizeof(short),1,fpout);
        }
    }else{ // ADPCM Encoder selected
        printf("ADPCM Encoding in progress\n");
        /* Read input file and process */
        while (fread(&sample, sizeof(short), 1, fpin) == 1)  {
            // Encode sample into lower 4-bits of code
            code = ADPCMEncoder(sample,&state);
            // Move ADPCM code to upper 4-bits
            code = (code << 4) & 0xf0;
            // Read new sample from file
            if(fread(&sample,sizeof(short),1,fpin)==0) {
                // No more samples, write code to file
                fwrite(&code,sizeof(char),1,fpout);
                break;
            }
            // Encode sample and save in lower 4-bits of code
            code |= ADPCMEncoder(sample,&state);
            // Write code to file, code contains 2 ADPCM codes
            fwrite(&code, sizeof (char), 1, fpout);
        }
    }
    fclose(fpin);
    fclose(fpout);
    return 0;
}