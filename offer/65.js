/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
    while(b){
        let c = (a & b) << 1
        a = a ^ b
        b = c
    }
    return a
};

/**
 * 位运算
 * & 两位都是1，结果是1
 * | 有一个1，结果是1
 * ^ 如果有一位是1，则设置每位为1
 * ~ 反转所有位
 */