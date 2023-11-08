function rotate(nums, k) {
    let size =nums.length;
    
    k = k % size;

    reverse(nums, 0, size -1)
    reverse(nums, 0 , k - 1);
    reverse(nums, k, size -1);

    return nums
}

function reverse(nums, left, right) {
    while(left < right) {
        const temp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = temp;
    }
}


function secondlargest(arr) {
    let largest = Number.NEGATIVE_INFINITY;
   let secondLargest = Number.NEGATIVE_INFINITY;
   
   for(let i = 0; i < arr.length; i++) {
    if(arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    }else if 
        (arr[i] !== largest && arr[i > secondLargest]) {
            secondlargest = arr[i]
        }
   }
}


function removeDuplicates(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if(nums[i] = nums[i + 1]) {
            nums.splice(i + 1, 1);
            i--;
        }
    }
    return nums.length;
}

function removeDuplicateaNew(nums) {
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

var twoSum = function(nums,target) {
    var obj = {};
    for(let i = 0; i < nums.length; i++) {
        var n = nums[i];
        if(obj[target - n] >= 0) {
            return [obj[target - n], i]
        } else obj[n] = i;
    }
}


function maxArea(height) {
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
    return maxArea
}

// greedy algorithm
const maxProfit = function(prices) {
    let minStockPurchasePrice = prices[0] || 0;
    let profit = 0;
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < minStockPurchasePrice) {
            minStockPurchasePrice = prices[i]
        }
        profit = Math.max(profit, prices[i] - minStockPurchasePrice)
    }
    return profit;
}


var productExceptSelf = function(nums) {
    const n = nums.length;
    const output = new Array(n);

    let productToLeft = 1;
    let productToRight =1;

    for(let i = 0; i < n; i++) {
        output[i] = productToLeft;
        productToLeft *= nums[i];
    }

    for(let i = n - 1; i >= 0; i--) {
        output[i] *= productToRight;
        productToRight *= nums[i];
    }
    return output

}

var merge =function(intervals) {
    if(intervals.length <= 1) return 1;

    // intervals.sort((a,b) => a[0] - b[0]);
    intervals = mergeSort(intevals)

    let mergeIntervals = [intervals[0]];

    for(let i = 1; i < intervals.length; i++) {
        let currentInterval = intervals[i];
        let lastMerge = mergeIntervals[mergeIntervals.length - 1];

        if(currentInterval[0] <= lastMerge[1]) {
            lastMerge[1] = Math.max(lastMerge[1], currentInterval[1])
        }else {
            mergeIntervals.push(currentInterval);
        }
    }
    return mergeIntervals;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return mergeArray(left, right);
}

function mergeArray(left, right) {
    let sortedArr = [];

    while(left.length && right.length){
    if(left[0][0] < right[0][0]) {
        sortedArr.push(left.shift())
    } else {
        sortedArr.push(right.shift())
    }
 }
 return [...sortedArr,...left, ...right];
}


var combinationSum = function(candidates, target) {
    let temp =[];
    let result = [];

    function recursive(index, target, temp) {
        if(target === 0){
            result.push([...temp])
            return
        }
        if(target < 0) return

        for(let i = index; i < candidates.length; i++) {
            temp.push(candidates[i]);
            recursive(i, target - candidates[i], temp);
            temp.pop()
        }
        recursive(0, target, temp);
        return result;
    }
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

var findDisappearedNumbers = function(nums) {
    const result = [];
    const numSet = new Set(nums);
    if(nums.length === 0) return '';

    for(let i = 0; i < nums.length; i++) {
        if(!numSet.has(i)){
            result.push(i)
        }
    }
    return result;
}