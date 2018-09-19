---
layout: post
title:  "Have Trouble Accessing The New Version of Quire?"
date:   2017-09-19 11:58:07
categories: "troubleshooting"

index-intro: "As many of you already know, we update Quire for you to get the most out of it. If you have trouble accessing the latest verison, you can try clearing your browser cache and reload, and also your Service Worker cache. First, at the top right, click on the More options icon and hover to More tools..."
category-intro: "As many of you already know, we update Quire for you to get the most out of it. If you have trouble accessing the latest verison..."

image: "2017-09-19-Have-Trouble-Accessing-The-New-Version-of-Quire/black-computer-contemporary-270435.jpg"
tags: reload cache service worker
author: "Crystal Chen"
authorImg: "/images/author/crystal.png"
authorDesc: "Content writer, food lover, and aniholic."
authorLink: "https://medium.com/@crystalshchen"

relatedPosts: ["Why We Abandoned the To-Do List", "Quire Mark III: Nested Tasks Meets Board"]

imgDir: "2017-09-19-Have-Trouble-Accessing-The-New-Version-of-Quire"
---


![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/black-computer-contemporary-270435.jpg)

As many of you already know, we update Quire for you to get the most out of it. If you have trouble accessing the latest verison, you can try the following.

Here we use Chrome browser as an example:

## 1. Clean Your Cache and Reload

First, at the top right, click on the "More options" (three vertical dot) icon and hover to "More tools."

<div style="max-width: 265px; max-height: 442px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/quire-trouble-access-new-version.png)
{% endmarkdown %}
</div>

Click on "Clear browsing data."

<div style="max-width: 539px; max-height: 108px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/quire-trouble-access-new-version-2.png)
{% endmarkdown %}
</div>

Next, make sure "Cached images and files" is checked, and click on the "Clear data" button.

<div style="max-width: 509px; max-height: 471px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/quire-trouble-access-new-version-3.png)
{% endmarkdown %}
</div>

Now, press Ctrl+Shift+R (or Cmd+Shift+R for Mac) to refresh the page.

## 2. Unregister Your Service Worker

First, go to this URL: `chrome://serviceworker-internals/`

<div style="max-width: 522px; max-height: 31px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/quire-trouble-access-new-version-4.png)
{% endmarkdown %}
</div>

Then, click on the "Unregister" button of all the Service Workers from there.

<div style="max-width: 578px; max-height: 457px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/quire-trouble-access-new-version-5.png)
{% endmarkdown %}
</div>

Now, press Ctrl+Shift+R (or Cmd+Shift+R for Mac) to refresh the page.

If you still cannot access Quire in the new version, please contact us at support@quire.io.

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
