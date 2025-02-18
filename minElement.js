
const arr = [1,5,2,6,8,4];
let min = -Infinity;

for(i=0; i<=arr.length-1;i++){
   if(arr[i] < min || min < 0){
    min = arr[i];
   }
}

console.log("min element is",min);