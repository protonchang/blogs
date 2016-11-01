---
layout: post
title:  "How to migrate to Quire? Copy and paste."
date:   2016-10-27 11:58:07
categories: "features"

index-intro: "Many of you have asked about a way to import your work from a different app into Quire, without going through the trouble of entering them one by one. Now, we have the answer: Copy and paste. Be it an Excel sheet with data, a Word document of bullet list, or an email from your coworker, you can easily move them to Quire and continue where you left off..."
category-intro: "Many of you have asked about a way to import your work from a different app into Quire, without going through the trouble of entering them one by one..."

image: "2016-10-27-How-to-migrate-to-Quire-Copy-and-paste/0.png"
tags: copy paste import
author: "Crystal Chen"
authorImg: "/images/author/crystal.png"
authorDesc: "Content writer, food lover, and aniholic."
authorLink: "https://medium.com/@crystalshchen"

relatedPosts: ["Turn Your Projects into Customizable Reports in Excel", "We’re not Facebook. So why Like?"]

imgDir: "2016-10-27-How-to-migrate-to-Quire-Copy-and-paste"
---


![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/0.png)

Many of you have asked about a way to import your work from a different app into [Quire](https://quire.io/), without going through the trouble of entering them one by one.

Now, we have the answer: **Copy and paste**.

Be it an Excel sheet with data, a Word document of bullet list, or an email from your coworker, you can easily move them to Quire and continue where you left off, such as breaking down ideas into step-by-step tasks to easily keep track of them and collaborate with your team.

Here are a few examples:

## 1. Text Editor

You may have a bullet list or notes in text editors such as Notepad and Word.

First, you press Ctrl + C (Cmd + C for Mac) or right click to copy the content.

<div style="max-width: 500px; max-height: 236px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/1.png)
{% endmarkdown %}
</div>

Next, you go to your Quire project, click on a task and right click to select Paste.

<div style="max-width: 308px; max-height: 171px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/2.png)
{% endmarkdown %}
</div>

Then, you press Ctrl + V (Cmd + V for Mac) or right click to paste what you copied for preview.

<div style="max-width: 500px; max-height: 438px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/3.png)
{% endmarkdown %}
</div>

By default, we recognize the list as **multiple tasks**, with each line being the name of each task and subtask.

We also automatically translate texts like `<tomorrow>`, `#Marketing`, `@Megan` and `!2` into **due date**, **tag**, **assignee** and **priority**, and omit unnecessary numbers, characters and punctuation marks like “-” and “*” which are supported by Markdown.

If you manually select **single task**, we will recognize the list you pasted as a single task, with the first line as its name and the rest as its description.

#### Note: The @assignee and #tag you typed must already be your project members and tags to be added.

## 2. Gmail

If you want to turn an important email into a task, here is what you do.

You copy the subject and its content.

<div style="max-width: 500px; max-height: 217px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/4.png)
{% endmarkdown %}
</div>

Then, you go to Quire to paste it.

<div style="max-width: 500px; max-height: 438px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/5.png)
{% endmarkdown %}
</div>

By default, we recognize what you pasted as a **single task**, with the subject as its name and the content as its description.

We also automatically omit the unnecessary detail like “to me” and “5:25 PM (23 hours ago).”

If you manually select **multiple tasks**, we then recognize the content you pasted as multiple tasks, with each line being the name of each task.

For other email service providers including Hotmail and Outlook, we will recognize what you pasted as **multiple tasks**, with each line being the name of each task.

## 3. Spreadsheet

First, you copy the header and content in an Excel, Google Sheets or other spreadsheet applications.

<div style="max-width: 500px; max-height: 197px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/6.png)
{% endmarkdown %}
</div>

Then, you go to Quire to paste what you copied for preview.

<div style="max-width: 500px; max-height: 438px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/7.png)
{% endmarkdown %}
</div>

By default, we recognize what you pasted as **multiple tasks**, with each row being the name, attributes and description of each task.

Only columns called **Parent**, **Priority**, **Assignee**, **Start**, **Due**, **Name** and **Description**, in no particular order, and the cells below them are recognized. The rest is omitted.

#### Note: The header column names must be exactly the same with the first letter capitalized.

You can create a tree structure with tasks and subtasks by adding a column called **Parent**.

For the column **Parent** to be recognized, you need to have another column called **ID**.

<div style="max-width: 500px; max-height: 49px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/8.png)
{% endmarkdown %}
</div>

Under the column **ID**, you first assign an ID to the parent task.

<div style="max-width: 500px; max-height: 74px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/9.png)
{% endmarkdown %}
</div>

Then, you go to the task you want to make as the subtask, and enter the parent task ID you have just assigned under the **Parent** column.

<div style="max-width: 500px; max-height: 89px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/10.png)
{% endmarkdown %}
</div>

Ta-da! Now you have a tree structure with tasks and subtasks.

<div style="max-width: 500px; max-height: 438px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/11.png)
{% endmarkdown %}
</div>

If you manually select single task, we will recognize the data you pasted as a single task, with the first line as its name and the rest as its description.

#### Note: What you typed under columns Assignee and Tag must already be your project members and tags to be added.

When you paste from Excel, there are two limitations to keep in mind:

### Date Format.

For columns Start and Due to be recognized, you need to enter dates in the format of the country you selected in your [Account Settings](https://quire.io/r/setting). For example, if you selected English (United States), the date format should be Nov 18, 2016. In this example, 11/18/2016, 11-18-2016 and 11.18.2016 are recognized too.

### Priority.

For column Priority to be recognized, you need to enter Low, Medium, High or Urgent (not case sensitive).

## 4. CSV

With a CSV file, it is the same as copying and pasting from a spreadsheet file.

Once again, only those called **Parent**, **Priority**, **Assignee**, **Start**, **Due**, **Name** and **Description** and what is below them are recognized.

#### Note: What you typed under columns Assignee and Tag must already be your project members and tags to be added.

In short, we have made migration quick and easy. With copy and paste.

You can now bring your work into Quire, from apps or services that you are probably using everyday, including Excel, Word and Gmail, and get it rolling with your team in just seconds!

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
