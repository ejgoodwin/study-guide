# Heap
* A nearly complete binary tree
* Min heap: parent <= child
* Max heap: parent >= child

<pre>
Min heap:
     5
   /   \
  8      9
 / \    /
10  12 15

Represented as an array:
[5,8,9,10,12,15]

Max heap:
     20
   /   \
  16    17
 / \    /
7   5  2
Represented as an array:
[20,16,17,7,5,2]
</pre>

Find **parent** index of *i*:
<pre>
floor(i / 2)
</pre>

Find **left child** index of *i*:
<pre>
i * 2 + 1
</pre>

Find **right child** index of *i*:
<pre>
i * 2 + 2
</pre>