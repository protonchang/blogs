---
layout: post
title:  "Our Very Own Markdown"
date:   2015-06-03 11:58:07
categories: "features"

index-intro: "You may have heard of Markdown. If you have, it is a good thing. It can create rich texts, like in Microsoft Word, easily and quickly."
category-intro: "You may have heard of Markdown. If you have, it is a good thing. It can create rich texts, like in Microsoft Word, easily and quickly..."

image: "2015-06-03-Markdown/0.jpg"
tags: task-management workstyle productivity
author: "Crystal Chen"
authorImg: "/images/author/crystal.png"
authorDesc: "Content writer, food lover, and aniholic."
authorLink: "https://medium.com/@crystalshchen"

relatedPosts: ["Drill Down", "Highlight Your Tasks with Color and Styles"]

imgDir: "2015-06-03-Markdown"
---


![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/0.jpg)

You may have heard of Markdown. If you have, it is a good thing. It can create rich texts, like in Microsoft Word, easily and quickly. For those of you who do not know what it is, here is the introduction by its creator, **John Gruber** (of ***Daring Fireball***):
http://daringfireball.net/projects/markdown/

So, we have Markdown. Precisely, [Quire](https://quire.io/)’s own flavored Markdown.

Follow these 3 steps to see a few examples:

*Go to any task -> Add description or comment (or click on Edit) -> Click on the “?” mark*

Voila! A pop-up of our markdown list:

<div style="max-width: 599px; max-height: 492px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/1.png)
{% endmarkdown %}
</div>

Want to add emphasis? You can either use `*` (*wow!*) for italic, or two asterisks (**wow!**) for bold.

To create a list, add an asterisk and a space before your items. It is just like what you would do if you were using Word or Page, but easier and quicker.

### **Wait, there’s more!**

Sometimes, words just are not enough. Thankfully, you can use emoji icons in the description and comment of a task. If you type a colon, a list of emoji will automatically show up:

<div style="max-width: 516px; max-height: 345px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/2.png)
{% endmarkdown %}
</div>

Talk about being “expressive”!

Next is something you will definitely find useful.

When you want to refer someone to a particular task, just enter @username and then #taskname. All the tasks containing the letters you have typed will show up. Simply find the right one.

<div style="max-width: 526px; max-height: 306px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/3.png)
{% endmarkdown %}
</div>

This way, there is no more copying and posting the URL of a task.

Now that you have seen what our Markdown can do, see the cheat sheet below and give it a go!

---

# <div style="text-align:center;">**Markdown Cheat Sheet**<div>

## **HEADERS**

Quire’s Markdown supports two styles of headers, Setext and Atx.

Setext-style headers use equal signs (for first-level headers) and dashes (for second-level headers). For example:

```
H1
==
H2
--
```

Atx-style headers use 1–6 number signs at the start of the line, followed by 1–6 header levels. For example:

```
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

## **LINE BREAKS**

To generate a new line, you press ENTER.

**HORIZONTAL RULES**

You can produce a horizontal rule by typing 3 or more hyphens, asterisks or underscores, with space in between if you like:

```
***
* * *
- — -
 — — — — — — — — 
 ```

## **EMPHASIS**

 You use asterisks to indicate emphasis.

For italic, you use 1 asterisk. For example:

```
This is *important*.
```

For bold, you use 2 asterisks. For example:

```
This is **very important**.
```

## **UNDERLINES**

You can use one underscore at the start and the end of the text:

```
_Underlined text._
```

## **STRIKETHROUGHS**

You can use one tilde at the start and the end of the text:

```
~Delete text.~
```

## **LISTS**

Markdown supports ordered (numbered) and unordered (bulleted) lists.

Order list uses numbers and periods like:

```
1. step1
2. step2
3. step3
```

Unordered list like:

```
* item1
* item2
* item3
```

is the same as:

```
+ item1
+ item2
+ item3
```

and:

```
- item1
- item2
- item3
```

Each item may consist of multiple paragraphs. To add a paragraph in a list item, indent 4 spaces or 1 tab like this:

```
1. step1
    I’m a paragraph.
2. step2
3. step3
```

## **LINKS**

You use square brackets to delimit the text and round brackets for the link. For example,

```
This is a [Google link](https://www.google.com/)
```

Markdown also supports 3 variants of links. First is a title for your link:

```
[Google link with title](http://google.com/ “Google”)
```

Second is the reference-style link that uses second set of square brackets that contain an id you choose for the link:

```
I use [Google][id1] more than I use [Yahoo][id2].
```

Then, anywhere in the text, you define your link id:

```
[id1]: http://google.com/ “Better”
[id2]: http://search.yahoo.com/ “Good”
```

The third is an automated Link. You can simply write down a link, Markdown will turn it into a clickable link:

```
Google: http://google.com/
```

## **IMAGES**

Markdown supports two styles of images: inline and reference.

Inline image syntax looks like this:

```
![alt text](path/to/image.jpg)
![alt text](path/to/image.jpg “Title”)
```

You write down an exclamation mark, a set of square brackets containing an alt attribute text for the image, a second set of square brackets containing the URL or path to the image, and an optional title attribute enclosed in double quotes.

Reference image syntax looks like this:

```
![alt text][id]
[id]: url/to/image.jpg “Title”
```

In this style of writing, “id” is the name of a defined image reference, which is defined in the same way as link references.

## **TABLES**

You can create tables using `|` (pipes) and `-` (hyphens).

Pipes are used to separate each column and hyphens create each column’s header.

So, if you type:

```
| 1st Header | 2nd Header |
| ---------- | ---------- |
| text       | text       |
| text       | text       |
```

It will turn out like this:

| 1st Header | 2nd Header |
| ---------- | ---------- |
| text       | text       |
| text       | text       |

#### Tip: You can type `<br>` to break a line in a table cell, and `\<br>` to keep `<br>` in the cell.

## **ESCAPE PIPE**

You may want to escape a pipe in a table cell. It can be done easily with ``\`` in front of the pipe.

For example, if you type:

```
| Left   | Right |
| :------ | ------:|
| A | text A |
| B | text B |
| C | text C \| word C |
```

It will look like this:

<div style="max-width: 198px; max-height: 157px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/5.png)
{% endmarkdown %}
</div>

## **BLOCKQUOTES**

Blockquotes are indicated using “>” angle brackets.

```
> I’m part of a very long quote. But I’ll still be quoted properly when I wrap.
```

Also, blockquotes can rest in blockquotes by adding levels of angle brackets:

```
> I’m the first level of quote.
>> I’m the second level of quote.
> I’m back at the first level.
```

## **CHECKLISTS**

You can create your own checklist by typing `- [ ]`

```
- [ ] Checklist item 1
- [ ] Checklist item 2
- [ ] Checklist item 3
```

With Quire checklist, you can tick off your checklist as well. 

<form action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle" value="Bike"> Take my dog for a walk<br>
  <input type="checkbox" name="vehicle" value="Car" checked="checked"> Do laundry<br>
</form>

## **CODE**

To indicate a span of code, wrap it with “`” backtick quotes. For example,

```
Use two asterisks `**` for bold.
```

To include backtick characters in a code, you use multiple backtick quotes and spaces — one after the opening and one before the closing — like this:

```
Use two asterisks `` `**` `` for bold.
```

## **CODE BLOCK**

You can generate a code block by indenting 4 spaces or 1 tab:

```
I’m a normal paragraph.
    I’m a code block.
I'm a normal paragraph.
```

Or type 3 backticks in the beginning and the end of the text like this:

    I’m a normal paragraph.
    ```
    I’m a code block.
    ```
    I’m a normal paragraph.

Remember to break the line before and after the backticks.

## **SYNTAX HIGHLIGHTING**

We take code block one step further by adding Syntax Highlighting.

For example, if you define CSS as your content language:

    
    ```css
    h1 {
     font-size: 2.5em;
     font-weight: normal;
    }
    ```

Or if you choose Javascript as your content language:

    ```javascript
    var setArray = function(elems) {
     this.length = 0;
     push.apply(this, elems);
     return this;
    }
    ```

You will see that it displays text in different colors according to the content language you chose, making it easier for programmers and developers to read.

## **CSS Styles**

You can add [CSS style](https://www.w3schools.com/html/html_css.asp) to text in task name, description and comment with `{css-style| text}`.

For instance, if you type:

```
{color: red, font-size:20px|color text}
```

It will turn out like this:

<div style="max-width: 165px; max-height: 28px; margin: 0 auto;">
{% markdown %}
![My helpful screenshot]({{ site.baseurl }}/images/{{page.imgDir}}/6.png)
{% endmarkdown %}
</div>

## **Characters**

You can now add characters too via [HTML entities](https://www.w3schools.com/html/html_entities.asp).

Let's say you type:

```
&yen;, &reg;, &#8451; and &#x263B;

```

It will turn out like this:

&yen;, &reg;, &#8451; and &#x263B;

## **BACKSLASH ESCAPES**

We let you use `\` (backslash) to surround text with characters, so you can escape the characters’ general meaning.

For example, if you want to surround a word with asterisks, use backslashes before the asterisks:

```
\*literal asterisks\*
```

Then, it will turn out like this:

```
*literal asterisks*
```

We support backslash escapes for the following characters:

- \   backslash
- `   backtick
- *   asterisk
- _   underscore
- {}  curly braces
- []  square brackets
- ()  parentheses
- #   hash mark
- +   plus sign
- -   hyphen
- .   dot
- !   exclamation mark

## **YOUTUBE VIDEOS**

Youtube videos can be added if you add an image with a link to the video:

```
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```

## <div style="text-align: center;">Please stay tuned for more to come!<div>

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
