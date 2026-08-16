class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let result = 0;
        let counter = 0;
        for (let i = 0; i <= nums.length; i++) {
            if (nums[i] === 1) {
                counter += 1;
            } else {
                if (counter > result) {
                    result = counter;
                }
                counter = 0;
            }
        }
        return result;
    }
}
