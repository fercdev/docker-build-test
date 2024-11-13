FROM alpine:latest

ENV MY_VAR="HELLO WORLD DESDE ALPINE"

WORKDIR /app

RUN echo "archivo de exto desde contenedor" > mensaje.txt

CMD echo $MY_VAR && cat mensaje.txt