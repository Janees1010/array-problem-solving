
const arr = [1,5,2,6,8,4];
let temp = 0;

for(i=0; i<=arr.length-1;i++){
   if(arr[i] > temp){
      temp = arr[i];
   }
}

console.log("max element is",temp);
