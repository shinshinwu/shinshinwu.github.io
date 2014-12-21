---
layout: post
title:  "How to use classes"
date:   2014-10-17 00:00:11
author: Can't believe we are already halfway through Phase 0!
categories: ruby
---
Today you will learn coding using classes with Anna!

One benefits of Object Oriented Programming is that you can create many objects that can be reused later in your code. It helps greatly for your code to stay D-R-Y (don't repeate yourself). So other than creating various variables, what do we do when we need to complete more complicated actions such as run a series of conditional statements?

This is where classes and methods come in.

Think of class as a vast catagory. For example, we have a class called "Shoes" and all types of shoes will fall into this class: boots, sandals, snickers etc. And in this "Shoe" class we have many actions we can take regarding shoes such as putting shoes on, taking them off, tie the laces etc. And all those actions will be different methods that can happen to the class Shoes. If we are trying to express this in Ruby, it will look something like this:

{% highlight ruby %}
Class Shoes
  def puttingOnShoes
    do something....
  end

  def tieLaces
    do something
  end

  def takingOffShoes
    do something
  end
end
{% endhighlight %}

See, not so difficult of a concept is it? Each methods defined under the Shoe class can have many logical operation inside it such as if else statement to check the weather to see what shoes to put on, do we need to wear socks as well? etc.

The variables you have created in the class can be accessed outside of the class if you want them to. Putting a "$" in front of a variable makes it a global variable and you will be able to access the variable anywhere in your code. "@@" in front of a variable means it is an class variables and it is shared amongst all instances of a class. "@" in front of a variable means it is an instance variable and they are only defined for a specific instances of an object. Here is an example of how they might look under the class Shoes to help you better understand it.

{% highlight ruby %}
Class Anna_Shoes
  $count = 2 #one left shoe and one right shoe!

  @@size = 7 #all my shoes will be the same size!

  def puttingOnSneakers
    @wearsocks? = true
  end
end
{% endhighlight %}

Now do you understand their differences a little better? Different classes can also share variables if one class is considered sub-class of a particular class. Such as my rainboots class should have all the variables and rules at my shoes class(common sense right?).

Ok thanks for attending class for another week! It is the pumpkin season so hopefully you are having lots of pumpkin ale this weekend!

![img](http://www.quickmeme.com/img/98/98d1325185633ff45f4bed6e9ff8bc0e38b032c1311a285e776066e761afa2e8.jpg)