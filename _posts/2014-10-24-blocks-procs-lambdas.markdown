---
layout: post
title:  "Blocks vs. Procs vs. Lambdas"
date:   2014-10-24 00:00:11
author: Booked one way trip to SF, gahhhhhh
categories: ruby
---
By now you probably have written a lot of blocks and probably don't even realize they are called blocks! So what is a block? Remember all those ruby array iteration you have wrote?

{% highlight ruby %}
['maple bacon', 'hardwood bacon', 'turkey bacon', 'oreos'].each {|e| p e}

['maple bacon', 'hardwood bacon', 'turkey bacon', 'oreos'].each do |e|
  p e
end
{% endhighlight %}

Now you know what you have written is considered block, Proc and Lambda is easy! Both Proc and Lambda are types of blocks. Remember when you write ruby methods that include iterations so later on you can just call the methods without writing the itereation codes all over again? That is similar to what Proc and Lambda is. You can set up a block that does something to the input and save it as a Proc and Lambda. Later on, you can call the Proc and Lambda without writing the block of code again. For example:

{% highlight ruby %}
square = Proc.new {|i| i*i}
or
square = lambda {|i| i*i}
{% endhighlight %}

Both above equations will accomplish the same tasks which is to produce the square result of whatever number is passed into the equation. And as you can see, the Proc syntax is Proc.new {block} while lambda syntax is lambda {block}

There are 2 differences between Proc and lambda and though they are relatively minor, they can make a difference when writing code at times.

The first difference between the two is that a lambda checks the number of arguments passed in while Proc does not. Lambda will return argument error is number of arguments does not match up while Proc will defaultly set nil for any missing argument and throw out the extra ones.

Second difference between Proc and Lambda is that when Proc finishes executing it will return results immediately while lambda will return to the original methods and finish executing all the codes in the methods. So for Proc, if there are other bits left in the method, they will NOT be executed while under lambda they will.

Ok that is all for learning today! If you have any questions please tweet to me @cakeisnotreal!

![img](http://3.bp.blogspot.com/-7DAvHAXSnvo/TmazVz9b_PI/AAAAAAAAA2g/r_Qmbzgynm4/s1600/schrute-syntax.jpg)