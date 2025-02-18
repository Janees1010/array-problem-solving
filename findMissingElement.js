const arr =  [9,6,4,2,3,5,7,0,1];
let sumOfArray = 0;
for(elem of arr){
     sumOfArray += elem;
}
const expectedSum = (9 * (9 + 1)) / 2
console.log(Math.ceil(expectedSum - sumOfArray));


// Output: 8
