class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums: number[]): number {
        const obj = {};
        for (let num of nums) {
            if (obj[num]) {
                obj[num] += 1;
            } else {
                obj[num] = 1;
            }
        }
        const key = Object.keys(obj).find(key => obj[key] === 1);
        return Number(key);
    }
}
