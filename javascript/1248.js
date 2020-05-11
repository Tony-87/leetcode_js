// https://leetcode-cn.com/problems/count-number-of-nice-subarrays/
/**
 * 思路
 * 找到一个最小数组，跟两边连续偶数的做计算，
 * [2,2,2,1,1,1,2,2,2,2,2,1,2,2,2,2]
 * [2,2,1,2,2,1,2,2,1,2,2,2,1,2,2,1,2]
 * [----+-----+-----+------]
 *       [----+-----+-------+----]
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let result = 0;
    let begin = 0, end = 0 //计算 总长度，减去中间最小数组，就是该组的数量
    let oddArr=[]//记录奇数下标， 
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2==1){
            oddArr.push(i)
        }
    }
    if(oddArr.length<k){
        result = 0
    }
    for(let i=0;i<oddArr.length-k+1;i++){
        begin =i==0?0:oddArr[i-1]+1
        end = oddArr[i+k]?oddArr[i+k]-1:nums.length-1

      result+= (oddArr[i]-begin+1)*(end-oddArr[i+k-1]+1)
    }
    return result

};

var r = numberOfSubarrays([2,2,2,1,2,2,1,2,2,2],2)
console.log(r);
