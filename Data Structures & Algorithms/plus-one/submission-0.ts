class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]): number[] {
        let number = Number(digits.join(""));
        number++;
        const array = Array.from(String(number), Number);
        return array;
    }
}
