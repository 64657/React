var calculate = function(s) {
    const stack = [];
    let result = 0;
    let num = 0;
    let sign = 1;

    for(let i =0; i < s.length; i++) {
        const char = s[i];

        if(char >= '0' && char <= '9') {
            num = num *  + parseInt(char);
        }else if (char === '+'){
            result += sign * num;
            num = 0;
            sign = 1;
        } else if (char === '-'){
            result += sign * num;
            num = 0;
            sign = -1;
        } else if ( char === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1
        } else if(char === ')'){
            result += sign * num;
            num = 0;
            result *= stack.pop();
            result += stack.pop()
        }
    }
    result += sign * num
    return result;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let sortedArr = [];

    while(left.length && right.length) {
        if(left[0] > right[0]) {
            sortedArr.push(left.shift())
        }else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]
}


function largestNumber(arr) {
    function mergeSort(arr) {
      if (arr.length <= 1) return arr;
      let mid = Math.floor(arr.length / 2);
      let left = mergeSort(arr.slice(0, mid));
      let right = mergeSort(arr.slice(mid));
      return merge(left, right);
    }
  
    function merge(left, right) {
      let sortedArr = [];
  
      while (left.length && right.length) {
        // Compare two numbers in a way that maximizes the value
        const order1 = left[0] + right[0];
        const order2 = right[0] + left[0];
  
        if (order1 > order2) {
          sortedArr.push(left.shift());
        } else {
          sortedArr.push(right.shift());
        }
      }
  
      return [...sortedArr, ...left, ...right];
    }
  
    const sortedArr = mergeSort(arr.map(num => num.toString()));
    return sortedArr.join('');
  }
  
  // Input array of numbers
  const inputArray = [54, 546, 548, 60];
  
  // Call the function to arrange the numbers to form the largest value
  const result = largestNumber(inputArray);
  
  // Print the result
  console.log(result);
  

  function largestnumber(arr) {
    const compare = (a, b) => {
        const order1 = a.toString() + b.toString();
        const order2 = b.toString() + a.toString();
        return order2.localeCompare(order1)
    }
    arr.sort(compare);

    const largestValue = arr.join('');
    return largestValue;
  }


  function largestnumber(arr) {
    function mergeSort(arr) {
        if(arr.length >= 1) {
            return arr;
        }
        let mid = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        return merge(left, right);
    }
    function merge(left, right) {
        let sortedArr = [];

        while(left.length && right.length) {
            const order1 = left[0].toString() + right[0].toString();
            const order2 = right[0].toString() + left[0].toString();

            if(order1 > order2) {
                sortedArr.push(left.shift());
            } else {
                sortedArr.push(right.shift());
            }
        }
        return [...sortedArr, ...left, ...right];
    }
    const sortedArr = mergeSort(arr);
    return sortedArr.join('')
  }
//   const inputArray =[54,546]
const rresult  = largestnumber(inutArray)
console.log(result);



var sortArray = function(nums) {
    return quickSort(nums)
}
function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let pivot = arr[start];
    let swapIdx = start;
    for(let i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
    if(left < right) {
        const pivotIndex = pivot(arr, start, end)
        quickSort(arr, start, pivotIndex-1)
        quickSort(arr, pivotIndex+1, end)
    }
}


