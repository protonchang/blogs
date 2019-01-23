docker run --rm \
  -e "TZ=Asia/Taipei" \
  --volume="${PWD}:/srv/jekyll" \
  -it quire-blog \
  jekyll build