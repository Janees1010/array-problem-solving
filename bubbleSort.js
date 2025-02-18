const arr = [1,5,2,6,8,4];
let temp;

for (i = 0; i < arr.length-1;i++) {
    for(j=0;j<arr.length-i-1;j++){
         if(arr[j] > arr[j+1]){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
         }
    }
    
}

for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}