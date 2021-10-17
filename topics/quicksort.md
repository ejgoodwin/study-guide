# Quicksort
* Recursive
* O(nlogn)

## Pseudocode
<img src="../images/quicksort.png" style="max-width: 250px;">

<img src="../images/quicksort-partition.png" style="max-width: 250px;">

## JavaScript implementation
<pre>
<code class="language-javascript">
const array = [19,0,45,-1234,9,999,-2,1];

function quicksort(arr, start, end) {
  if (start < end) {
    let pivot = partition(arr, start , end);
    quicksort(arr, start, pivot-1);
    quicksort(arr, pivot+1, end);
  }
  return arr;
}

function partition(arr, start , end) {
  let pivot = arr[end];
  let leftWall = start - 1;
  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      leftWall++;
      // exchange arr[i] with arr[j].
      let temp = arr[leftWall];
      arr[leftWall] = arr[i];
      arr[i] = temp;
    }
  }
  // exchange arr[leftWall+1] with arr[end].
  let temp = arr[leftWall+1];
  arr[leftWall+1] = arr[end];
  arr[end] = temp;
  return leftWall+1;
}

console.log(quicksort(array, 0, array.length-1));
</code>
</pre>