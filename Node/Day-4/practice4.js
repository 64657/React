var groupAnagrams =function(strs) {
    let obj = {};
    strs.forEach(str => {
        const sorted = str.split('').sort().join('')
        obj[sorted] ? obj[sorted].push(str) : obj[sorted]
    })
    return Object.values(obj)
}

var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false
    }
    let obj1 = {};
    let obj2 = {};

    for(let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }
    for(const key in obj1) {
        if(obj1[key] !== obj2[key])
        return false;
    }
    return true
}

function expandFromCenter(s,left, right) {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.slice(left + 1, right)
}

var lengthOfLongestSubstring = function(s) {
    if(!s) return 0;
    let end = 0;
    let start = 0;
    let maxLength = 0;
    let uniqueChar = new Set();

    while(end < s.length) {
        if(!uniqueChar.has(s[end])) {
            uniqueChar.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueChar.size)
        } else {
            uniqueChar.delete(s[start]);
            start++
        }
    }
    return maxlength
}

var longestCommonprefix = function(strs) {
    let output = '';
    for(let i = 0; i < strs[0].length; i++) {
        if(strs.every(str => str[i] === strs[0][i])) output += strs[0][i]
        else break
        if(strs.every(str => str[i] === strs[0][i])) output += strs[0][i]
    }
    return output
}


var twoSum = function(nums, target){
    let obj ={};
    for(let i =0; i < nums.length ; i++) {
        var n = nums[i];
        if(obj[target - n] >= 0) {
            return [obj[target - n], i];
        } else[n] = i;
    }
}


function merge(left, right) {
    let sortedArr = [];
    while(left.length < right.length) {
        if(left[0] > right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
        return [...sortedArr,...left,...right]
    }
}