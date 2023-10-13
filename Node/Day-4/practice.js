function rotate(nums, k) {
    let size = nums.length;

    k = k % size;

    reverse(nums, 0, size - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, size - 1);
}


function reverse(nums, left, right) {
    while (left < right) {
        const temp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = nums[left];
    }
}

function secondLargestNumber(arr) {
    const uniqueArray = Array.from(new Set(arr));
    uniqueArray.sort((a, b) => {
        return b - a;
    });

    if(uniqueArray.length >= 2) {
        return uniqueArray[1];
    } else {
        return -1
    }
}

var removeDuplicate = function(nums) {
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1);
            i--
        }
        return nums.length;
    }
};

var removeDuplicatesNew = function(nums) {
    if(nums.length === 0) {
        return 0;
    }

    let i = 0; {
        for ( let j = 1; j < nums.length; j++) {
            if(nums[i] !== nums[j]) {
                i++;
                nums[i] = nums[j];
            }
        }
    }
    return i + 1;
}

var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let strInd = 0;
    let endInd = 0;
    for(let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = i; j < nums.length; j++) {
            currentSum = currentSum + nums[j]
            if(current > maxSum ) {
                maxSum = currentSum;
                strInd = i;
                endInd = j;
            }
        }
    }
    return {
        sum: maxSum,
        subArray: nums.splice(strInd, endInd + 1);
    }
}


var maxSubArray = function(nums) {
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
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target)
            return [i , j]
        }
    }
}


var twoSumNew = function(nums, target) {
    var obj = {}
    for (let i = 0; i < nums.length; i++){
        var n = nums[i];
        if(obj[target - n] >= 0) {
            return [obj[target - n], i]
        }
    }
}

var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;

    let maxArea = 0;

    while(left < right) {
        const width = right - left;

        const minHeight = Math.min(height[left], height[right]);

        const area = width * minHeight;
        
        maxArea = Math.max(maxArea, area);

        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};

var maxProfit = function(prices) {
    let globalProfit = 0;

    for(let i = 0; i < prices.length; j++) {
        for (let j = i + 1; j < prices.length) {
            const currentProfit = prices[j] - prices[i];
            if(currentProfit > globalProfit){
                globalProfit = currentProfit;
            }
        }
    }
    return globalProfit;
}

var maxProfitNew = function(prices) {
    let minStockPrice = prices[0] || 0;
    let profit = 0;
    for(let i = 1; i < prices.length; i++){
        if(prices[i] < minStockPrice) {
            minStockPrice = prices[i]
        }
        profit = Math.max(profit, prices[i] - minStockPrice)
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

    for( i = n - 1; i >=0; i--) {
        output[i] *= productToRight;
        productToRight *= nums[i];
    }

    return output;
}


var merge = function(intervals) {
    if(intervals.length <= 1) return intervals;

    intervals.sort((a,b) => a[0] - b[0]);
    let mergeIntervals = [intervals[0]];

    for(let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        let lastMerge = mergeIntervals[mergeIntervals.length - 1];

        if(currentInterval[0] <= lastMerge[1]) {
            lastMerge[1] = Math.max(lastMerge[1], currentInterval[1])
        }else {
            mergeIntervals.push(currentInterval);
        }
    }
    return mergeIntervals
}

var missingNumber = function(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
    if(nums.length === 0) return false;
    for(let i = 0; i < nums.length; i++) {
        actualSum += nums[i]
    }

    const missingNumber = expectedSum - actualSum;
    return missingNumber;
}


var findDisappearedNumbers =function(nums) {
    const result = [];
    const numSet = new Set(nums);
    if(nums.length === 0) return '';

    for(let i = 0; i < nums.length; i++) {
        if(!numSet.has(i)) {
            result.push(i)
        }
    }
    return result;
}


var combinationSum = function(candidates, target) {
    let temp =[];
    let result = [];

    function backtracking(index, target, temp) {
        if(target === 0) {
            result.push([...temp])
            return
        }

        if(target < 0) return;

        for( let i = index; i < candidates.length; i++) {
            temp.push(candidates[i]);
            backtracking(i, target - candidates[i], temp);
            temp.pop();
        }
    }
    backtracking(0, target, temp);
    return result;
}


var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g).tolowerCase()
    return s < 0 ? false : s === s.split("").reverse.join('')
}

var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        let temp = s[left];
        s[left++] = s[right];
        s[right--] = temp;
    }
}


var isAnagram = function(s,t) {
    s = s.split(' ').sort().join(' ');
    t = t.split(' ').sort().join(' ');
    return s === t;
}


