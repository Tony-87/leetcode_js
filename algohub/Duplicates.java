
class Duplicates{
    public int removeDuplicates(int [] nums){
        if(nums.length==0) return 0;
        int index = 1;
        for(int i=1;i<nums.length;i++){
            if(nums[i]!=nums[index-1]){
                nums[index++] = nums[i];
            }
        }
        return index;
    }
    // [1,2,3,4,4,5,6]
}


function removeDuplicates(nums){
    if(!nums.length)return 0;
    let index = 1;
    for(let i =1;i<nums.length;i++){
        if(nums[i]!=nums[index-1]){
            nums[index++]=nums[i]
        }
    }
    return index
}
