FROM ubuntu:latest

ARG APP_VERSION="1.0"

LABEL version="$APP_VERSION"
LABEL correo="test@gmail.com"

RUN apt-get update && apt-get install -y curl \
    && useradd -ms /bin/bash new_user

# comentarios ramdom
USER new_user

CMD [ "echo", "container con nuevo user y app VERSION:", "$APP_VERSION" ]
