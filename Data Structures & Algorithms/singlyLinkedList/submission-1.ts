class LinkedNode {
    val: number;
    next: null | LinkedNode;
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    head: LinkedNode;
    tail: LinkedNode;
    constructor() {
        const dummyNode = new LinkedNode(0, null);
        this.head = dummyNode;
        this.tail = dummyNode;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let i = 0;
        let current = this.head.next;
        while(current && i < index) {
            current = current.next;
            i++;
        }
        return current ? current.val : -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const newHead = new LinkedNode(val, this.head.next);
        if (!this.head.next) {
            this.tail = newHead;
        }
        this.head.next = newHead;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        const newTail = new LinkedNode(val, null);
        this.tail.next = newTail;
        this.tail = newTail;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        let i = 0;
        let current = this.head;
        while(i < index && current) {
            current = current.next;
            i++;
        } 
        if (current && current.next) {
            if (current.next === this.tail) {
                this.tail = current;
            }
            current.next = current.next.next;
            return true;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const vals = [];
        let current = this.head.next;
        while(current) {
            vals.push(current.val);
            current = current.next;
        }
        
        return vals;
    }
}