---
layout: null
---

var store = [
  {% for post in site.posts %}
    {
        "title": {{ post.title | jsonify }},
        "excerpt": {{ post.content | newline_to_br | replace:"<br />", " " | replace:"</p>", " " | replace:"</h1>", " " | replace:"</h2>", " " | replace:"</h3>", " " | replace:"</h4>", " " | replace:"</h5>", " " | replace:"</h6>", " "| strip_html | strip_newlines | jsonify }},
        "categories": {{ post.categories | jsonify }},
        "tags": {{ post.tags | jsonify }},
        "url": {{ post.url | prepend: site.baseurl | jsonify }},
    } {% unless forloop.last %},{% endunless %}
  {% endfor %}]