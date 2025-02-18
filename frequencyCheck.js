function countFreq(arr, n) {
    let visited = Array.from({ length: n }, (_, i) => false);
    console.log(visited);
    
    // Traverse through array elements and
    // count frequencies
    for (let i = 0; i < n; i++) {
  
      // Skip this element if already processed
      if (visited[i] == true)
        continue;
  
      // Count frequency
      let count = 1;
      for (let j = i + 1; j < n; j++) {
        if (arr[i] == arr[j]) {
          visited[j] = true;
          count++;
        }
      }
      console.log(arr[i] + " " + count);
    }
    console.log(visited);
  }
  let arr = [10, 20, 20, 10, 10, 20, 5, 20];
  let n = arr.length;
  countFreq(arr, n);
  
  
  
  