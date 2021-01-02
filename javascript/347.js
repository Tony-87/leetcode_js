/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let dic = {}

    for(let i = 0;i<nums.length;i++){
        if(!dic[nums[i]]){
            dic[nums[i]] = 0
        }
        dic[nums[i]]++
    } 
    let arr = []
    for(let key in dic){
        arr.push({name:key,val:dic[key]})
    }
    arr.sort(function(a,b){
        return b.val-a.val
    })
    return arr.slice(0,k).map(item=>item.name)
};

console.log(topKFrequent([1,1,1,2,2,3],2));