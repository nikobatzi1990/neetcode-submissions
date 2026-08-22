class DynamicArray {
    capacity: number;
    length: number;
    array: Array<number>;
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.length = 0;
        this.array = new Array(this.capacity).fill(0);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.length === this.capacity) {
            this.resize();
        }
        this.array[this.length] = n;
        this.length++;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        const last = this.array[this.length - 1];
        this.length -= 1;
        return last;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2;
        const newArray = new Array(this.capacity).fill(0);
        for (let i = 0; i < this.length; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }
}
