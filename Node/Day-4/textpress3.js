function reverseString(input) {
    let reversed = "";
    for(let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
    return reversed;
}
const inputString = "codecode";
const reversedString = reverseString(inputString)
console.log(reverrsedString);


function isPrime(number) {
    if(number < 2) {
        return "No";
    }
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) {
            return "No"
        }
    }
    return "yes"
}
const inputNumber = 3;
const result  = isPrime(inputNumber);
console.log(result);


const inputarray = [54,546,548,50];
function findMaxandMin(arr) {
    if(arr.length === 0) {
        return "Array is empty"
    }
    let max = arr[0];
    let min = arr[0];

    for(let i = 1; i , arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        } else if(arr[i] < min) {
            min = arr[i]
        }
    }
    return `${max} ${min}`;
}

const inpNumber = 988;
function reversedNumber(n) {
    const reversedStr = n.toString().split("").reverse().join("")
    const reversedNumber = parseInt(reversedStr);
    return reversedNumber;
}
console.log(reversNumber(inputNumber))

function largestNumber(arr) {
    const sortedArr = arr.sort((a,b) => {
        const strA = a.toString();
        const strB = b.toString();

        return (strB + strA).localeCo,pare(strA + strB)
    })
    return sortedArr.join("");
}


var maximum_of_minimum = function(nums, k) {
    if(nums.length === 0 || k <= 0) {
        return "";
    }
    const result = [];
    for(let i = 0; i < nums.length - k; i++) {
        const subarray = nums.slice(i, i + k);
        const min = Math.min(...subarray);
        result.push(min);
    }
    const maxOfmin = Math.max(...result);
    return maxOfmin;
}

function allocatecandies(ratings) {
    if(ratings.length === 0) {
        return 0;
    }
    const n = ratings.length;
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
    let totalcandies = candies.reduce((accumulator, initialvalue) => accumulator + initialvalue, 0)
    return totalcandies;
}


var sortArray = function(nums) {
    return quickSort(nums)
}
function pivot (arr, start = 0, end = arr.length - 1) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let pivot = arr[start];
    swapIdx = start;
    for(let i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, start, i)
        }
        swap(arr, start, swapIdx);
        return swapIdx;
    }
}
function quickSort(arr, start = 0, end = arr.length) {
     if(left < right) {
        const pivotIndex = pivot(arr, start, end)
        quickSort(arr, start, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, end)
     }
}

var MinStack = function() {
    this.stack = [];
}

MinStack.prototype.push = function(val) {
    this.stack.push({
        value : val,
        min : this.stack === 0 ? val :Math.min(val, this.getMin())
    })
}

MinStack.prototype.pop = function() {
    this.stack.pop();
}

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].value
}

MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1].min
}


var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let stack = [];
    let answer = new Array(n);
    answer.fill(0);

    for(let i = 0; i < n; i++) {
        const currentTemp = temperatures[i];
        currentDay = i;

        while(stack.length > 0 && temperatures[getTopOfStack(stack)] < currentTemp) {
            answer[getTopOfStack(stack)] = cuurentDay - getTopOfStack(stack)
        }
        stack.push(currentDay)
    }
    return answer;
}
var getTopOfStack = function(stack) {
    return stack[stack.length - 1]
}


var twoSum = function(nums, target) {
    var obj = {};
    for(let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if(obj[target - n] >= 0) {
            return [obj[target - n], i]
        } else return obj[n] = i;
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
            deque.pop()
        }
        deque.push(i);

        if(i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    return result;
}

var groupAnagram = function(strs) {
    let obj = {};
    strs.forEach(str => {
        const sorted = str.split('').sort().join('')
        obj[sorted] ? obj[sorted].push(str) : obj[sorted]
    })
    return Object.values(obj)
}


var mergeSort = function(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}
var mergeArray = function(left, right) {
    let sortedArr = [];

    while(left.length && right.length) {
        if(left[0] < right[0]) {
            sortedArr.push(left.shift())
        }else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]
}


var calculate = function(s) {
    const stack = [];
    let result = 0;
    let num = 0;
    let sign = 1;

    for(let i = 0; i < s.length; i++) {
        const char = s[i];

        if(char >= '0' && char <= '9') {
            num = num + parseInt(char);
        }else if(char === '+') {
            result += sign * num;
            num = 0;
            sign = 1
        }else if(char ==='-') {
            result += sign * num;
            num = 0;
            sign = -1;
        }else if(char === '('){
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        }else if(char === ')'){
            result += sign * num;
            num = 0;
            result *= stack.pop();
            result += stack.pop();
        }
    }
    result += sign * num;
    return result;
}

var fib = function(n) {
    if(n <= 1) {
        return n;
    }else {
        return fib(n - 2) + fib(n - 1)
    }
}

var fib = function(n) {
    let arr= [0, 1];
    for(let i = 2; i <= n; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[n]
}


var summaryRanges = function(nums) {
    if(nums.length === 0) {
        return [];
    }
    const result = [];
    let startNum = nums[0];
    let endnum = nums[0];

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === endNum + 1) {
            endnum = nums[i]
        }else {
            result.push(formatRange(startNum, endNum));
            startNum = endnum = nums[i]
        }
    }
    result.push(formatRange(startNum, endnum));
    return result;
}
var formatRange = function (start, end) {
    if(start === end) {
        return start.toString();
    }else {
        return start + '->' + end;
    }
}


