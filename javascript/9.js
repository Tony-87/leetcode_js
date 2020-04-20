// https://leetcode-cn.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x.toString()==x.toString().split('').reverse().join('')
};

console.log(isPalindrome(12121));
