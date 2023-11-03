// // function elevatorTime(N, A, B) {
// //     // Calculate the time for the elevator to reach Alice's floor
// //     let timeToAlice = A * 10;
  
// //     // Calculate the time for the elevator to reach floor 0
// //     let timeToFloor0 = (N - A) * 10;
  
// //     // Calculate the total time it takes for Alice to reach the 'B-th' floor
// //     let totalTime = timeToAlice + (B < A ? (A - B) * 10 : (B - A) * 10);
  
// //     return totalTime;
// //   }
  
// //   // Example usage
// //   const N = 7;
// //   const A = 6;
// //   const B = 10;
// //   const result = elevatorTime(N, A, B);
// //   console.log(result); // Output: 70



// // function findGameWinner(N,M) {
// //       if(N % M === 0) {
// //         return "BOB"
// //       } else {
// //         return "ALICE"
// //       }
// // }
// // const N1 = 6;
// // const M1 = 4;
// // const winner1 = findGameWinner(N1, M1);
// // console.log(winner1);




// function makeStringEqual(N, S, T) {
//   if (N !== T.length) {
//     return 0; // If the lengths are different, it's impossible to make them equal.
//   }

//   let operations = 0;
//   let i = 0;

//   while (i < N) {
//     if (S[i] === T[i]) {
//       i++; // Move to the next character.
//     } else {
//       // We have a mismatch, so we need to perform an operation.
//       operations++;
//       if (i + 1 < N && S[i] !== S[i + 1]) {
//         // Replace S[i] and S[i+1] with either '0' or '1'.
//         S = S.slice(0, i) + (S[i] === '0' ? '1' : '0') + S.slice(i + 2);
//       } else {
//         // If S[i] and S[i+1] are the same, we can't proceed.
//         break;
//       }
//     }
//   }

//   return S === T ? 1 : 0; // If S is now equal to T, return 1; otherwise, return 0.
// }

// // Example usage
// const N1 = 8;
// const S1 = "11100010";
// const T1 = "110000";
// const result1 = makeStringEqual(N1, S1, T1);
// console.log(result1); // Output: 1

// const N2 = 4;
// const S2 = "1010";
// const T2 = "1000";
// const result2 = makeStringEqual(N2, S2, T2);
// console.log(result2); // Output: 0



// var dailytemperatures = function(temperatures) {
//   let n = temperatures.length;
//   let stack = [];
//   let answer = new Array(n).fill(0)

//   for(let i = 0; i < n; i++) {
//     const currentTemp = temperatures[i];
//     const currentDay = i;

//     while(stack.length > 0 && temperatures[getTopOfStack(stack)] < currentTemp){
//       answer[getTopOfStack(stack)] = currentday - getTopOfStack(stack);
//       stack.pop()
//     }
//     stack.push(currentDay)
//   }
//   return answer;
// }
// var getTopOfStack = function(stack) {
//   return stack[stack.length - 1]
// }


// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }
// var isPalindrome = function(head) {
//     let string1 = (string2 = "");
//     let node  = head;

//     while(node !== null) {
//         string1 = `${string1}${node.val}`;
//         string2 = `${node.val}${string2}`;
//         node = node.next;
//     }
//     return string1 === string2
// }

// function arrayToLinkedlist(arr) {
//     let dummy = new ListNode();
//     let current = dummy

//     for(const value of arr) {
//         current.next  = new ListNode(value);
//         current = current.next
//     }
//     return dummy.next
// }


// const inputArray = [1,2,2,1];
// const linkedList = arrayToLinkedlist(inputArray)

// console.log(isPalindrome(linkedList))

// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }

// var reverseList = function(head) {
//   let prev = null;
//   let current = head;

//   while(current !== null) {
//       let nextNode = current.next;
//       current.next = prev;
//       prev = current;
//       current = nextNode;
//   }
//   return prev;
// }

// function arrayToList(arr) {
//   let dummy = new ListNode();
//   let current = dummy;