var isPalindrome =function(x) {
    if(x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    const strX = x.toSting();

    const isPalindromeHelper = (str) => {
        if(str.length <= 1) {
            return true;
        }
        if(str[0] === str[str.length - 1]) {
            return isPalindromeHelper(str.slice(1,str.length - 1))
        }
        return false
    }
    return isPalindromeHelper(strX);
}


var ListNode = function(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var arrToLinky  = function(arr) {
    let dummy = new ListNode();
    let current = dummy;

    for(const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next
}
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while(l1 !== null || l2 !== null || carry > 0) {
        var val1 = l1 ? l1.val : 0;
        var val2 = l2 ? l2.val : 0;

        var sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        sum %= 10;

        current.next = new ListNode(sum);
        current = current.next;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    return dummy.next
}

let inputArray1 = [2,4,3];
let inputArray2 = [5,4,6];

let linked1 = arrToLinky(inputArray1);
let linked2 = arrToLinky(inputArray2);

let res1 = addTwoNumbers(linked1,linked2);

let modAr = [];
let curr = res1;
while(current1) {
    modAr.push(curr.val)
    current1 = current1.next
}


var rotate = function(nums, k) {
    let size = nums.length;

    k = k % size;

    reverse(nums, 0, size - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, size - 1)
    return nums
}
function reverse(nums, left, right) {
    while(left < right) {
        const temp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = temp;
    }
}


function secondLargest(arr) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }else if(arr[i] !== largest && arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}


function removeDuplicates(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] = nums[i + 1]) {
            nums.splice(i + 1, 1);
            i--;
        }
    }
    return nums.length;
}

function removeDuplicatesNew(nums) {
    if(nums.length === 0) return 0;
    let i = 0;

    for(let j = 1; j < nums.length; j++) {
        if(nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j]
        }
    }
    return i + 1;
}


function maxSubArray(nums) {
    let sum = 0;
    let max = nums[0];

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if(sum > max) {
            max = sum;
        }
        if(sum < 0) {
            sum = 0;
        }
    }
    return max;
}

var twoSum = function(nums, target) {
    var obj = {};
    for(let i = 0; i < nums.length; i++) {
        var n = nums[i];
        if(obj[target - n] >= 0) {
            return [obj[target - n], i]
        }else obj[n] = i
    }
}


function maxArea(height) {
    let left = 0;
    let right = height.length - 1;

    let maxArea =0;

    while(left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const area = width * minHeight;
        maxArea = Math.max(maxArea, area);
        if(height[left] < height[right]) {
            left++;
        }else {
            right--;
        }
    }
    return maxArea
}

const maxProfit = function(prices) {
    let minStockPurchasePrice = prices[0] || 0;
    let profit = 0;
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < minStockpurchasePrice) {
            minStockpurchasePrice = prices[i]
        }
        profit = Math.max(profit, prices[i] - minStockPurchasePrice)
    }
    return profit;
}


