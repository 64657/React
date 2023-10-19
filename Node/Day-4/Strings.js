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