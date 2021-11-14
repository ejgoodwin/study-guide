const collapseTitles = document.querySelectorAll('[collapse-title]');
console.log(collapseTitles)
collapseTitles.forEach(title => {
    title.addEventListener('click', () => {
        console.log(title)
        const collapseId = title.getAttribute('collapse-title');
        const collapseContent = document.querySelector(`[collapse-id=${collapseId}]`);
        if (collapseContent.hasAttribute('open')) {
            collapseContent.removeAttribute('open');
            title.removeAttribute('open');
        } else {
            collapseContent.setAttribute('open', '');
            title.setAttribute('open', '');
        }
    })
});

// *** Binary search ***
const binarySearchArr = [1,4,8,12,17,21,26,32,38,44,49,50,55];
const binarySearchResult = document.querySelector('.binary-search-result');
const binarySearchButton = document.querySelector('#binary-search-play');
let binarySearchInProgress = true;
let goal = document.querySelector('#binary-search-goal-input').value;
let binarySearchMin = 0;
let binarySearchMax = binarySearchArr.length-1;

// Make list.
const bSContainer = document.querySelector('.binary-search-container');
binarySearchArr.forEach((item, index) => {
  const bSItem = document.createElement('div');
  bSItem.classList.add("binary-search-item");
  bSItem.setAttribute('id', `b-s-${index}`);
  bSItem.innerHTML = item;
  bSContainer.appendChild(bSItem);
});

function binarySearch(arr, min, max) {
    const mid = Math.floor((min + max) / 2);
    const minEl = document.querySelector(`#b-s-${min}`);
    const maxEl = document.querySelector(`#b-s-${max}`);
    const midEl = document.querySelector(`#b-s-${mid}`);
    const allItems = document.querySelectorAll('.binary-search-item');
    allItems.forEach((item) => {
        item.classList.remove('edge', 'mid', 'match');
    });
    minEl && minEl.classList.add('edge', 'min-edge');
    maxEl && maxEl.classList.add('edge', 'max-edge');
    midEl.classList.add('mid');
    
    setTimeout(() => {
        if (arr[mid] == goal) {
            console.log('goal', mid);
            binarySearchResult.innerHTML = `Search result: match found! Index: ${mid}`;
            midEl.classList.add('match');
            binarySearchButton.removeAttribute('disabled');
            return mid;
        } else if (min >= max) {
            console.log('no match');
            binarySearchResult.innerHTML = `Search result: no match found :(`;
            bSContainer.classList.add('b-s-no-match');
            binarySearchButton.removeAttribute('disabled');
            return -1;
        } else if (goal > arr[mid]) {
            return binarySearch(arr,  mid + 1, max);
        } else {
            return binarySearch(arr, min, mid - 1);
        }
    }, 1000);
}

function binarySearchReset() {
    binarySearchResult.innerHTML = 'Search result:';
    goal = document.querySelector('#binary-search-goal-input').value;
    bSContainer.classList.remove('b-s-no-match');
}

binarySearch(binarySearchArr, binarySearchMin, binarySearchMax);

binarySearchButton.addEventListener('click', () => {
    binarySearchButton.setAttribute('disabled', '');
    binarySearchReset();
    binarySearch(binarySearchArr, binarySearchMin, binarySearchMax);
});

// *** END Binary search ***