---
layout: post
title:  "Highlight Your Tasks with Color and Styles"
date:   2017-12-14 11:58:07
categories: "features"

index-intro: "We see it as our mission to keep a simple, clean interface, including a neat task list. However, for those of you who want to easily identify your tasks and projects in a long list, you can use Markdown, and CSS styles to make them stand out..."
category-intro: "We see it as our mission to keep a simple, clean interface, including a neat task list. However, for those of you who want to easily identify..."

image: "2017-12-14-Highlight-Your-Tasks-with-Color-and-Styles/0.png"
tags: project team clients collaboration
author: "Crystal Chen"
authorImg: "/images/author/crystal.png"
authorDesc: "Content writer, food lover, and aniholic."
authorLink: "https://medium.com/@crystalshchen"

relatedPosts: ["Our Very Own Markdown", "Type it while you think it, with @, #, <> and more."]

imgDir: "2017-12-14-Highlight-Your-Tasks-with-Color-and-Styles"
---


![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/0.png)

We see it as our mission to keep a simple, clean interface, including a neat task list. However, for those of you who want to easily identify your tasks and projects in a long list, you can use [Markdown](https://quire.io/blog/p/Our-Very-Own-Markdown.html), and [CSS styles](https://www.w3schools.com/cssref/) to make them stand out. Additionally, if you want to add special characters, [HTML entities](https://www.w3schools.com/html/html_entities.asp) are supported too.

Here are a couple examples to get you started:

## Add Color & Styles to Task Names

If you type a task name like this:

```
{color:green|a green task}
```

You will see:

<div style="max-width: 95px; max-height: 25px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/1.png)
{% endmarkdown %}
</div>

Or, if you type:

```
**{color:green, font-size:20px, text-decoration:underline|a big green task}**
```

It will turn into:

<div style="max-width: 177px; max-height: 34px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/2.png)
{% endmarkdown %}
</div>

This is what a task list with styles looks like:

<div style="max-width: 600px; max-height: 252px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/3.png)
{% endmarkdown %}
</div>

#### Tip: You can quickly add some of the basic styles by typing ```{``` and selecting the style you want.

<div style="max-width: 371px; max-height: 212px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/5.png)
{% endmarkdown %}
</div>

## Add Color & Styles to Text

Not just task names, you can also add color and styles in task descriptions and comments.

Here is an example:

<div style="max-width: 405px; max-height: 100px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/4.png)
{% endmarkdown %}
</div>

## Add Characters to Text

What is more, you can add special characters and symbols with [HTML entities](https://www.w3schools.com/html/html_entities.asp) too.

For example, you can enter:

```
&cent;
```

Then, it will show as:

¢

There is more to Markdown in task descriptions and comments. For a complete Markdown cheat sheet, you can check out this [blog post](https://quire.io/blog/p/Our-Very-Own-Markdown.html).

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
