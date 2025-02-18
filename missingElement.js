

const arr  = [4,3,1]
const length = arr.length + 1
const expectedSum  = (length * (length + 1) ) / 2
let sum = 0;
for(num of arr){
   sum += num
}
console.log(sum,expectedSum);

let missing = expectedSum - sum 

console.log("missing element is " + missing);


