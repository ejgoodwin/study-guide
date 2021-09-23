# Insertion sort
* Sorts in place (there are a constant number of items stored outside of the array)
* O(n^2)
* Effective for small arrays
* Reminder: sorting cards

## Psuedo code
![insertion sort](images/insertion-sort-psuedo-code.png)

## JavaScript implementation
<pre>
let arr = [2,1,76,34,22,100, 22, 1];
for (let i = 1; i < arr.length; i++) {
  let current = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] > current) {
    arr[j+1] = arr[j];
    j--;
  }
  arr[j+1] = current;
}

console.log(arr);
</pre>