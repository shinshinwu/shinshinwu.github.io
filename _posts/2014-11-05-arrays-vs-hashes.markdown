---
layout: post
title:  "Arrays vs. Hashes"
date:   2014-11-05 00:00:11
author: First week of fall, starting to feel like it...
categories: ruby
---
Have you ever played blocks when you were young? (Or maybe you still are, no judgement here, they are actually quite intellectual stimulating.) Now think of when you are done playing and putting all your blocks into a box where it can be safely kept. Now think of the box as array, and the blocks inside are the varies elements that makes up an array! Now arrays can contain almost anything (strings, number, boolean etc) you throw in there, it just takes them and safekeep it for you until you need something from it.

Everything in an array is assigned an index number depending on the order they were put into the array. And those index number become the unique identifier of those elements. When you need one particular element from the array, you have to call it by its index number to access it. For example:

{% highlight ruby %}
array = ["this", "is", 5, "just", "another", 155, "awesome", "day"]
{% endhighlight %}

If you are only trying to pull out "awsome" from your array table, you will enter array[6]. Because if you count all the entries prior tp "awesome", there are 6 elememts, and the first element have the index starting at 0 ("this"), and second element have the index of 1 ("is") and so on.

Now hashes.

The best way of explaining the relationship of array and hashes is to understand hashes as associative arrays. All elements in hashes are in certain orders as well. However, instead of referring to the elements in arrays according to their automatically assigned index number, you tell how the elements in hashes should be identified as. For example:

{% highlight ruby %}
hash = {
  'candy' => 'sour patch',
  'fruit' => 'apple',
  'book' => 'outliers',
  'number' => 33,
}
{% endhighlight %}

You will refer to 'sour patch' by calling hash['candy'] and the number 33 by calling hash[number]. There are different benefits of using arrays and hashes, the biggest question you should consider before deciding on using hash or array is that is it important for each elements in the container to have its unique identifier and would refer to the element by counting its index location be a tideous task.

If you still have questions, feel free to call me out on Twitter! Happying hashing!

![img](http://media.tumblr.com/722fa9de49f7fbbc18e86bfec0013ed0/tumblr_inline_nbxbfq1QXZ1rnvwt1.gif)