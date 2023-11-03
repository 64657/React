function reverseString(input) {
    let reversed = "";
    for(let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
    return reversed;
}
const inputString = "codecode";
const reversedString = reverseString(inputString)
console.log(reversedString);


function isPrime(number) {
    if(number < 2) {
        return "No";
    }
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) {
            return "No"
        }
    }
    return "Yes"
}
const inputNumber = 3;
console.log(result);


const inputArray = [54,546, 548, 60]
function findMaxAndMin(arr) {
    if(arr.length === 0) {
        return "Array is empty"
    }
    let max = arr[0];
    let min = arr[o];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        } else if(arr[i] < min) {
            min = arr[i]
        }
    }
    return `${max} ${min}`;
}


const inputNumber = 988;
function reverseNumber(n) {
    const reversedStr = n.toString().split("").reverse().join("").replace(/^0+/, "");
    const reversedNumber = parseInt(reversedStr, 10);
    return reversednumber
}

function largestNumber(arr){
    const sortedArr = arr.sort((a, b) => {
        const strA = a.toString();
        const strB = b.toString();

        return (strB + strA).localeCompare(strA + strB);
    })
    return sortedArr.join('');
}

function largestNumber(arr) {
    const sortedArr = arr.sort((a, b) => {
        const strA = a.toString();
        const strB = b.toString();

        return (strB + strA).localeCompare(strA + strB)
    })
    return sortedArr.join('')
}

function largestNumber(arr) {
    const sortedArr = arr.sort((a,b) => {
        const strA = a.toString();
        const strB =  b.toString();

        return (strB + strA).localeCompare(strA + strB);
    });
    return sortedArr.join("")
}


var sortArray = function(nums) {
    return quickSort(nums)
}
function pivot (arr , start = 0, end = arr.length - 1) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let pivot = arr[start];
    swapidx = start;
    for(let i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, start, i)
        }
        swap(arr, start, swapIdx);
        return swapIdx;
    }
}
function quickSort(arr, start = 0, end = arr.length - 1) {
    if(left < right) {
        const  pivotIndex = pivot(arr, start, end)
        quickSort(arr, start, pivotIndex - 1)
        quickSort(arr, pivotIndex+1, end)
    }
}

var maximum_of_minimum = function(nums, k) {
    if(nums.length === 0 || k <= 0) {
        return "";
    }
    const result = [];
    for(let i = 0; i < nums.length - k; i++) {
        const subarray = nums.slice(i, i + k);
        const min = Math.min(...subarray);
        result.push(min)
    }
    const maxOfMin = Math.max(...result);
    return maxOfMin; 
}

function allocateCandies(ratings) {
    if(ratings.length === 0) {
        return 0;
    }
    const n  = ratings.length;
    const candies = new Array(n).fill(1);
    for(let i = 1; i < n; i++) {
        if(ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1
        }
    }
    for(let i = n - 2; i >= 0; i--) {
        if(ratings[i] > ratings[i + 1]) {
            candies[i] = candies[i + 1] + 1
        }
    }
    let totalcandies = candies.reduce((accumulator, initialValue) => accumulator + initialValue, 0);
    return totalcandies;
}



var MinStack = function() {
    this.stack = [];
}

MinStack.prototype.push = function(val) {
    this.stack.push({
        value : val,
        min : this.stack === 0 ? val : Math.min(val, this.getmin())
    });
};

MinStack.prototype.pop = function() {
    this.stack.pop();
}

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].value
}

MinStack.prototype.getmin =function() {
    return this.stack[this.stack.length - 1].min
}


var dailyTemperatures =function(temperatures) {
    let n = temperatures.length;
    let stack = [];
    let answer = new Array(n);
    answer.fill(0)

    for(let i = 0; i < n; i++) {
        const currentTemp = temperatures[i]
        const currentDay = i

        while(stack.length > 0 && temperatures[getTopOfStack(stack)] < currentTemp) {
            answer[getTopOfStack(stack)] = currentDay - getTopOfStack(stack)
            stack.pop()
        }
        stack.push(currentday)
    }
    return answer
}
var getTopOfStack = function(stack) {
    return stack[stack.length - 1]
}

var twoSum = function(nums, target) {
    var obj = {};
    for(let i =0; i < nums.length; i++) {
        let N = nums[i];
        if(obj[target - N] >= 0) {
            return [obj[target - N], i]
        } else return obj[N] = i
    }
}

var maxSlidingWindow = function(nums, k) { 
    const result = [];
    const deque = [];

    for(let i = 0; i < nums.length; i++) {
        if(deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }
        while(deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        deque.push(i);

        if(i >= k-1) {
            result.push(nums[deque[0]]);
        }
    }
    return result;
}

var grouoAnagram = function(strs) {
    let obj = {};
    strs.forEach(str => {
        const sorted = str.split('').sort().join('')
        obj[sorted] ? obj[sorted].push(str) : obj[sorted]
    })
    return Object.values(obj)
}