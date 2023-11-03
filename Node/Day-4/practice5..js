function rotate(nums, k) {
    let size  = nums.length;
    k = k % size;

    reverse(nums, 0 , size - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, size - 1);
}
function reverse(nums, left, right) {
    while(left < right) {
        const temp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = nums[left];
    }
}

function secondLargest(arr) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondlargest = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest){
            secondlargest = largest;
            largest = arr[i];
        } else if(arr[i] !== largest && arr[i] > secondlargest) {
            secondlargest = arr[i]
        }
    }
}


function removeDuplicates(nums) {
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] = nums[i + 1]) {
            nums.splice(i + 1, 1);
            i--;
        }
    }
    return nums.length;
}

var productExceptSelf = function(nums) {
    const n = nums.length;
    const output = new Array(n);

    let productToLeft = 1;
    let productToRight = 1;

    for(let i = 0; i < n; i++) {
        output[i] = productToRight;
        productToLeft  *= nums[i];
    }
    for(let i = n - 1; i >= 0; i--) {
        output[i] *= productToRight;
        productToRight *= nums[i];
    }
    return output
}

var merge = function(intervals) {
    if(intervals.length <= 1) return 1;

    // intervals.sort((a,b) => a[0] - b[0]);
    intervals = mergeSort(intervals);

    let mergeIntervals = [intervals[0]];

    for(let i = 1; i < intervals.length; i++) {
        let currentInterval = intervals[i];
        let lastMerge = mergeIntervals[mergeIntervals.length - 1];

        if(currentInterval[0] <= lastMerge[1]) {
            lastMerge[1] = Math.max(lastMerge[1], currentInterval[1])
        } else {
            mergeIntervals.push(currentInterval)
        }
    }
    return mergeIntervals;

}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return mergeArray(left, right);
}

function mergeArray(left, right) {
    let sortedArray = [];

    while(left.length && right.length) {
        if(left[0][0] < right[0][0]) {
            sortedArray.push(left.shift())
        } else {
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray,...left,...right];
}

var combinationSum = function(candidates, target) {
    let temp = [];
    let result = [];

    function backtrack(index, target, temp) {
        if(target === 0) {
            result.push([...temp])
            return
        }
        if(target < 0) return;

        for(let i = index; i < candidates.length; i++) {
            temp.push(candidates[i]);
            backtrack(i, target - candidates[i], temp);
            temp.pop()
        }
    }
    backtrack(0, target, temp);
    return result;
}

var generateParenthesis = function(n) {
    let result = [];

    function backtrack(curr, open, close) {
        if(current.length === 2 * n) {
            result.push(curr);
            return;
        }
        if(open < n) {
            backtrack(curr + '(', open + 1, close);
        }
        if(close < open) {
            backtrack(curr + ')', open, close + 1)
        }
        backtrack('', 0,0);
        return result;
    }
}

var permute = function(nums) {
    let temp = [];
    let result = [];
    let recursive = function(nums, i) {
        if(i === nums.length) {
            result.push([...temp])
            return
        };
        for(let j = 0; j , nums.length; j++) {
            if(!temp.includes(nums[j])) {
                temp.push(nums[j]);
                recursive(nums, i + 1);
                temp.pop();
            }
        }
    }
    recursive(nums, 0);
    return result;
}


var maxSlidingWindow = function(nums, k) {
    let result = [];
    let deque = [];

    for(let i = 0; i < nums.length; i++) {
        if(deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }
        while(deque.length > 0 && nums[deque[deque.lenght - 1]] < nums[i]) {
            deque.pop();
        }
        deque.push(i);
        if(i >= k - 1) {
            result.push(nums[deque[0]])
        }
    }
}


function mergeSort(arr) {
    if(arr.length <= 1) return arr;

    let middle = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let sortedArr = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]
}

var sortArray = function(nums) {
    return quickSort(nums)
}
function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp
    }
    let pivot =arr[start];
    let swapIdx =start;
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
        quickSort(arr, start, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, end)
    }
    return arr
}


var calculate = function(s) {
    const stack = [];
    let result = 0;
    let num = 0;
    let sign = 1;

    for(let i = 0; i < s.length; i++) {
        const char = s[i];

        if(char >= "0" && char <= "9") {
            num = num + parseInt(char);
        } else if(char === "+") {
            result += sign * num;
            num = 0;
            sign = 1;
        } else if(char === "-") {
            result += sign * num;
            num = 0;
            sign = -1;
        } else if(char === "("){
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if(char === ")") {
            result += sign * num;
            num = 0;
            result *= stack.pop();
            result += stack.pop();
        }
        result += sign * num;
        return result
    }
}
const sum = (1+(4+5+2)-3+(6+8))
console.log(calculate(sum))
var backSpaceCompare = function(s,t) {
    function processString(s) {
      const stack = [];
      for(const char of s) {
        if(char === "#") {
          if(stack.length > 0) {
            stack.pop();
          }
        }else {
          stack.push(char);
        }
      }
      return stack.join("")
    }
    return processString(s) === processString(t)
  }
  
  let s = "ab#c";
  let t = "ad#c";
  console.log(backSpaceCompare(s,t));


Input: s = "3[a]2[bc]"
Output: "aaabcbc"

var decodeString = function(s) {
    const stack  = [];
    let currentNum =0;
    let currentStr = "";

    for(let char of s) {
        if(char === "[") {
            stack.push(currentStr);
            stack.push(currentNum);
            currentStr = "";
            currentNum = 0;
        }else if(char === "]") {
            let num = stack.pop();
            let prevStr = stack.pop();
            currentStr = prevStr + currentStr.repeat(num)
        } else if(/[0-9]/.test(char)) {
            currentNum = currentNum * 10 + parseInt(char)
        } else {
            currentStr += char;
        }
    }
    return currentStr;
}
const s = "3[a]2[bc]";
console.log(decodeString(s))