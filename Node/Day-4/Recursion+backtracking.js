var fib = function(n) {
    if(n <= 1) {
        return n;
    } else {
        return fib(n -2) + fib( n - 1)
    }
}

var fib = function(n) {
    let arr = [0, 1];
    for(let i = 2; i <= n; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[n]
}

var trailingZeroes = function(n) {
    let count = 0;

    while( n >= 5) {
        count += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }

    return count;
}


var summaryRanges = function(nums) {
    if(nums.length === 0) {
        return [];
    }
    const result = [];
    let startNum = nums[0];
    let endNum = nums[0];

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === endNum + 1) {
            endNum =nums[i];
        }
         else {
            result.push(formatRange(startNum, endNum));
            startNum = endNum = nums[i]
         }
    }
    result.push(formatRange(startNum, endNum));
    return result;
}

var formatRange = function(start, end) {
    if(start === end) {
        return start.toString();
    } else {
        return start + '->' + end;
    }
}

var summaryRanges = function(nums) {
    if(nums.length === 0) {
        return [];
    }
    const result = [];
    let startNum = nums[0];
    let endNum = nums[0];

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === endNum + 1) {
            endNum = nums[i];
        } else {
            result.push(formatRange(startNum, endNum));
            startNum = endNum = nums[i]
        }
    }
    result.push(formatRange(startNum, endNum));
    return result
}
var formatRange = function (start, end) {
    if(start === end) {
        return start.toString();
    } else {
        return start + '->' + end;
    }
}


var isPalindrome = function(x) {
    if( x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    const strX = x.toString();

    const isPalindromeHelper =(str) => {
        if(str.length <= 1) {
            return true;
        }
        if(str[0] === str[str.length - 1]) {
            return isPalindromeHelper(str.slice(1, str.length - 1));
        }
        return false
    }
}
return isPalindromeHelper(strX);



var subSets = function(nums){
    let temp = [];
    let result = [];
    let recursive = function(nums, i) {
        if(i === nums.length) {
            result.push([...temp])
            return 
        };
        temp.push(nums[i]);
        recursive(nums, i + 1);
        temp.pop();
        recursive(nums, i + 1);
    }
    recursive(nums, 0);
    return result
}

var permute = function(nums) {
    let temp = [];
    let result = [];
    let recursive = function(nums, i) {
        if(i === nums.length){ 
            result.push([...temp])
            return;
        }
        for(let j = 0; j < nums.length; j++) {
            if(!temp.includes(nums[j])) {
                temp.push(nums[j]);
                recursive(nums, i + 1);
                temp.pop()
            }
        }
    }
    recursive(nums, 0);
    return result
}


var generateParanthesis = function(n) {
    const result = [];
    const generate = function(current, open, close) {
        if(current.length === 2*n) {
            result.push(current);
            return;
        }
        if(open < n) {
            generate(current + '(', open + 1, close);
        }
        if(close < open) {
            generate(current + ')', open, close + 1)
        }
    }
    generate('',0,0);
    return result
}


var nextPermutation = function(nums) {
    let i = nums.length - 2

    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--
    }
    if(i >= 0) {
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
}


var nextPermutation = function(nums) {
    let i = nums.length - 2;

    // Find the first pair (i, i-1) where nums[i] > nums[i-1]
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        let j = nums.length - 1;

        // Find the rightmost element greater than nums[i]
        while (nums[j] <= nums[i]) {
            j--;
        }

        // Swap nums[i] and nums[j]
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Reverse the subarray to the right of i
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};
