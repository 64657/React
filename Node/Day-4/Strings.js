var fib = function(n) {
    if(n <= 1) return n;
    else return fib(n - 2) + fib(n - 1);
}

var fib = function(n) {
    let arr = [0, 1];
    for(let  i = 2; i <= n; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[n];
}

var reverseString = function(s) {
    let left =0;
    let right = s.length - 1;
    
    while(left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++
        right--;
    }
}


var reverseStr = function(s, k) {
    const strArray = s.split('');
    const n  = s.length;

    for(let i = 0; i < n; i += 2*k) {
        let start = i;
        let end  =Math.min(i + k -1, n - 1);

        while(start < end) {
            let temp = strArray[start];
            strArray[start++] = strArray[end];
            strArray[end--] = temp
        }
    }
    return strArray.join('')
}

var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    let obj1 = {};
    let obj2 = {};

    for(let i =0; i < s.length; i++) {
        obj1[s[i]] =(obj1[s[i]] || 0) + 1;
        obj2[t[i]] =(obj2[t[i]] || 0) + 1;
    }

    for(const key in obj1){
        if(obj1[key] !== obj2[key])
        return false;
    }

    return true
}

var groupAnagram = function(strs) {
    let obj = {}
    strs.forEach (str => {
        const sorted = str.split('').sort.().join('')
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
        y = "0" + y}
        }
    let distance = 0;
    for(let i = 0; i < x.length; i++){
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
    while(left >=0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
}


var groupAnagrams = function(strs) {
    let obj = {};
    strs.forEach (str => {
        const sorted = str.split('').sort().join('')
        obj[sorted] ? obj[sorted].push(str) : obj[sorted] = [str]
    })
    return Object.values(obj)
}


var longestcommonPrefix = function(strs) {
    let output = '';
    for(let i = 0; i < strs[0].length; i++) {
        if(strs.every(str => str[i] === strs[0][i])) output += strs[0][i];
        else break;
    }
    return output;
} 

var myAtoi = function(s) {
    s = s.trim();
    let isNegative = false;

    if(s[0] === '-') {
        isNegative = true;
        s= s.substring(1)
    }else if (s[0] === '+') {
        s = s.substring(1);
    }

    let result = 0;

    for(let i = 0; i = s.length; i++) {
        const char = s[i];
        if(/\d/.test(char)) {
           result = result * 10 + parseInt(cahr)
        } else {
            break;
        }
    }

    result = isNegative ? -result : result;

    if(result < Math.pow(-2, 31)) {
        return Math.pow(-2, 31);
    } else if(result > Math.pow(2,31) -1) {
        return  Math.pow(2, 31) -1
    }

    return result
}

var lengthOfLongestSubstring = function(s) {
    if(!s) return 0;
    let end = 0;
    let start = 0;
    let maxlength = 0;
    let uniquechar = new Set();

    while(end < s.length) {
        if(!uniquechar.has(s[end])) {
            uniquechar.add(s[end]);
            end++;
            maxlength = Math.max(maxlength, uniquechar.size)
        } else {
            uniquechar.delete(s[start]);
            start++
        }
    }
    return maxlength
}

function loadJson(url) {
    return fetch(url).then((response) => {
        if(response.status === 200) {
            return response.json()
        }else {
            throw new Error (response.status)
        }
    })
}

class user {
    constructor(n) {
        this.name = n
    }
    getName() {
        console.log(this.name);
    }
}
const User = new user("Fasee")