function reverseString(input) {
    let reversed ="";

    for(let i = input.length - 1; i >= 0; i--) {
        reversed +=input[i];
    }
    return reversed;
}
const inputString ="codecode";

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
// const result = isPrime(inputNumber);
console.log(result)




const inputArray = [54, 546, 548, 60]
function findMaxAndMin(arr) {
    if(arr.length === 0) {
        return 'Array is empty'
    }
    let max = arr[0];
    let min = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }
    return `${max} ${min}`;
}
// const result = findMaxAndMin(inputArray)
console.log(result)




const inputNumber = 988;
function reverseNumber(n) {
    const reversedStr = n.toString().split("").reverse().join("").replace(/^0+/, '');
    const reversedNumber =  parseInt(reversedStr, 10);
    return reverseNumber;
}
// const result = reversedNumber(inputNumber)
console.log(result)


var sortArray = function(nums) {
    return quickSort(nums) 
}
function pivot (arr ,start = 0, end = arr.length - 1) {
    function swap(array, i, j){
        let temp =array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let pivot = arr[start];
    swapIdx = start;
    for(let i = start + 1; i < arr.length; i++)  {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i)
        }
        swap(arr, start, swapIdx);
        return swapIdx;
    }
}
function quickSort(arr, start = 0, end = arr.length - 1) {
    if(left < right) {
        const pivotIndex = pivot(arr, start, end)
        quickSort(arr, start, pivotIndex - 1)
        quickSort(arr, pivotIndex+1, end)
    }
}



var maximum_of_minimum = function(nums, k) {
    if(nums.length === 0 || k <= 0) {
        return "";
    }
    const result = [];
    for(let i = 0; i <= nums.length - k; i++) {
        const subarray = nums.slice(i, i + k);
        const min = Math.min(...subarray);
        result.push(min);
    }
    const maxOfMins = Math.max(...result);
    return maxOfMins;
}

function allocateCandies(ratings) {
    if(ratings.length == 0) {
        return 0;
    }
    const n = ratings.length;
    const candies = new Array(n).fill(1);
    for(let i = 1; i < n; i++){
        if(ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }
    for(let i = n - 2; i >= 0; i--) {
        if(ratings[i] > ratings[i + 1]) {
            candies[i] = candies[i + 1] + 1
        }
    }
    let totalCandies = candies.reduce((sum , val) => sum + val, 0);
    return totalCandies;
}