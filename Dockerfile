FROM jekyll/jekyll:2.5.3
RUN apk --update add tzdata ruby-dev make gcc libc-dev \
    && gem update redcarpet