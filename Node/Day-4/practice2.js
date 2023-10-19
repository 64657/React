var isValid = function(s) {
    const stack = [];

    for(i = 0; i < s.length; i++) {
        const char = s[i];

        if ( char === "(" || char == "{" || char === "[") {
            stack.push(s[i])
        } else if (char === ")" || char ==="}" || char === ']') {
            if(isEmpty(stack)) {
                return false;
            }
            const top = stack.pop()
            if(
                (char === ")" && top !== "(") ||
                (char === "}" && top !== "{") ||
                (char === "[" && top !== "]")
            ) {
                return false;
            }
        }
    }
    return isEmpty(stack)
}
function isEmpty(stack) {
    return stack.length === 0;
}


var MinStack = function() {
    this.stack = [];
};

MinStack.prototype.push = function(val) {
    this.stack.push({
        value : val,
        min: this.stack.length === 0 ? val : Math.min(val, this.getMin())
    })
}

MinStack.prototype.pop = function() {
    this.stack.pop();
}

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].value
}

MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length -1].min
}

var decodeString = function(s) {
    const stack =[];
    let currentNum = 0;
    let currentStr = '';

    for(let char of s) {
        if(char === '[') {
            stack.push(currentStr);
            stack.push(currentNum);
            currentStr = '';
            currentNum = 0;
        } else if(char === ']') {
            let num = stack.pop();
            let prevStr = stack.pop();
            currentStr = prevStr + currentStr.repeat(num)
        } else if (/[0-9]/.test(char)) {
            currentNum = currentNum * 10 + parseInt(char)
        } else {
            currentStr += char;
        }
    }
    return currentStrl;
}

var backspaceCompare = function(s, t) {
    function processString(s) {
        const stack = [];
        for(const char of s) {
            if(char === '#') {
                if(stack.length > 0) {
                    stack.pop();
                }
            } else {
                stack.push(char);
            }
        }
        return stack.join('')
    }
    return processString(s) === processString(t)
}


