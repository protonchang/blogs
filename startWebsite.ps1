docker stop blog-website
docker run --rm --name blog-website -p 4000:80 -e "TZ=Asia/Taipei" --volume="${PWD}:/srv/jekyll" --volume="${PWD}/quire.conf:/etc/nginx/conf.d/jekyll.conf:ro" -d quire-blog
open http://localhost:4000/blog/