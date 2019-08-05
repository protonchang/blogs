---
layout: post
title:  "Hello GitHub, We’re Quire"
date:   2015-06-29 11:58:07
categories: "Milestones"

index-intro: "For some of you, it is difficult enough to keep everyone up to date with the tasks at hand. It is even more so when they involve codes. Lots of codes. But not to worry, Quire has got it covered."
category-intro: "For some of you, it is difficult enough to keep everyone up to date with the tasks at hand. It is even more so when they involve codes. Lots of codes..."

image: "2015-06-29-Github-Integration/0.png"
tags: task-management productivity integration
author: "Crystal Chen"
authorImg: "/images/author/crystal.png"
authorDesc: "Content writer, food lover, and aniholic."
authorLink: "https://medium.com/@crystalshchen"

relatedPosts: ["Sync your Tasks with Google Calendar", "Recurring Tasks"]

imgDir: "2015-06-29-Github-Integration"
---


![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/0.png)

For some of you, it is difficult enough to keep everyone up to date with the tasks at hand. It is even more so when they involve codes. Lots of codes.

But not to worry, [Quire](https://quire.io/) has got it covered. With the integration with GitHub, it is easier to stay on top of your team members’ code changes and to refer and trace back between tasks and codes.

## How do I integrate with GitHub?

***1. Go to Project options (that looks like a wheel) in the main panel***

<div style="max-width: 165px; max-height: 103px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/1.png)
{% endmarkdown %}
</div>

***2. Click on “Integrate Github”***

<div style="max-width: 169px; max-height: 325px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/2.png)
{% endmarkdown %}
</div>

***3. Click on “Get Authentication”***

<div style="max-width: 484px; max-height: 294px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/3.png)
{% endmarkdown %}
</div>

***4. Select one or more repositories you want to connect to and click on Save***

<div style="max-width: 678px; max-height: 380px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/4.png)
{% endmarkdown %}
</div>

***5. You can simply click on “Continue to my project.”***

<div style="max-width: 680px; max-height: 339px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/5.png)
{% endmarkdown %}
</div>

Once you are back to your project, the integration is done!

## What can I do with GitHub integration?

### You can reference and complete a task or more via commit message.

To reference a task:

First, choose a task.

<div style="max-width: 700px; max-height: 203px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/6.png)
{% endmarkdown %}
</div>

Find the ID for this task in the url bar.

<div style="max-width: 574px; max-height: 106px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/7.png)
{% endmarkdown %}
</div>

#### Tip: You can press Ctrl (or Alt for Mac) to see all task IDs.

You enter a # and the task ID in the commit message.

For example:

```
Write #634.
```

When you make a reference, we will add a comment to the task like this:

<div style="max-width: 536px; max-height: 88px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/8.png)
{% endmarkdown %}
</div>

Note that whenever we add a comment to Quire, we will also add one to GitHub:

<div style="max-width: 700px; max-height: 127px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/9.png)
{% endmarkdown %}
</div>

Now, you can easily refer to the task from GitHub to Quire, and trace its codes from Quire to GitHub.

You can also add a message at the end of your commit.

For example:

```
Edit #634 added more description.
```

Then, it will appear like this in the task’s comment:

<div style="max-width: 538px; max-height: 78px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/10.png)
{% endmarkdown %}
</div>

To reference multiple tasks:

Follow the same steps for referencing a task, and simply add “and” in your commit message.

For example:

```
Edit #634, #635 and #636 paraphrased a few sentences.
```

It will look like this in all three tasks:

<div style="max-width: 542px; max-height: 100px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/11.png)
{% endmarkdown %}
</div>

To complete a task:

Again, first select a task.

<div style="max-width: 700px; max-height: 203px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/12.png)
{% endmarkdown %}
</div>

Find the task ID in the url bar.

<div style="max-width: 574px; max-height: 106px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/13.png)
{% endmarkdown %}
</div>

Use any of the keywords below followed by a # and the task ID in your commit message.

For example:

```
Close #634 article finalized.
```

Keywords:

```
Complete/Completes/Completed
Close/Closes/Closed
Fix/Fixes/Fixed
Resolve/Resolves/Resolved
```

When you complete a task, we will add a comment to the task like this:

<div style="max-width: 541px; max-height: 91px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/14.png)
{% endmarkdown %}
</div>

And we will mark the task as complete:

<div style="max-width: 700px; max-height: 183px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/15.png)
{% endmarkdown %}
</div>

To complete multiple tasks:

Follow the same steps for closing a task, and add “and” in your commit message.

For example:

```
Close #635 and #636 articles finalized.
```

When you complete these two tasks, we will add the same comment to both tasks:

<div style="max-width: 538px; max-height: 82px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/16.png)
{% endmarkdown %}
</div>

And we will mark both tasks as complete:

<div style="max-width: 700px; max-height: 216px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/17.png)
{% endmarkdown %}
</div>

I hope you will enjoy our very first integration with GitHub and that it will help you keep everyone in the loop.

## <div style="text-align:center;">Goodbye for now!<div>

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
