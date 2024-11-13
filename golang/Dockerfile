FROM golang:1.18-alpine AS build

WORKDIR /app

COPY main.go .

RUN go build -o goapp main.go

FROM alpine:latest

COPY --from=build /app/goapp /mygolangapp

CMD [ "/mygolangapp" ]

