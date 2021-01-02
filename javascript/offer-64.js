/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    return n && Math.pow(n,2) - sumNums(n-1)
}; 

console.log(sumNums(100)); 