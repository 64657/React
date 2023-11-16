class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
  }
  
  class Linkedlist {
    constructor() {
        this.head = null;
    }
  
    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
  
    addLast(data) {
        const newNode = new Node(data);
  
        if(!this.head) {
            this.head = newNode;
            return;
        }
  
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next  =newNode
    }
  
    size() {
        let count = 0;
        let current =this.head;
        while(current) {
            count++;
            current = current.next;
        }
        return count;
    }
  
    addAt(index, data) {
        if(index < 0 || index > this.size()) {
            console.error("Invalid Index");
            return;
        }
  
        const newNode = new Node(data);
        if(index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
  
        let current = this.head;
        for(let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
    }
  
    removeTop() {
        if(!this.head) {
            return;
        }
        this.head = this.head.next
    }
  
    removeLast() {
        if(!this.head) {
            return;
        }
  
        let current = this.head;
        while(current.next.next) {
            current = current.next
        }
        current.next = null;
    }
  
    removeAt(index) {
        if(index < 0 || index > this.size()) {
            console.error("Invalid Index");
            return;
        }
        if(index === 0) {
            this.head = this.head.next;
            return;
        }
  
        let current = this.head;
        for(let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        if(current.next) {
            current.next = current.next.next;
        }
    }
  
    print() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
  }
  
  const linkedlist = new Linkedlist();
  
  linkedlist.addFirst(5);
  linkedlist.addFirst(3);
  linkedlist.addFirst(8);
  linkedlist.addLast(6);
  linkedlist.print()
  console.log("size = " + linkedlist.size());



  
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
var isPalindrome = function(head) {
    let string1 = (string2 = "");
    let node  = head;

    while(node !== null) {
        string1 = `${string1}${node.val}`;
        string2 = `${node.val}${string2}`;
        node = node.next;
    }
    return string1 === string2
}

function arrayToLinkedlist(arr) {
    let dummy = new ListNode();
    let current = dummy

    for(const value of arr) {
        current.next  = new ListNode(value);
        current = current.next
    }
    return dummy.next
}


const inputArray = [1,2,2,1];
const linkedList = arrayToLinkedlist(inputArray)

console.log(isPalindrome(linkedList))


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var reverseList = function(head) {
    let prev = null;
    let current = head;

    while(current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;
}

function arrayToList(arr) {
    let dummy = new ListNode();
    let current = dummy;

    for(const val in arr) {
        current.next = new ListNode(val);
        current = current.next
    }
    return dummy.next;
}
const inArray = [1,2,3,4,5];
const arrayConvert = arrayToList(inArray);
// console.log(reverseList(arrayConvert))
const reversedlist = reverseList(arrayConvert);

const reversedArray = [];
let current = reversedlist;
while(current) {
    reversedArray.push(current.val);
    current = current.next;
}
console.log(reversedArray);


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var deleteNode = function(node) {
    if (node && node.next) {
      node.val = node.next.val;
      node.next = node.next.next;
    }
  }

const arr = [4,5,1,9]
let linked = deleteNode(arr);

let nodeToDelete = linked;
let prevNode = null;
while( nodeToDelete && nodeToDelete.val !== 5 ) {
    prevNode = nodeToDelete;
    nodeToDelete = nodeToDelete.next;
}
if(prevNode) {
    prevNode.next = nodeToDelete.next;
} else {
    linked = nodeToDelete.next;
}

const modifiedArray = [];
let currenti = linked;
while (currenti) {
    modifiedArray.push(currenti.val);
    current = current.next;
}
console.log(modifiedArray)



function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
function arrToLink(arr) {
    let dummy = new ListNode();
    let current = dummmy;
    for(const value of arr) {
        current.next = new ListNode(value);
        current = current.next;
    }
    return dummy.next
}
var removeNthFromEnd = function(head, n) {
    let slow = head;
    let fast = head;

    for(let i = 0; i < n; i++) {
        fast = fast.next;
    }

    if(!fast) {
        return head.next;
    }

    while(fast.next) {
        fast = fast.head;
        slow = slow.next;
    }
    return slow.next = slow.next.next;

    return head;
}
const inputArray = [1,2,3,4,5];
const linked = arrToLink(inputArray);
const result = removeNthFromEnd(linked,n);
console.log(result)



var ListNode = function(val, next) {
    this.val = (val === undefined ?  0 : val );
    this.next = (next === undefined ? null : next);
}
var arrToLinky = function(arr) {
    let dummy = new ListNode();
    let current = dummy;

    for(const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while(l1 !== null || l2 !== null || carry > 0) {
        var val1 = l1 ? l1.val : 0;
        var val2 = l2 ? l2.val : 0;

        var sum = l1 + l2 + carry;
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

let modifiedArr = [];
let current1 = res1;
while(current1) {
    modifiedArr.push(current1.val)
    current1 = current1.next;
}
console.log(modifiedArr)