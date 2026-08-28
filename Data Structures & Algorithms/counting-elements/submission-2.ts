class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr: number[]): number {
        let result = 0;
        const set = new Set(arr);
        for (let i = 0; i < arr.length; i++) {
            if (set.has(arr[i] + 1)) {
                result++;
            }
        }
        
        return result;
    }
}
