---
layout: post
title:  "Why We Abandoned the To-Do List"
date:   2014-09-02 11:58:07
categories: "workstyle"

index-intro: "Central to most task management software is a conventional to-do list that stores all conceivable tasks. But a to-do list was never meant to handle the intricacy hidden in tasks which warrants the governance of a task management system."
category-intro: "Central to most task management software is a conventional to-do list that stores all conceivable tasks..."

image: "2014-09-02-Abandon-Todo-List/0.jpeg"
tags: taskmanagement productivity
author: "Lance Lu"
authorImg: "/images/author/lance.png"
authorLink: "https://medium.com/@Sphota"

relatedPosts: ["How a good task management tool can help make your life a lot easier!", "Quire — A design hiding complexity in simplicity"]

imgDir: "2014-09-02-Abandon-Todo-List"
---

![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/0.jpeg)

Central to most task management software is a conventional to-do list that stores all conceivable tasks. But a to-do list was never meant to handle the intricacy hidden in tasks which warrants the governance of a task management system.

---

> **What purpose does a to-do list serve?**

We start writing tasks down when there are too many of them for us to manage them well. Tasks can be better prioritized and tracked for their completion in a written or visual form so they become “tangible” in a way. Simply put, ***a to-do list helps us to remember (track) and compare (rank) our tasks***.

---

> **But to-do lists fail to serve their purpose under certain conditions.**

As the number of tasks grows, looking at an extended list does not help us much in comparing and prioritizing tasks. The result is a long list of tasks that appear to be equally important. With a sheer number of equally important tasks on the list, it once again becomes difficult to track and rank our tasks.

When we put down “incomparable” tasks forming a heterogeneous list, we make the tasks difficult to compare or rank. Tasks are “incomparable” in the sense that they vary too greatly in their scope and context; hence comparing or ranking them makes no sense.

For instance, if we have both “*Read n pages of Book X*” and “*Get a Pilot License*” on our to-do list, they’ll only become comparable if we understand the context which the reading task belongs. Suppose, we recall that a “project due tomorrow” would require that we first digest the material on those n pages in Book X, we can then weigh in on the priority between “project due tomorrow” and “*Get a Pilot License*”. A heterogeneous list therefore requires us to remember all the contexts associated with each task which would prove to be difficult.

Without exhaustively considering all possible ways to falsify the usefulness of to-do lists, let’s note that ***a to-do list no longer suffice when the number of tasks is large enough to render them equally important or when the list becomes heterogeneous***.

---

> **Do the tasks we put down in our conventional task management systems collide with these limitations?**

A task with a large scope and long duration inevitably is required to be broken down into more manageable action items so they can be executed. While some large tasks are broken down and expanded, there will be others which would not have proceeded to that stage of their life cycle, and hence we inadvertently created a heterogeneous list. Confusion will arise until all tasks are broken down into a state of homogeneity within the list. By then, the inflated to-do list would become an extensively long list of equally important tasks. Tasks that require the governance of a task management system often have a large scope and a long duration. ***Entering tasks as such into a conventional to-do list will inevitably render it heterogeneous and the tasks will eventually evolve to bear equal importance; which implicitly reduces their importance.***

---

> **How do task management software deal with to-do list’s limitations?**

Given these limitations, the prevalent solution is to divide the primordial to-do list ***into several other lists***. For instance, the “sibling” tasks are often placed into ***nother list*** called “sub-tasks” whereas the “parent” tasks may be designated to ***a list*** of “sections” or other synonyms.

A more flexible system may allow a sub-task to bear sub-tasks of its own which effectively is ***attaching another list to itself indefinitely***. This scheme produces a hierarchical structure as depicted below:

<div style="max-width: 322px; max-height: 294px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/1.png)
{% endmarkdown %}
</div>

Having the flexibility to attach another list of sub-tasks to any given task or another sub-task ensures that we can always “zoom-in” and break down on a task. ***This process gives rise to a hierarchy which in turn indicates their dependencies***. Therefore we've eliminated the problem of a flat list of equally important tasks. And because ***we now have a hierarchy of tasks, we can organize tasks as such that ***we can achieve homogeneity for each level of tasks***.

---

> **But how do you convey nested task lists?**

Even though the most flexible task management tools would allow a structure of an indefinite hierarchy but showing nested lists is just not practical from a UI design perspective.

But without showing all tasks along the hierarchy, we easily would lose the context that’s required to monitor a task. Take the following task structure for example:

<div style="max-width: 700px; max-height: 370px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/2.png)
{% endmarkdown %}
</div>

“Get Report B2–1" under “Complete A” requires that “Do Report B2–1" under “Complete B” is done. But due to the constraints in showing nested lists, a compromised view would show:

<div style="max-width: 700px; max-height: 286px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/3.png)
{% endmarkdown %}
</div>

or

<div style="max-width: 700px; max-height: 292px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/4.png)
{% endmarkdown %}
</div>

#### screenshots were taken from Asana

In either case, we’d completely miss the dependency that “Review A3" has on “Do B2", since it belongs to a list of subtasks hidden in view. Neither view conveys the context which would rather indicate that one sub-task of one task hierarchy depends on that of another. ***Essentially, what users see is still to-do lists in their primordial form, but now in multiples, without presenting tasks’ context and relations***.

---

### Our solution is to preserve tasks’ natural hierarchy in a tree structure

<div style="max-width: 600px; max-height: 317px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/5.png)
{% endmarkdown %}
</div>

***The problem*** of linking lists together to form the necessary hierarchy ***is that lists are kept as separate entities.*** Showing how many lists necessary to convey the context is not feasible given the constraints in a user interface.

Instead, we recognized that this hierarchy would be better represented with a tree structure. Each sub-task becomes a child node of a task. ***When a task is retrieved, so are all the parent and children task nodes that make up the entire context***.

Under this structure, tasks and their dependencies are clearly presented in the task management system.

<div style="max-width: 650px; max-height: 389px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/why-we-abandaned-to-do-list.png)
{% endmarkdown %}
</div>

A task may start out as a rough goal without a plan or the background knowledge to seek to its completion. The necessary steps in accomplishing the goal only come to existence through more thoughts and collaboration.

As we plan and organize our tasks as they progress, tasks represented as tree nodes can be easily re-arranged in accordance with their dependencies by drag-n-drop as depicted below:

<div style="max-width: 650px; max-height: 376px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/why-we-abandaned-to-do-list-2.png)
{% endmarkdown %}
</div>

To avoid tasks cluttering our view and lose our focus, we can simply collapse the task tree that are irrelevant to our immediate tasks at hand.

---

The to-do list helps us to make our goals more “tangible” but it was never meant to become the backbone of task management software.

Nested to-do lists provides the logical hierarchy to accommodate more complex tasks, such as those we find in a project which requires team work and collaboration. But nested lists are still separate lists which divide a task’s context, nor can this context be displayed effectively in a user interface.

We see that ***a tree structure’s hierarchy naturally captures how tasks evolve through their life cycle***. It provides a bird’s eye view of tasks’ relationships. A ***Task Tree*** serves as a better backbone to a task management system. We’d love to know if this idea works for you; give the task tree a [try](https://quire.io/).

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
