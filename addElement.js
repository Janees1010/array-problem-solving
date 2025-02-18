


// Write a program that add a element on specified index of array //

const arr = [1,5,2,6,8,4], elementToAdd = 5, index = 4; 
let i,j;
for(i=0;i<arr.length;i++){
   if(index === i){
    for(j = arr.length; j>i;j--){
        arr[j] = arr[j-1]
    }
    arr[i] = elementToAdd;
    break;
   }
  
}

console.log(arr);