var productExceptSelf = function(nums) {
    const n = nums.length;
    const output = new Array(n);

    let productToLeft = 1;
    let productToRight = 1;

    for(let i = 0; i < n; i++) {
        output[i] = productToLeft;
        productToLeft *= nums[i]
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
    intervals = mergeSort(intervals)

    let mergeIntervals = [intervals[0]];

    for(let i = 1; i < intervals.length; i++) {
        let currentInterval = intervals[i];
        let lastMerge = mergeIntervals[mergeIntervals.length - 1]

        if(currentInterval[0] <= lastMerge[1]) {
            lastMerge[1] = Math.max(lastMerge[1], currentInterval[1])
        }else {
            mergeIntervals.push(currentInterval);
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
    let sortedArr = [];

    while(left.length && right.length) {
        if(left[0][0] < right[0][0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}


var combinationSum = function(candidates, target) {
    let temp = [];
    let result = [];

    function recursive(index, target, temp) {
        if(target === 0) {
            result.push([...temp])
            return
        }
        if(target < 0) return 

        for(let i = index; i < candidates.length; i++) {
            temp.push(candidates[i]);
            recursive(i, target - candidates[i], temp);
            temp.pop();
        }
        recursive(0, target, temp);
        return result;
    }
}


var missingnumber = function(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2
    let actualSum = 0;
    if(nums.length === 0) return false;
    for(let i = 0; i < n; i++) {
        actualSum += nums[i]
    }
    const missingNumber = expectedSum - actualSum;
    return missingNumber
}


var findDisappearedNumbers = function(nums) {
    const result = [];
    const numSet = new Set(nums);
    if(nums.length === 0) return "";

    for(let i = 0; i < nums.length; i++) {
        if(!numSet.has(i)) {
            result.push(i)
        }
    }
    return result;
}

var fib = function(n) {
    if(n <= 1) return n;
    else return fib(n - 2) + fib(n - 1);
}

var fib = function(n) {
    let arr = [0,1];
    for(let i = 2; i <= n; i++) {
        arr.push(arr[i - 2] +arr[i - 1])
    }
    return arr[n];
}

var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++
        right--
    }
}


var reverseStr = function(s, k) {
    const strArray = s.split('');
    const n = s.length;

    for(let i = 0; i < n; i += 2*k) {
        let start = i;
        let end = Math.min(i + k-1, n - 1);

        while(start < end) {
            let temp = strArray[start];
            strArray[start++] = strArray[end];
            strArray[end--] = temp
        }
    }
    return strArray.join('');
}

var isAnagram = function(s,t) {
    if(s.length !== t.length) {
        return false;
    }
    let obj1 = {};
    let obj2 = {};

    for(let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[s[i]] = (obj2[t[i]] || 0) + 1;
    }

    for(const key in obj1) {
        if(obj1[key] !== obj2[key])
        return false;
    }
    return true;
}

var groupAnagram = function(strs) {
    let obj = {};
    strs.forEach(str => {
        const sorted = str.split('').sort().join('')
        obj[sorted] ? obj[sorted].push(str) : obj[sorted] = [str]
    })
    return Object.values(obj)
}

var hammingDistance = function(x, y) {
    x = x.toString(2);
    y = y.toString(2);

    if(x.length < y.length) {
        while(x.length !== y.length) {
            x = "0" + x
        }
    }else {
        while(y.length !== x.length) {
            y = "0" + y
        }
    }
    let distance = 0;
    for(let i = 0; i < x.length; i++) {
        if(x[i] !== y[i]) {
            distance++
        }
    }
    return distance
}


var longestPalindrome = function(s) {
    if(!s) return "";

    let longest = "";

    for(let i = 0; i < s.length; i++) {
        let oddPalindrome = expandFromCenter(s, i, i);
        let evenPalindrome = expandFromCenter(s, i - 1, i);

        if(oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }
        if(evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }
    return longest;
}
function expandFromCenter(s, left, right) {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
}


var longestCommonPrefix =function(strs) {
    let output = '';
    for(let i = 0; i < strs[0].length; i++) {
        if(strs.every(str => str[i] === strs[0][i]))output += strs[0][i];
        else break;
    }
    return output;
}


var lengthOflongestSubstring = function(s) {
    if(!s) return 0;
    let end = 0;
    let start = 0;
    let maxlength = 0;
    let uniqueChar = new Set();

    while(end < s.length) {
        if(!uniqueChar.has(s[end])) {
            uniqueChar.add(s[end]);
            end++;
            maxlength = Math.max(maxlength, uniqueChar.size)
        }else {
            uniqueChar.delete(s[start]);
            start++
        }
    }
    return maxlength;
}