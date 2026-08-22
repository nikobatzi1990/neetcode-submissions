class ListNode {
    value: number;
    next: ListNode | null;
    prev: ListNode | null;

    constructor (value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDeque {
    head: ListNode;
    tail: ListNode;
    constructor() {
        const dummy = new ListNode(-1);
        this.head = dummy;
        this.tail = dummy;
    }

    /**
     * @return {boolean}
     */
    isEmpty(): boolean {
        return this.head === this.tail;
    }

    /**
     * @param {number} value
     */
    append(value: number): void {
        const newNode = new ListNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value: number): void {
        const newNode = new ListNode(value);
        newNode.next = this.head.next;
        newNode.prev = this.head;
        if (this.head.next) {
            this.head.next.prev = newNode;
        } else {
            this.tail = newNode;
        }
        this.head.next = newNode;
    }

    /**
     * @return {number}
     */
    pop(): number {
        if (this.isEmpty()) {
            return -1;
        }
        const removed = this.tail;
        this.tail = this.tail.prev!;
        this.tail.next = null;
        return removed.value;
    }

    /**
     * @return {number}
     */
    popleft(): number {
        if (this.isEmpty()) {
            return -1;
        }
        const removed = this.head.next!;
        this.head.next = removed.next;
        if (this.head.next) {
            this.head.next.prev = this.head;
        } else {
            this.tail = this.head;
        }
        return removed.value;
    }
}