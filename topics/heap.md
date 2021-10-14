# Heap
* A nearly complete binary tree
* Min heap: parent <= child
* Max heap: parent >= child

<pre>
     5
   /   \
  8      9
 / \    /
10  12 15
</pre>

Represented as an array:
<pre>
[5,8,9,10,12,15]
</pre>

Find **parent** index of *i*:
<pre>
floor(i / 2)
</pre>

Find **left child** index of *i*:
<pre>
i * 2
</pre>

Find **right child** index of *i*:
<pre>
i * 2 + 1
</pre>