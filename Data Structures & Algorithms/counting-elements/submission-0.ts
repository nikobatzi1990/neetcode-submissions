class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr: number[]): number {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            let digit = arr[i];
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] === digit + 1) {
                    result++;
                    break;
                }
            }
        }
        return result;
    }
}
