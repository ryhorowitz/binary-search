function binarySearch(arr, target) {
  // type your code here
  if (arr.length === 0) return false
  const midIdx = Math.floor(arr.length / 2)
  const mid = arr[midIdx]

  if (mid === target) return true

  if (mid < target) {  //go right
    binarySearch(arr.slice(midIdx + 1), target)
  } else { //go left
    binarySearch(arr.slice(0, midIdx), target)
  }
}

// BONUS: MODIFY YOUR CODE TO RETURN THE INDEX OF THE TARGET, -1 IF NOT FOUND
function binarySearchIndex(arr, target) {
  if (arr.length === 0) return -1
  const midIdx = Math.floor(arr.length / 2)
  const mid = arr[midIdx]

  if (mid === target) return midIdx

  if (mid < target) {  //go right
    binarySearchIndex(arr.slice(midIdx + 1), target)
  } else { //go left
    binarySearchIndex(arr.slice(0, midIdx), target)
  }
}

if (require.main === module) {
  // add your own tests in here
  // console.log("Expecting: true");
  // console.log("=>", binarySearch([1, 2, 3], 3));

  // console.log("");

  // console.log("Expecting: false");
  // console.log("=>", binarySearch([3, 5, 9], 10));

  // UNCOMMENT FOR BONUS
  // console.log("");
  // console.log("Expecting: 0");
  // console.log("=>", binarySearchIndex([1, 2, 3], 1));

  // console.log("");

  // console.log("Expecting: -1");
  // console.log("=>", binarySearchIndex([4, 7, 20], 100));
}

module.exports = {
  binarySearch,
  binarySearchIndex
};

// Add a written explanation of your solution
