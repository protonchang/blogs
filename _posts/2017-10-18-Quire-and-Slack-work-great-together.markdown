---
layout: post
title:  "Quire and Slack work great together."
date:   2017-10-18 11:58:07
categories: "Milestones"

index-intro: "It is our mission to help you work seamlessly via Quire and other apps you are already comfortably using. With the integration with Slack, we are one step closer. For those of you who often communicate on Slack, you and your team can now receive updates about your Quire projects..."
category-intro: "For those of you who often communicate on Slack, you and your team can now receive updates about your Quire projects right inside a Slack channel..."

image: "2017-10-18-Quire-and-Slack-work-great-together/0.png"
tags: Slack integration communication
author: "Crystal Chen"
authorImg: "/images/author/crystal.png"
authorDesc: "Content writer, food lover, and aniholic."
authorLink: "https://medium.com/@crystalshchen"

relatedPosts: ["Hello GitHub, We’re Quire", "Sync your Tasks with Google Calendar"]

imgDir: "2017-10-18-Quire-and-Slack-work-great-together"
---


![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/0.png)

It is our mission to help you work seamlessly via Quire and other apps you are already comfortably using. With the integration with Slack, we are one step closer.

For those of you who often communicate on Slack, you and your team can now receive updates about your Quire projects right inside a Slack channel, add tasks, comment on tasks and more.

## How do I integrate with Slack?

You need to link an organization to a Slack team, and a project to a Slack channel.

***1. Go to a Quire organization, and click on the "pen" edit icon***

<div style="max-width: 537px; max-height: 112px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/quire-m3-organization-edit.png)
{% endmarkdown %}
</div>

***2. Go to Options -> Integratoins, and click on "Add to Slack"***

<div style="max-width: 728px; max-height: 253px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/quire-m3-integrations-slack.png)
{% endmarkdown %}
</div>

***3. Select the Slack team you want to link to, and click on “Authorize”***

<div style="max-width: 700px; max-height: 360px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/2.png)
{% endmarkdown %}
</div>

***3. After you have successfully linked to Slack, go to a Slack channel***

<div style="max-width: 283px; max-height: 260px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/3.png)
{% endmarkdown %}
</div>

***4. Type ‘/quire link [project ID or project URL]’ to link this channel to a Quire project***

<div style="max-width: 528px; max-height: 76px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/4.png)
{% endmarkdown %}
</div>

#### Note: A Slack channel can only be linked to one Quire project.

## What can I do in a Slack channel?

When you are all set up, here are some commands to get you started in Slack:

### 1. Get Notified Instantly in Your Slack Channel

You can make a Slack channel follow a project or more for the team to stay on top of changes made in the projects.

Take projects Design Project (with project ID `Design_Project`) and Marketing Project (with project ID `Marketing_Project`) for example.

You can type:

`/quire follow project Design_Project Marketing_Product`

#### Note: Once you make a channel follow a project or more, everyone will get notified of all activities in the projects.

You can also make the team follow a specific task or more in a project, once you linked it to a Slack channel (see Step 4 above).

For tasks Logo Design (with task ID `123`) and UI Design (with task ID `456`), you just type:

`/quire follow 123 456`

### 2. Add Tasks Directly to Your Quire Project

You can add tasks to a Quire project directly from your Slack channel, and assign it to a team member, set due date, add tags, etc., at the same time.

For example, you can type:

`/quire add Logo design @eric <Oct 25; Nov 21> #Design !1`

to add a task called **Logo design** that is assigned to **Eric**, and has a start date of **Oct 25**, due date of **Nov 21**, tag of **Design** and priority **Urgent**.

#### Note: Even when a task is created by you, you need to make the channel follow the task in order to get notified in Slack.

### 3. Comment on Tasks While You Chat

You can add a comment to a task after a discussion or chat with your team members, right from Slack.

For example, you want to comment on the logo that Eric designed (with task ID `123`).

You can type:

`/quire comment 123 Looks awesome!`<br>
`Let’s go with Option 2.`

That is not all!

There are a lot more you can do from within a Slack channel. Check out the complete list of commands below.

---

## <div style="text-align:center;">**/quire Command List**</div>

**Add a task**<br>
`/quire add [task name]`<br>
For example: /quire add Design new logo

**Link a channel to a project**<br>
`/quire link`<br>
`/quire link [project ID or project URL]`<br>
Example: /quire link Development_Project<br>
Example: /quire link https://quire.io/w/development_project

**Unlink a channel from project**<br>
`/quire unlink`

**List all projects and their IDs**<br>
`/quire list project`<br>

**Search projects**<br>
`/quire list project [keyword 1] [keyword 2]`<br>
Example: /quire list project Development Marketing

**List recent tasks and their IDs**<br>
`/quire list`

**Search tasks**<br>
`/quire list [keyword 1] [keyword 2]`<br>
Example: /quire list design logo

**View specific tasks**<br>
`/quire list [task ID 1] [task ID 2]`<br>
Example: /quire list 123 456

**List members of the linked Quire project**<br>
`/quire list member`

**List tags**<br>
`/quire list tag`

**Add a task under a task**<br>
`/quire add under [parent ID] name`<br>
Example: /quire add under 12 Design new logo

**Add a task beside a task**<br>
`/quire add after [another task ID] name`<br>
Example: /quire add after 34 Design new logo

**Edit a task name**<br>
`/quire edit [task ID] name.`<br>
Example: /quire edit 123 Design new logo<br>

**Assign members, date, priority and tags to a task**<br>
`/quire assign [task ID] [@team member name] [!priority] [#tag] [<due>]`<br>
Example: /quire assign 123 @eric @jess #design !1 <10/25><br>
Example: /quire assign 123 +@david -@jess +#marketing

**Comment a task**<br>
`/quire comment [task ID] comment`<br>
Example: /quire comment 123 This looks awesome!

**Complete tasks**<br>
`/quire complete [task ID 1] [task ID 2]`<br>
Example: /quire complete 123 456

**Delete tasks**<br>
`/quire delete [task ID] [task ID 2]`<br>
Example: /quire delete 123 456

**Follow or unfollow tasks**<br>
`/quire [follow or unfollow] [task ID 1] [task ID 2]`<br>
Example: /quire follow 123 456

**Follow or unfollow projects**<br>
`/quire [follow or unfollow] project [project ID 1] [project ID 2]`<br>
Example: /quire follow project Design_Project Marketing_Project

**Simple Help (and see what project the channel is currently linked to)**<br>
`/quire`

**Complete Help**<br>
`/quire help`

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
