class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let score = 0;
        const stack = [];
        for (let e of operations) {
            switch (e) {
                case '+':
                    let total = stack[stack.length - 1] + stack[stack.length - 2];
                    stack.push(total);
                    break;
                case 'C':
                    stack.pop();
                    break;
                case 'D':
                    let double = 2 * stack[stack.length - 1];
                    stack.push(double);
                    break;
                default:
                    stack.push(Number(e));
                }
        }
        let finalScore = stack.reduce((accumulator, currentValue) => accumulator + currentValue, score);
        return finalScore;
    }
}
