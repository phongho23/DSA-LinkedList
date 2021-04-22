class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(value) {
        this.head = new _Node(value, this.head);
    }

    insertLast(value) {
        if (this.head === null) {
            this.insertFirst(value);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(value, null);
        }
    }

    insertBefore(value, insertion) {
        let currNode = this.head;
        let tempNode = this.head;
        while (currNode.value !== insertion) {
          tempNode = currNode;
          currNode = currNode.next;
        }
        tempNode.next = new _Node(value, currNode);
      }

      insertAt(value, index) {
        let currIndex = 0;
        let currNode = this.head;
        while (currIndex !== (index - 1)) {
          currNode = currNode.next;
          currIndex++;
        }
        currNode.next = new _Node(value, currNode.next.next);
      }

      insertAfter(value, insertion) {
        let currNode = this.find(insertion);
        let afterNode = currNode.next;
        currNode.next = new _Node(value, afterNode);
      }

    find(item) { 
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    remove(item){ 
        if (!this.head) {
            return null;

        }
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

function main() {
    let SLL = new LinkedList();
    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');
    SLL.remove('Husker');
    SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('Hotdog', 'Helo');
    SLL.insertAt('Kat', 3);
    SLL.remove('tauhida')
  }
  
  main();