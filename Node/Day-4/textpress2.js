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