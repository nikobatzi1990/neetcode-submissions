class ListNode {
    val: any;
    prev: ListNode | null;
    next: ListNode | null;

    constructor(val) {
        this.val = val;
        this.prev = null
        this.next = null;
    }
}

class MyLinkedList {
    head: ListNode;
    tail: ListNode;

    constructor() {
        this.head = new ListNode(-1);
        this.tail = new ListNode(-1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let curr = this.head.next;
        let i = 0;
        while (curr) {
            if (i === index && curr !== this.tail) {
                return curr.val;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        let newHead = new ListNode(val);
        newHead.prev = this.head;
        newHead.next = this.head.next;
        this.head.next.prev = newHead;
        this.head.next = newHead;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        let newTail = new ListNode(val);
        newTail.next = this.tail;
        newTail.prev = this.tail.prev;
        this.tail.prev.next = newTail;
        this.tail.prev = newTail;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        let curr = this.head.next;
        let i = 0;
        while (curr) {
            if (i === index) {
                let newNode = new ListNode(val);
                const next = curr;
                const prev = curr.prev;
                prev.next = newNode;
                next.prev = newNode;
                newNode.next = next;
                newNode.prev = prev;
                return;
            }
            curr = curr.next;
            i++;
        }
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {
        let curr = this.head.next;
        let i = 0;
        while (curr && curr !== this.tail) {
            if (i === index) {
                const prev = curr.prev;
                const next = curr.next;
                prev.next = next;
                next.prev = prev;
                return;
            }
            curr = curr.next;
            i++;
        }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