var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }

    let obj1 = {};
    let obj2 = {};

    for(let i = 0; i < s.length; i++){
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }

    for(const key in obj1) {
        if(obj1[key] !== obj2[key])
        return false;
    }
    return true;
}

var hammingDistance = function(x, y) {
    x = x.toString(2);
    y = y.toString(2);

    if(x.length < y.length) {
        while(x.length !== y.length) x = "0" + x
    }else {
        while(x.length !== y.length) y = "0" + y
    }

    let distance = 0;
    for(let i = 0; i < x.length; i++) {
        if(x[i] !== y[i]) {
            distance++
        }
    }
    return distance;
}


var longestPalindrome = function(s) {
    if (!s) return "";

    let longest = '';

    for (let i = 0; i < s.length; i++) {
        let oddPalindrome = expandFromCenter(s, i, i);
        let evenPalindrome = expandFromCenter(s, i - 1, i);

        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }

        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }
    return longest;
};

function expandFromCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right); // Adjust substring to include the palindrome
}


var groupAnagrams = function(strs) {
    let obj = {};
    strs.forEach (str => {
        const sorted = str.split('').sort().join('')
        obj[sorted] ? obj[sorted].push(str) : obj[sorted] = [str]
    })
    return Object.values(obj)
}

var reverseStr = function(s, k) {
    const strArray = s.split('');
    const n = s.length;

    for(let i = 0; i < n; i += 2*k) {
        let start = i;
        let end = Math.min(i + k - 1, n - 1);

        while (start < end) {
            let temp = strArray[start];
            strArray[start++] = strArray[end];
            strArray[end++] = temp; 
        }
    }
    return strArray.join('')
}


var longestCommonPrefix = function(strs) {
    let output = "";
    for(let i = 0; i < strs[0].length; i++) {
        if(strs.every(str => str[i] === strs[0][i]))
        output += strs[0][i];
    else break
    }
    return output;
}


var lengthOfLongestSubstring = function(s) {
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
        } else {
            uniqueChar.delete(s[start]);
            start++
        }
    }
    return maxlength;
}

var fib = function(n) {
    if(n <= 1) return n;
    else return fib(n - 2) + fib(n - 1)
}

var fib = function(n) {
    let arr = [0, 1];
    for(let i = 2; i <= n; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];
}

var tarilingZeroes = function(n) {
    let count = 0;

    while (n >= 5) {
        count += Math.floor(n / 5);
        n = Math.floor(n /5);
    }
    return count;
}

var summaryRanges = function(nums) {
    if(numslength == 0) {
        return [];
    }

    const result = [];
    let startNum = nums[0];
    let endNum = nums[0];

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === endNum + 1){
            endNum = nums[i]
        } else {
            result.push(formatRange(startNum, endNum));
            startNum = endNum = nums[i]
        }
    }
    result.push(formatRange(startNum, endNum));
    return result;
}

var formatRange = function(start , end) {
  if(start === end) {
    return start.toString();
  } else {
    return start + '->' + end;
  }
}

var isPalindrome = function(x) {
    if(x < 0) return false;

    x= String(x).replace(/[^a-zA-Z0-9]/i, "").toLowerCase();
    const len = x.length;

    if(len <= 1) return true;
    if(x[0] !== x[len - 1])return false;
        return isPalindrome(x.slice(1, -1));
}


var subsets = function(nums) {
    let temp = [];
    let result = [];
    let recursive =function(nums, i) {
        if(i === nums.length) {
            return result.push([...temp])
        };
        temp.push(nums[i]);
        recursive(nums, i + 1);
        temp.pop();
        recursive(nums, i + 1);
    }
    recursive(nums, 0);
    return result;
}

var permute = function(nums) {
    let temp = [];
    let result = [];
    let recursive = function(nums, i) {
        if(i === nums.length) {
            result.push([...temp])
            return
        };
        for(let j = 0; j < nums.length; j++) {
            if(!temp.includes(num[j])){
                temp.push(nums[j]);
                recursive(nums, i + 1);
                temp.pop();
            }
        }
    }
    recursive(nums, 0);
    return result;
}


var generateParenthesis = function(n) {
    let resullt = [];

    function backtrack(curr, open, close) {
        if(current.length === 2 * n) {
            result.push(curr);
            return;
        }
        if(open < n) {
            backtrack(curr + '(', open + 1, close);
        }
    
        if(close < open) {
            backtrack(curr +')'. open , close + 1)
        }
        backtrack('', 0, 0);
        return result;
    }

   
}