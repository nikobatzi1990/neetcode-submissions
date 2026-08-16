class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = 0;
            for (let e = i; e < arr.length; e++) {
                if (arr[i] < arr[e]) {
                    arr[i] = arr[e];
                }
            }
        }
        arr[arr.length-1] = -1;

        return arr;
    }
}
