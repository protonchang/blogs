FROM jekyll/jekyll:2.5.3

RUN apk add --update \
	--repository https://dl-3.alpinelinux.org/alpine/v3.3/main \
	tzdata ruby-dev make gcc libc-dev && \
    gem update redcarpet