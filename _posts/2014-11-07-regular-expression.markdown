---
layout: post
title:  "The Savior: Regular Expression"
date:   2014-11-07 17:56:11
author: Food truch festival tonight, sayyy wattt
categories: ruby
---
Attended the talk on "Stuff everybody should know" by the CTO of npmjs Laurie Voss and it was very beneficial. One of the "stuff" he pointed out that web newbies such as the grads of coding bootcamps should know is RegEx. So, here is a blog post on that!

So what is Regular Expression? Conflicted with its name, regular expression is NOT so regular as it is not very self-explainatory just by the looks of it. It is a pattern describing a certain amount of text. It is very useful in data validation and searching. For example, one of the data field your website is collecting is user's email addresses. However, you want to validate it that it follows certain pattern such as (for some reason) it has to be 12 charactors long and there should be a number in front of the @ sign.

Yes, there are if else or switch statements you can write to validate that. But think about the large loop you will have to write to complete that. In this case, writing a regular expression to validate your date is the most efficient way to go. Some of regex you probably have seen in ruby codes are \d, \w, \s and such. So here we will make a cheetsheat on what they mean.

{% highlight ruby %}
\d matches a single character that is a digit
\w matches a "word character" that is alphanumeric characters plus underscores
and \s matches a whitespace character that includes tabs and line breaks
a dot (.) matches a single character, except for line break characters.
{% endhighlight %}

By now you probably have also seen some characters floating around in regex. Special characters such as backslash(\), dollar sign($), asterisk(*) etc all means different things and they are refered to as metacharacters. If you want to just use any of those characters as a literal in a regex, you will need to escape them with a backslash. Such as "1+1" will need to be entered as "1\+1". Below you will see anchors in work.

{% highlight ruby %}
Anchors do not match any characters, they match a position.
^ matches at the start of the string.
While $ matches at the end of the string.
For example, \b matches the first b in bomatches the second b.
{% endhighlight %}

This blog entry is only meant to start the conversation on regex as it is a vast topic (and if were easy to understand, then everybody would understand). Below are two good reference if you want to learn more on the topic:

[Microsoft Developer Network RegEx document][MDN]

[RegEx generator with a good reference list][RegEx]

Later when I have more time aka actually know better about what I am talking about I will write another entry on the topic!

![img](http://troll.me/images/the-most-interesting-man-in-the-world/i-dont-cry-often-but-when-i-do-its-when-figuring-out-regular-expressions.jpg)

[MDN]:      http://msdn.microsoft.com/en-us/library/az24scfc(v=vs.110).aspx
[RegEx]:        http://www.freeformatter.com/regex-tester.html