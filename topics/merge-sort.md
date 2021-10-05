# Merge sort

## Psuedo code
<img src="../images/merge-sort-psuedo-code.png" style="max-width: 250px;">

<img src="../images/merge-sort-merge-psuedo-code.png" style="max-width: 370px;">

## JavaScript implementation
<pre>
<code class="language-javascript">
function merge(arr, start, middle, end) {
  // Length of subarray 1.
  const n1 = middle - start;
  // Length of subarray 2.
  const n2 = end - middle;
  let left = [];
  let right = [];
  for (let i = 0; i <= n1; i++) {
    left[i] = arr[start+i];
  }
  for (let i = 0; i < n2; i++) {
    right[i] = arr[middle+i+1];
  }
  
  // Use infinity as sentinels.
  left.push(Infinity);
  right.push(Infinity);
  
  let i = 0;
  let j = 0;
  for (let k = start; k <= end; k++) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
  }
}

function mergeSort(arr, start, end) {
  if (start < end) {
    const middle = Math.floor((start+end)/2);
    mergeSort(arr, start, middle);
    mergeSort(arr, middle+1, end);
    merge(arr, start, middle, end);
  }
}

const arr = [10,5,2,1,9,2,-50,90];

mergeSort(arr, 0, arr.length-1);

console.log(arr);
</code>
</pre>

<a target="_blank" href="https://codepen.io/ejgoodwin/pen/NWgZJPz?editors=0010">Codepen</a>