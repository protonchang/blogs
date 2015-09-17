---
layout: post
title:  "Quire — A design hiding complexity in simplicity"
date:   2014-09-16 11:58:07
categories: "productivity"

index-intro: "In my previous blog post, I have mentioned how the simplicity of UI makes up one of the most important key factors to an effective task management tool. I want to take this further and elaborate on how we came up with the design Quire looks like today."
category-intro: "In my previous blog post, I have mentioned how the simplicity of UI makes up one of the most important key factors to an effective task management tool..."

image: "2014-09-16-Complexity-in-Simplicity/0.jpg"
tags: taskmanagement workstyle productivity
author: "Nancy Lin"
authorImg: "/images/author/nancy.png"
authorDesc: "Quire — A design hiding complexity in simplicity"
authorLink: "https://medium.com/@itsnancy"

relatedPosts: ["Why We Abandoned the To-Do List", "WOW moments of Quire!"]

imgDir: "2014-09-16-Complexity-in-Simplicity"
---

![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/0.jpg)

> **Previously on Quire…**

In my [previous blog](How a good task management tool can help make your life a lot easier!) post, I have mentioned how the simplicity of UI makes up one of the most important key factors to an effective task management tool. I want to take this further and elaborate on how we came up with the design Quire looks like today.

> **Currently on task management tools…**

If you are one of those people, like me, who have tried numerous task managers /to-do lists you may find yourself stuck in extreme situations like the following. Either,

1. Task management tools being bloated. They overwhelm users with excess choices and features you’ll never use.

2. To-do lists that serve like digital versions of plain paper providing zero team collaboration features — and we know how important team collaboration is!

3. Hierarchical approaches are rare while ones available always lack a thing or two, such as easy to change hierarchy levels, organization concept, unlimited sublists etc.

> **So, the ultimatum for us is to solve these problems by…**

* finding the right balance between features and simplicity
* hiding expert functions from beginners
* hiding less-used features from users
* making the app work AND provide a unique look & feel on desktop, tablet and mobile devices
* providing good readability
* creating a simple but informative overview of organization, projects and users

> **After numerous discussions and mix match, we decided to go for a clearly structured layout with 3 distinct levels;**

<div style="width: 700px; height: 352px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/1.png)
{% endmarkdown %}
</div>

* Level 1: sidebar with organizations and related projects
* Level 2: task list
* Level 3: task detail panel

> **Now, let’s explore into the design thinking for each of the sections;**

## Side bar — like a menu

The purpose of the side bar sort of acts like a menu. Unlike a menu of a restaurant which I’m sure you would be willing to take the time to flip back and forth, it is highly unlikely you’d want to do the same to start a day of work like this every morning. To avoid this kind of hassle, we decided to show all the organization and projects you belong to at one glance instead of having to for example drop down a organization before you could see what projects are in it. Having said this, we also wanted it to keep it as simple but as the same time as informative as possible. Therefore we made the appearance of organization and projects different by giving them a different font style. For additional information we display the number of tasks next to the related project.

<div style="width: 700px; height: 413px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/2.png)
{% endmarkdown %}
</div>

#### A sidebar showing all organization & projects

We also wanted you to be able to manage organizations and projects from here; just a click away from adding organizations and projects! In this panel, we also provide an easy but subtle way to access the profile pages of your organizations and projects.

---

## Task list — crystal clear tree structure

If you were a heavy user of powerpoint in high school like me, you gotta love how each slide has a title, some bullet points and sub-bullet points in each bullet point — everything is so crystal clear, like Aladdin and Jasmine on the magic carpet. Well, this is what is commonly known as the “tree structure” or a “hierarchical list” which is conceptualized and used in Quire, showing all your tasks in a hierarchical order.

<div style="width: 700px; height: 447px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/3.png)
{% endmarkdown %}
</div>

#### Crystal clear tree-structured task list

For expert users we also provide **keyboard shortcuts** for most task operations;

<div style="width: 620px; height: 244px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/4.png)
{% endmarkdown %}
</div>

We wanted users to be able to add basic task attributes like assignee and due date here. Besides that you can also complete a task, change the name of it or see tags without having to open the detail panel.

Another feature we are trying to hide from beginners is the filter bar. Usability tests showed that beginners don’t need to group or filter tasks based on specific conditions, therefore it would only cause confusion to have the filter options present at all times. Another way to hide complexity is our unique tree structure. For a simple to-do list, you just list your tasks one after another — simple enough. On the other hand, if you needed to set up a complex project with top-level and sub-level tasks, you can also do that, but easily hide the complexity of it by **collapsing the tree nodes** giving you a nice and clean view at first glance.

<div style="width: 700px; height: 383px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/5.png)
{% endmarkdown %}
</div>

### Collapse your tree nodes to give a nice & clean view

---

## Task detail panel — meaningful communication

Obviously, not every project or task is so simple and straight forward. Sometimes, you need to add some details, references, or discuss a particular task with your colleagues — these are shown in the detail panel. During our design process we were trying hard to keep this as simple as possible. In the end, we achieved simplicity by the extensive use of progressive disclosure: Want to see more than the first two lines of a description? Expand it. Want to see all activities related to your task? Expand it. Want to write a comment? Click the input field and it automatically expands and gives you more options for your comment.

<div style="width: 700px; height: 356px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/6.png)
{% endmarkdown %}
</div>

#### All details about the task can be put here

We believe that good usability is achieved by meaningful placeholders. we want to take users by the hands and help them to achieve their goals by providing placeholders like “add tag”, “add description” and “add comment”. Clicking either of those will bring up an input field where you can enter your values.

And this, is also where our value stands — be simple, be meaningful, be helpful.

Let us help you, try [Quire](https://quire.io/), it’s free.

---

## <div style="text-align:center;">*Manage your tasks naturally.*<div>

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
