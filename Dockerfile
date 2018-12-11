FROM node:11.4.0-alpine

MAINTAINER iCasei <wendler@icasei.com.br>

RUN apk --update upgrade && \
    apk add curl ca-certificates tzdata && \
    update-ca-certificates && \
    rm -rf /var/cache/apk/*

RUN cp /usr/share/zoneinfo/Brazil/East /etc/localtime && \
    echo "Brazil/East" >  /etc/timezone

# ALPINE DOES NOT PROVIDE NSSWITCH.CONF
# So, Go DNS resolver does not read /etc/hosts..
# This is the fix
# https://github.com/golang/go/issues/22846
# Also see: https://wrfly.kfd.me/posts/alpine-dns-problem/
RUN echo "hosts:	files dns" > /etc/nsswitch.conf

# Alpine ships with musl instead of glibc (this fixes the symlink)
RUN mkdir /lib64 && ln -s /lib/libc.musl-x86_64.so.1 /lib64/ld-linux-x86-64.so.2

RUN mkdir react-native-web

WORKDIR react-native-web

COPY . .

RUN yarn install --network-timeout 1000000

CMD ["yarn", "start:web"]

#CMD ["/bin/sh"]