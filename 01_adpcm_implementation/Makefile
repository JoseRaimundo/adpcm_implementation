include Makefile.top


MODULE     = main

CFLAGS = -I$(INCDIR)/ \
        -I/usr/local/include/\
        -I/usr/include/\
	-Iinclude/\


CFLAGS += -g -ggdb -fPIC


LDFLAGS = \
	-L/usr/local/lib\


SOURCES = \
	adpcm.cpp\
    	main.cpp


.SUFFIXES: .cpp .o .h

include Makefile.build

default: all