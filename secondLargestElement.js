const arr = [12, 35, 1, 10, 34, 1];
let largest = -Infinity , secondLargest = -Infinity;

for (let i = 0 ; i<arr.length; i++){
     if(largest < arr[i]){
        secondLargest = largest;
        largest = arr[i];
     }else if(arr[i] > secondLargest){
        secondLargest = arr[i]
     }
}

console.log(secondLargest);
