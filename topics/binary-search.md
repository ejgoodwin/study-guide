# Binary search
* Searches for an item in a **sorted** list
* O(log n)
* Divide and conquer
* Implemented using recursion or iteration

## Demo
<label for="binary-search-goal-input" class="d-block b-s-label">
    Enter a goal
    <input type="text" value="50" id="binary-search-goal-input" class="d-block">
</label>
<button class="btn btn-primary" id="binary-search-play" disabled>Play demo</button>
<div class="binary-search-container"></div>
<div class="binary-search-result">Search result:</div>

## JavaScript implementation
### Iterative
<pre>
<code class="language-javascript">
const arr = [1,3,6,8,9,10];
const goal = 9;
let goalIndex = -1;
let min = 0;
let max = arr.length-1;
let mid;

while (min <= max) {
  mid = Math.floor((min + max) / 2);
  if (arr[mid] == goal) {
    goalIndex = mid;
    break;
  } else if (goal < arr[mid]) {
    max = mid - 1;
  } else if (goal > arr[mid]) {
    min = mid + 1;
  }
}

let goalReached = goalIndex == -1 ? false : true;
console.log('goal reached', goalReached);
console.log(goalIndex);
</code>
</pre>

### Recursive
<pre>
<code class="language-javascript">
const binarySearchArr = [1,4,8,12,17,21,26,32,38,44,49,50,55,61,67,77,89,90,100,101];
const goal = 89;
let binarySearchMin = 0;
let binarySearchMax = binarySearchArr.length-1;

function binarySearch(arr, min, max) {
    const mid = Math.floor((min + max) / 2);
    if (arr[mid] == goal) {
        console.log('goal', mid);
        return mid;
    } else if (min >= max) {
        console.log('no match');
        return -1;
    } else if (goal > arr[mid]) {
        return binarySearch(arr,  mid + 1, max);
    } else {
        return binarySearch(arr, min, mid - 1);
    }
}

console.log(binarySearch(binarySearchArr, binarySearchMin, binarySearchMax));
</code>
</pre>