let arr = [1,10, 2, 3, 4, 5];
let largest = -Infinity,secondLargest = -Infinity;

for(let i = 0;i<arr.length;i++){
   if(arr[i] > largest ){
       secondLargest = largest
       largest = arr[i]
   }else if(arr[i] > secondLargest && arr[i] < largest) secondLargest = arr[i]
}


console.log(`maximum product is : ${largest * secondLargest}`);




// 7:06