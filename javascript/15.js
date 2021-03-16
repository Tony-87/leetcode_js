var threeSum = function(nums) {
    let res = []
    nums.sort((a,b)=>a-b)
    for(let x = 0;x<nums.length-3;x++){
        let y = x+1, z = nums.length-1
        while(y<z){
            let sum = nums[x]+nums[y]+nums[z]
            if(sum==0){
                res.push([ nums[x],nums[y],nums[z] ])
                continue
            }
            if(sum<0){
                y++
            }
            else if(sum>0){
                z--
            } 
        }
    }
    return res
};

let res = threeSum([-1,0,1,2,-1,-4])
console.log(res);