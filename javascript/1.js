/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++)
        {
            var num1 = nums[i]
            var cha = target - num1
            var num2Index = nums.indexOf(cha)
            if(num2Index>=0 && num2Index!=i)
                {
                    return [i,num2Index]
                }
        }
};

var r = twoSum([2, 7, 11, 15],9)
console.log(r);
