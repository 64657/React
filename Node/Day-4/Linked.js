class Node {
    constructor(data) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode
    }

    addlast(data) {
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            return;
        }

        let current =this.head;
        while(current.next) {
            current = current.next
        }
        current.next = newNode
    }

    size() {
        let count = 0;
        let current = this.head;
        while(current) {
            count++
            current = current.next;
        }
        return count
    }

    addAt(index, data) {
        if(index < 0 || index > this.size()){
            console.error("Invalid Index");
            return
        }

        const newNode = new Node(data);
        if(index === 0) {
            newNode.next = this.head;
            this.head = newNode
            return
        }

        let current = this.head;
        for(let i = 0; i < index - 1; i++) {
            current = current.next
        }
        newNode.next = current.next
        current = newNode
    }

    removeTop() {
        if(!this.head) {
            return;
        }

        this.head  =this.head.next
    }

    removeLast() {
        if(!this.head) {
            return;
        }
        let current = this.head;
        while(current.next.next) {
            current = current.next; 
        }
        current.next = null;
    }

    removeAt(index){
        if(index < 0 || index > this.size()) {
            console.log("invalid Index");
            return
        }
        if(index === 0) {
            this.head = this.head.next
        }

        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.next
        }
        if(current.next){
            current.next = current.next.next;
        }
    }

    print() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next
        }
    }
}

var isPalindrome = function(head) {
    let string1 =(string2 = "")
    let node = head;
    while(node !== null) {
        string1 = `${string1}${node.val}`;
        string2 = `${node.val}${string2}`
        node = node.next
    }
    return string1 === string2
}

var reverseList = function(head) {
    let prev = null;
    let current = head;

    while(current !== null) {
        nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;
}

var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
}

var removeNthFromEnd = function(head, n) {
    let slow = head;
    let fast = head;

    for(let i = 0; i < n; i++) {
        fast = fast.next;
    }

    if(!fast){
        return head.next;
    }

    while(fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next
}

var addTwoNumbers = function(l1, l2) {
    var dummy = new ListNode(0);
    var current = dummy
    var carry = 0;

    while(l1 !== null || l2!== null || carry > 0) {
        var val1 = l1? l1.val : 0
        var val2 = l2? l2.val : 0

        var sum = val1 + val2 + carry
        carry = Math.floor(sum/10)
        sum %= 10

        current.next = new ListNode(sum);
        current = current.next;
    }
    return dummy.next
}

var addTwoNumbers = function(l1,l2) {
    var dummy = new ListNode(0);
    var current =dummy;
    var carry  = 0;

    while (l1 !== null ||l2 !== null || carry > 0) {
          var val1 = l1? l1.val:0;
          var val2 = l2? l2.val:0;

          var sum = val1 + val2 + carry
          carry = Matrh.floor(sum/10);
          sum %= 10;

          current.next = new ListNode(sum);
          current = current.next;

          if(l1) l1 = l1.next;
          if(l2) l2 = l2.next;
    }
    return dummy.next
}

var removeNthfromEnd = function(head, n) {
    let slow = head;
    let fast = head;

    for(let i = 0; i < n;i++) {
        fast = fast.next;
    }
    if(!fast) {
        return head.next
    }
    while(fast.next) {
        fast= fast.next;
        slow= slow.next;
    }
    slow.next = slow.next.next;
    return head;
}
