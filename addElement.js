


// Write a program that add a element on specified index of array //

const arr = [1,5,2,6,8,4];
let elementToAdd = 5;
let index = 1; 
let i,j;

for(i=0;i<arr.length;i++){

   if(index === i){
   
    for(j = arr.length; j>index;j--){
        arr[j] = arr[j-1]
    }
   }
}
arr[index] = elementToAdd;

// arr.length = arr.length-1;


for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}
