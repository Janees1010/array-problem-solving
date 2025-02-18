const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let currentSum = arr[0];  // Start with the first element
let maxSum = arr[0];      // Start with the first element as the initial max sum

for (let i = 1; i < arr.length; i++) {
    // If the current sum becomes negative, reset it to the current element
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    // Update the maximum sum found so far
    maxSum = Math.max(maxSum, currentSum);
}

console.log(maxSum);  // Output the maximum sum of the subarray
