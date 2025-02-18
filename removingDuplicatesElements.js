let arr = [1, 2, 2, 3, 4, 4, 5]
let removedCount = 0;
let swap = false;

for(let i = 0 ; i< arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
        if(arr[i] === arr[j]){
            arr[j] = false;
        }
    }
}

for(let i = 0; i<arr.length; i++){
   if(arr[i] != false){
       arr[i] = arr[i]
   }else{
       removedCount++
       for(let j = i ; j<arr.length; j++){
          arr[j] = arr[j+1]
       }
   }

}

arr.length = arr.length-removedCount;
console.log(arr);


let arr = [1, 2, 2, 3, 4, 4, 5];
let seen = {}; // Object to track unique elements
let result = []; // Array to store the result without duplicates

for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) { // If element is not seen before
        seen[arr[i]] = true; // Mark it as seen
        result.push(arr[i]); // Add it to the result
    }
}

console.log(result); 