var calculate = function(s) {
    const stack = [];
    let result = 0;
    let num = 0;
    let sign = 1;

    for(let i = 0; i < s.length; i++) {
        const char = s[i];

        if(char >= '0' && char <= '9') {
            num = num * 10 + parseInt(char);
        } else if(char === '+'){
            result += sign * num;
            num = 0;
            sign = 1;
        } else if (char === '-'){
            result += sign * num;
            num = 0;
            sign = -1;
        } else if (char === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (char === ')') {
            result += sign * num;
            num = 0;
            result *= stack.pop();
            result += stack.pop();
        }
    }
    result += sign * num
    return result;
}

class Queue {
    constructor(){
        this.queue = []
    }

    enqueue(element) {
        this.queue.push(element)
    }

    dequeue() {
        if(this.isEmpty()) {
            return "Underflow, cannot perform dequeue";
        }
        return this.queue.shift()
    }

    isEmpty() {
        return this.size() === 0;
    }

    front() {
        if(this.isEmpty()) {
            return "No Elements in the Queue";
        }
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    printQueue() {
        let queueString ="";
        for(let i = 0; i < this.size(); i++) {
            queueString += this.queue[i] + ", ";
        }
        console.log("Queue: " + queueString);
    }
}

const myQueue = new Queue();
myQueue.enqueue()


var MyCircularQueue = function(k) {
    this.queue = [];
    this.size = k;

    MyCircularQueue.prototype.enQueue = function(value) {
        if(this.size === this.queue.length) return false;
        this.queue.push(value);
        return true;
    }
    MyCircularQueue.prototype.deQueue = function() {
        if(this.queue.length === 0) return false;
        this.queue.shift();
        return true
    }
    MyCircularQueue.prototype.Front = function() {
        if(this.queue.length === 0) return -1
        return this.queue[0];
    }
    MyCircularQueue.prototype.Rear = function() {
        if(this.queue.length === 0) return -1
        return this.queue[this.queue.length - 1]
    }
    MyCircularQueue.prototype.isEmpty =function() {
        return this.queue.length === 0;
    }
    MyCircularQueue.prototype.isFull = function() {
        return this.size === this.queue.length
    }
};
var obj = new MyCircularQueue(k)


var MyStack = function() {
    this.q1 = [];
    this.q2 = [];
}

MyStack.prototype.push = function(x) {
    while(this.q1.length !== 0) {
        this.q2.push(this.q1.shift())
    }
    this.q1.push(x);
    while(this.q2.length !== 0) {
        this.q1.push(this.q2.shift())
    }
}

MyStack.prototype.pop = function() {
    return this.q1.shift()
}

MyStack.prototype.top = function() {
    return this.q1[0];
}

MyStack.prototype.empty = function() {
    return this.q1.length === 0
}

var obj = new MyStack

var  MyQueue = function() {
    this.stack1 =[];
    this.stack2 =[];
}

MyQueue.prototype.push = function(x) {
    this.stack2.push(x)
}

MyQueue.prototype.pop = function() {
    if(this.stack2.length === 0){
        while(this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2.pop()
}

MyQueue.prototype.pop = function() {
    if(this.stack2.length === 0){
        while(this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2[this.stack2.length - 1]
}

MyQueue.prototype.empty = function() {
    return (this.stack1 + this.stack2).length === 0
}

var maxSlidingWindow = function(nums, k) {
    const result = [];
    const deque = [];

    for(let i = 0; i < nums.length; i++) {
        if(deque.length > 0 && deque[0] <= i - k){
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
}

var maxSlidingWindow = function(nums, k) {
    const result = [];
    const deque  = [];

    for(let i = 0; i < nums.length; i++) {
        if(deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }
        while(deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        deque.push(i);
        if(i >= k - 1){
            result.push(nums[deque[0]]);
        }
    }
}

const linearSearch =(nums, target) => {
    for(let i = 0; i < nums.length; i++) {
        if(target === nums[i]) {
            return 1;
        }
    }
    return -1
}

const globalLinearSearch =(nums, target)  => {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if(target === nums[i]) {
            result.push(i);
        }
    }
    if(result.length === 0) return -1;
    return result
}

var search = function(nums, target) {
    let start = 0;
    let end  = nums.length - 1;

    while(start <= end) {
        let middle = Math.floor((start + end) / 2);

        if(nums[middle] === target){
            return middle;
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1
        }
    }
    return -1;
}

var findKthPositive = function(arr, k) {
    let count = 0;
    for(i = 0; i < arr.length; i++) {
        if(arr[i] <= k + count){
            count++
        }
    }
    return k + count;
}

var maximumCount = function(nums) {
    return Math.max(upperBound(nums), lowerBound(nums));
}

function upperBound(nums) {
    let low  = 0;
    let high = nums.length - 1;

    while(low < high) {
        let mid = Math.ceil((low + high) / 2)
        if(nums[i] < 0) low = mid;
        else high = mid - 1;
    }
    return nums[0] >= 0 ? 0 : low + 1;
}

function lowerBound(nums) {
    let low = 0;
    let high = nums.length - 1;

    while(low < high) {
        let mid = Math.floor((low + high) / 2);
        if(nums[mid] > 0) high = mid
        else low = mid + 1;
    }
    return nums[nums.length - 1] <= 0 ? 0 : nums.length - low
}


var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let first = -1;

    while(left <= right) {
        let mid =Math.floor((left + right) / 2);

        if(nums[mid] === target){
            first = mid;
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }

    left = 0;
    right = nums.length - 1;
    last = -1;

    while(left <- right) {
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] === target) {
            last = mid;
            left = mid + 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return [first, last]
}

var findPeakElement = function(nums) {
    if(nums.length === 0)return 0;
    let left = 0;
    let right  = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2)

        if(nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1
        }
    }
    return left;
}


var sortColors = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length - i - 1; j++){
        if(nums[j] > nums[j + 1]) {
            [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        }
      }
    }
    return nums;
}

var sortAarray = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        let minIndex = i;
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
        }
    }
    return nums;
}

var insertionSort = function(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
       const key = arr[i];
       const j = i - 1;
       while(j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
       }
       arr[j + 1] = key;
    }
    return arr;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;

    let mid =Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let sortedArr = [];

    while (left.length && right.length) {
      if(left[0] < right[0]){
        sortedArr.push(left.shift())
    } else {
        sortedArr.push(right.shift())
      }
    }
    return [...sortedArr, ...left, ...right];
}

var sortArray = function(nums) {
    return quickSort(nums)
}
function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(array,i,j) {
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
        const pivotIndex = pivot(arr,start, end)
        quickSort(arr, start, pivotIndex-1)
        quickSort(arr, pivotIndex+1, end)

    }
    return arr
}