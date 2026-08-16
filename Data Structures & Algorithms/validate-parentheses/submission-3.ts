class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        for (let char of s) {
            switch (char) {
                case ")":
                    if (stack[stack.length - 1] === "(") {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
                case "]":
                    if (stack[stack.length - 1] === "[") {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
                case "}":
                    if (stack[stack.length - 1] === "{") {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
                default:
                    stack.push(char);
            }
        }
        if (stack.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}