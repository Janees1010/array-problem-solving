let arr = [10, 20, 20, 10, 10, 20, 5, 20];
let frequencyMap = {}; 

// Step 1: Calculate frequencies
for (let num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
}

console.log(frequencyMap);

let largestKey = -Infinity;
let secondLargestKey = -Infinity;
let largestValue;
let secondLargestValue;

// Step 2: Find largest and second largest frequencies
for (let key in frequencyMap) {
    let currentFrequency = frequencyMap[key];

    if (currentFrequency > largestKey) {
        // Update second largest before largest
        secondLargestKey = largestKey;
        secondLargestValue = largestValue;

        largestKey = currentFrequency;
        largestValue = key;
    }
    // } else if (currentFrequency > secondLargestKey && currentFrequency < largestKey) {
    //     secondLargestKey = currentFrequency;
    //     secondLargestValue = key;
    // }
}

// Step 3: Output the result
console.log(largestValue + ":" + largestKey + " largest");
console.log(secondLargestValue + ":" + secondLargestKey + " second largest");







//


