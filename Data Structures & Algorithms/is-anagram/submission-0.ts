class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const obj = {};
        if (s.length === t.length) {
            for (let i = 0; i < s.length; i++) {
                obj[s[i]] = (obj[s[i]] || 0) + 1 ;
            }

            for (let i = 0; i < t.length; i++) {
                if (!Object.hasOwn(obj, t[i])) {
                    return false;
                } else {
                    obj[t[i]] = (obj[t[i]] || 0) - 1 ;
                    if (obj[t[i]] < 0) {
                        return false;
                    } 
                }
            }
            return true;
        } else {
            return false;
        }
    }
}
