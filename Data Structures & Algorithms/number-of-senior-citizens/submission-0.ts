class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {
        let result = 0;
        for (let i = 0; i < details.length; i++) {
            let age = Number(details[i][11] + details[i][12]);
            if (age > 60) {
                result++;
            }
        }
        return result;
    }
}
