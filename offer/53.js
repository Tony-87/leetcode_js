/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    nums.push(0)
    for(let  i=0;i<nums.length;i++){
        if(nums[i]!=i){
            return i
        }
    }
    
};

var res = missingNumber([0])
console.log(res);

var res = missingNumber([0,1,2,3,4,5,6,7,9])
console.log(res);