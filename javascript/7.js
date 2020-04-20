// https://leetcode-cn.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    var min = Math.pow(2,31) * -1;
    var max =  Math.pow(2,31) -1
     
    var result = Math.abs(x).toString().split('').reverse().join('');
    if(result>max || result<min){
        return 0;
    }
    if(x<0){
        return  result*-1
    }
    else{
         return  result
    }
};

console.log(reverse(-123));
