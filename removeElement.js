
// Write a program that removes a specified element from an array and prints the new array.

const arr = [1,5,2,6,8,4];
let elementToRemove = 5;
let swap=false;

for(i=0;i<arr.length;i++){
   if(arr[i] === elementToRemove){
     arr[i] = arr[i+1]
     swap = true;
   }
   if(swap){
     arr[i] = arr[i+1]
   }
}

arr.length = arr.length-1;


for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}
