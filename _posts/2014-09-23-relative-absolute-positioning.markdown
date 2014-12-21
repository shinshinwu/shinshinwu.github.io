---
layout: post
title:  "Differences between Relative vs Absolute vs Fixed positioning"
date:   2014-09-23 00:00:01
author: Slightly chilly - first day of fall!
categories: ruby
---
No it means more than whether you are standing, or lying down, or is running. We are talking about CSS here!

To begine with, CSS (the sheet that defines the layout of your web page, it is the tool to make all pages colorful and pretty) by default set all your objects in your html to be static. Which means "I don't care where you will be on this web page. Just stay wherever you usually are".

![lazypuppy](http://cutestuff.co/wp-content/uploads/2012/11/how_lazy_puppies_eat_dinner.jpg)

Fixed positioning, on the other hand, means "We really care about where you are on my page. Thus I am putting you in one place and you can never move!" When an element is set to be fixed position for example on top righ corner of the page, they will stay there FOREVER. So when you scroll up or down, they will still be on the top right corner.

Now comes the comparison of relative positioning and absolute postioning. The best way to describe their difference is think of relative positioning as the nice kid at school and absolute positioning as that bulley. Relative postioning will always make ways for others in the hallway to let them pass by and they can adjust their seats (position) depends on other students (elements) location in the classroom (web page).

Absolute postioning on the other hand, will never cave to other people (elements). They are set in one place and if other people don't want to go around him, they will have a head to head conflict with the bulley. And usually that means one of them will disappear (one of the elements will be covered by another depends on their z-index).

Hopefully that was easy for you to understand! York University have a great and simple example [HERE][position] if you want more clarifications.

And no, NO ONE likes bullies. Don't be that guy/girl!


[position]:      http://www.yorku.ca/nmw/facs1939f13/week02/css_relVSabsVSfixed.html