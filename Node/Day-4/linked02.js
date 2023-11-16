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
            current = current.next
        }
        current.next = newNode;
    }

    size() {
        let count = 0;
        let current = this.head;
        while(current){
            count++;
            current = current.next
        }
        return count;
    }

    addAt(index,data) {
        if(index < 0 || index > this.size()) {
            console.log("Invalid Index");
            return
        }

        const newNode = new Node;
        if(index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return
        }

        let current = this.head;
        for(let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode
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
            console.error("Invalid Index")
            return
        }
        if(index === 0) {
            this.head =this.head.next;
            return;
        }
        let current  = this.head;
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
const linkedList = new Linkedlist();



function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next  === undefined ? null : next)
}
var isPalindrome = function(head) {
    let string1 = (string2 = "");
    let node = head;

    while (node !==null) {
        string1 = `${string1}${node.val}`;
        string2 = `${node.val}${string2}`;
        node = node.next;
    }
    return string1 === string2;
}
function arrayToLinkedlist(arr) {
    let dummy = new ListNode();
    let  current = dummy;

    for(const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}



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
        current = nextNode
    }
    return prev
}
function arrToList(arr) {
    let dummy = new ListNode();
    let current = dummy;

    for(const val of arr) {
        current.next = new ListNode(val);
        current = current.next
    }
    return dummy.next
}

const inArray =[1,2,3,4,5];
const arrayConvert = arrayToList(inArray);
const reversedList = reverseList(arrayConvert);

const reversedArray = [];
while(current) {
    reversedArray.push(current.val);
    current = current.next;
}
console.log(reversedArray)