//   for(const val of arr) {
//       current.next = new ListNode(val);
//       current = current.next
//   }
//   return dummy.next;
// }
// const inArray = [1,2,3,4,5];
// const arrayConvert = arrayToList(inArray);
// // console.log(reverseList(arrayConvert))
// const reversedlist = reverseList(arrayConvert);

// const reversedArray = [];
// let current = reversedlist;
// while(current) {
//   reversedArray.push(current.val);
//   current = current.next;
// }
// console.log(reversedArray);

// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }

// var deleteNode = function(node) {
//   if (node && node.next) {
//     node.val = node.next.val;
//     node.next = node.next.next;
//   }
// }

// var arrToList = function(arr) {
//       let dummy = new ListNode();
//       let current = dummy;

//       for(const value of arr) {
//         current.next = new ListNode(value);
//         current = current.next;
//       }
//       return dummy.next
// }
// // const arr = [4,5,1,9];
// // const linked = arrToList(arr);

// // let nodeToDelete = linked;

// // console.log(deleteNode(linked))


// const arr = [4, 5, 1, 9];
// const linked = arrToList(arr);

// // // Let's say you want to delete the node with value 5.
// // let nodeToDelete = linked;
// // let prevNode = null; 

// // while (nodeToDelete && nodeToDelete.val !== 5) {
// //   prevNode = nodeToDelete;
// //   nodeToDelete = nodeToDelete.next;
// // }
// // if(prevNode) {
// //   prevNode.next = nodeToDelete.next;
// // } else {
// //   linked = nodeToDelete.next
// // }

// // deleteNode(nodeToDelete);

// // Print the values of the modified linked list
// const modifiedArray = [];
// let current = linked;
// while (current) {
//   modifiedArray.push(current.val);
//   current = current.next;
// }

// console.log(modifiedArray); // Output will be [4, 1, 9]
// // 

// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val);
//   this.next = (next === undefined ? null : next);
// }

// var deleteNode = function(node) {
//   if (node && node.next) {
//     node.val = node.next.val;
//     node.next = node.next.next;
//   }
// }

// var arrToList = function(arr) {
//   let dummy = new ListNode();
//   let current = dummy;

//   for (const value of arr) {
//     current.next = new ListNode(value);
//     current = current.next;
//   }
//   return dummy.next;
// }

// const arr = [4, 5, 1, 9];
// const linked = arrToList(arr);

// // Let's say you want to delete the node with value 5.
// let nodeToDelete = linked;
// while (nodeToDelete && nodeToDelete.val !== 5) {
//   nodeToDelete = nodeToDelete.next;
// }

// deleteNode(nodeToDelete);

// // Print the values of the modified linked list
// const modifiedArray = [];
// let current = linked;
// while (current) {
//   modifiedArray.push(current.val);
//   current = current.next;
// }

// console.log(modifiedArray);



// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }
// function arrToLink(arr) {
//   let dummy = new ListNode();
//   let current = dummy;
//   for(const value of arr) {
//       current.next = new ListNode(value);
//       current = current.next;
//   }
//   return dummy.next
// }
// var removeNthFromEnd = function(head, n) {
//   let dummy = new ListNode(0);
//   dummy.next = head;
//   let slow = head;
//   let fast = head;

//   for(let i = 0; i < n; i++) {
//       fast = fast.next;
//   }

//   // if(!fast) {
//   //     return head.next;
//   // }

//   while(fast !== null) {
//       fast = fast.next;
//       slow = slow.next;
//   }
//    slow.next = slow.next.next;

//   return dummy.next;
// }
// const n = 2;
// const inputArray = [1,2,3,4,5];
// const linked = arrToLink(inputArray);
// const result = removeNthFromEnd(linked,n);
// // console.log(result)

// const modifiedArray = [];
// let current = result;
// while (current) {
//   modifiedArray.push(current.val);
//   current = current.next;
// }

// console.log(modifiedArray);


// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }
// function arrToLink(arr) {
//   let dummy = new ListNode();
//   let current = dummmy;
//   for(const value of arr) {
//       current.next = new ListNode(value);
//       current = current.next;
//   }
//   return dummy.next
// }
// var removeNthFromEnd = function(head, n) {
//   let slow = head;
//   let fast = head;

//   for(let i = 0; i < n; i++) {
//       fast = fast.next;
//   }

//   if(!fast) {
//       return head.next;
//   }

//   while(fast.next) {
//       fast = fast.head;
//       slow = slow.next;
//   }
//   return slow.next = slow.next.next;

//   return head;
// }
// const inputArray = [1,2,3,4,5];
// const linked = arrToLink(inputArray);
// const result = removeNthFromEnd(linked,n);
// console.log(result)



// var ListNode = function(val, next) {
//   this.val = (val === undefined ?  0 : val );
//   this.next = (next === undefined ? null : next);
// }
// var arrToLinky = function(arr) {
//   let dummy = new ListNode();
//   let current = dummy;

//   for(const val of arr) {
//       current.next = new ListNode(val);
//       current = current.next;
//   }
//   return dummy.next;
// }

// var addTwoNumbers = function(l1, l2) {
//   let dummy = new ListNode(0);
//   let current = dummy;
//   let carry = 0;

//   while(l1 !== null || l2 !== null || carry > 0) {
//       var val1 = l1 ? l1.val : 0;
//       var val2 = l2 ? l2.val : 0;

//       var sum = val1 + val2 + carry;
//       carry = Math.floor(sum / 10);
//       sum %= 10;

//       current.next = new ListNode(sum);
//       current = current.next;

//       if(l1) l1 = l1.next;
//       if(l2) l2 = l2.next;
//   }
//   return dummy.next
// }

// let inputArray1 = [2,4,3];
// let inputArray2 = [5,4,6];

// let linked1 = arrToLinky(inputArray1);
// let linked2 = arrToLinky(inputArray2);

// let res1 = addTwoNumbers(linked1,linked2);

// let modifiedArr = [];
// let current1 = res1;
// while(current1) {
//   modifiedArr.push(current1.val)
//   current1 = current1.next;
// }
// console.log(modifiedArr)



var calculate = function(s) {
  const stack = [];
  let result = 0;
  let num = 0;
  let sign = 1;

  for(let i = 0; i < s.length; i++) {
      const char = s[i];

      if(char >= "0" && char <= "9") {
          num = num + parseInt(char);
      } else if(char === "+") {
          result += sign * num;
          num = 0;
          sign = 1;
      } else if(char === "-") {
          result += sign * num;
          num = 0;
          sign = -1;
      } else if(char === "("){
          stack.push(result);
          stack.push(sign);
          result = 0;
          sign = 1;
      } else if(char === ")") {
          result += sign * num;
          num = 0;
          result *= stack.pop();
          result += stack.pop();
      }
  }
  result += sign * num;
  return result
}
const sum ="(1+(4+5+2)-3+(6+8))"
console.log(calculate(sum))


var backSpaceCompare = function(s,t) {
  function processString(s) {
    const stack = [];
    for(const char of s) {
      if(char === "#") {
        if(stack.length > 0) {
          stack.pop();
        }
      }else {
        stack.push(char);
      }
    }
    return stack.join("")
  }
  return processString(s) === processString(t)
}

let s = "ab#c";
let t = "ad#c";
console.log(backSpaceCompare(s,t));

var decodeString = function(s) {
  const stack  = [];
  let currentNum =0;
  let currentStr = "";

  for(let char of s) {
      if(char === "[") {
          stack.push(currentStr);
          stack.push(currentNum);
          currentStr = "";
          currentNum = 0;
      }else if(char === "]") {
          let num = stack.pop();
          let prevStr = stack.pop();
          currentStr = prevStr + currentStr.repeat(num)
      } else if(/[0-9]/.test(char)) {
          currentNum = currentNum * 10 + parseInt(char)
      } else {
          currentStr += char;
      }
  }
  return currentStr;
}
const string = "3[a]2[bc]";
console.log(decodeString(string.join))