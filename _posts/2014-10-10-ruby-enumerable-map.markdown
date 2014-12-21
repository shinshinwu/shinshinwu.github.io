---
layout: post
title:  "Ruby Enumerable - Map"
date:   2014-11-10 00:00:11
author: Long weekend! Why is Columbus Day still a thing??
categories: ruby
---
Learn how to code with Anna series #3!

Today we will discuss some infamous Ruby Enumerable methods. Enumerable methods are extremely powerful in Ruby and helps to keep your code short and DRY (Don't Repeat Yourself), but they can be hard to understand at times.

Today's example is .map and .collect methods in Ruby.

To start off, map and collect are EXACTLY the same method except some people have preference to write one over another because of the names. And what map and collect do is they will iterate through every single element in the array and does something with it. (map and collect can also be used with hashes but keep in consideration to set up the equation to include both keys and values).

For example:

{% highlight ruby %}
[1,2,3,4].map {|i| i + 1} will return array [2,3,4,5]
{% endhighlight %}

One easy way to visualize this is to think about mapping things that has been modified in command you have given to a new set. And if you use the .map! method, it will modify the original array (destructive method).

How is it different than .each method?

Glad you asked! It can be confusing but one of the most straighforward way of thinking their differences is that .each simply iterate over the array and return the results. And it simply discards the results as soon as it finishes with the operation. .map is different, it runs the block operation and returns a new object with the changes. The new object in turn can be manipulated in other ways you desire. Simply said, with .map you can retrieve the results that with .each you can't.

.map is a powerful function as many times it is used in conjunction with may other array and enumerable methods. Another example,

{% highlight ruby %}
[1,2,3,4].map.to_s will return array ["1", "2", "3", "4"]
{% endhighlight %}

and that is just one simple way to combining map with other methods to produce new desired arrays.

RINGGGGGGGGG!

Ok guess that's the signal today's class is coming to an end. Hopefully you learned lots in today's session. If you have any questions, don't forget to tweet me @cakeisnotreal!

![img](http://roflmouse.com/wp-content/uploads/2012/05/funny-gifs-loop.gif)