function elevatorTime(N, A, B) {
    // Calculate the time for the elevator to reach Alice's floor
    let timeToAlice = A * 10;
  
    // Calculate the time for the elevator to reach floor 0
    let timeToFloor0 = (N - A) * 10;
  
    // Calculate the total time it takes for Alice to reach the 'B-th' floor
    let totalTime = timeToAlice + (B < A ? (A - B) * 10 : (B - A) * 10);
  
    return totalTime;
  }
  
  // Example usage
  const N = 7;
  const A = 6;
  const B = 5;
  const result = elevatorTime(N, A, B);
  console.log(result); // Output: 70