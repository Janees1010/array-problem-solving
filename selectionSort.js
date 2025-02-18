const arr = [1,5,2,6,8,4];
let temp;
let length  = arr.length;

for(let i=0;i<length-1;i++){
    for(let j=i+1; j<length; j++ ){
          if(arr[i] > arr[j]){
             temp = arr[i]
             arr[i] = arr[j]
             arr[j] = temp;
          }
    }
}

console.log(arr);
