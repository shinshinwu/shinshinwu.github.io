---
layout: post
title:  "Cheatsheet: What is Javascript Prototype?"
date:   2014-11-06 17:56:11
author: Couldn't figure out a better template for cheat sheet, so temporarily here
categories: javascript
---
All JavaScript object inherites proporties from Object prototype. From example:

{% highlight javascript %}
var Person = function(
  profession,name,age,gender){
    this.profession = profession;
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.alive=true;
  };
{% endhighlight %}

Here are some its most popular methods and their usage. For example:

{% highlight javascript %}
mike.name;
#=> will return 'Mike'
mike.gender;
#=> will return undefined;
mike.alive;
#=> will return true;
{% endhighlight %}

Now we will define a new object Developer.

{% highlight javascript %}
var Developer = function(language) {
this.language = language;
this.speak = function() {
  console.log("I love writing in " + this.language + "!");
  };
}

Developer.prototype = new Person("Developer");

var mike = new Developer("Ruby");
{% endhighlight %}

This way, if we call mike.speak(); it will return "I love writing in Ruby!" and if we call mike.profession = "Developer"; This happens because mike as a developer, he inherited the same properties from Person.

Now we will jump into a popular method property of prototypes. The method: hasOwnProperty(). This method return a boolean value to see if the object have property pass to the parameter. Some examples:

{% highlight javascript %}
mike.hasOwnProperty("language")
#=> true
mike.hasOwnProperty("alive")
#=>false
{% endhighlight %}

Hope this cheat sheet shed some light on JavaScript prototypes and what are some ways you can put it into use.

![img](http://2.bp.blogspot.com/-zVNN8K11FW4/UNt_3e096DI/AAAAAAAAAFM/seH7qdbVxOo/s1600/the-most-interesting-man-in-the-world-meme-generator-i-don-t-always-make-sense-but-when-i-do-i-don-t-c9460e.jpg)