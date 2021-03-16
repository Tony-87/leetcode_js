/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    let min = 14,max = 0,zeroNum=0;

    for(let i=0;i<4;i++){
         if(nums[i]==0){
            zeroNum ++ 
        } else if(nums[i]==nums[i+1]){
            return false
        }
    }
  return nums[4]-nums[zeroNum]<=4   
};