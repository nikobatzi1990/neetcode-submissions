class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const table = {};
        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i]
            table[curr] = (table[curr] || 0) + 1;
            if (table[curr] > 1) {
                return true;
            }
        }
        return false;
    }
}
