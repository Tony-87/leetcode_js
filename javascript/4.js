// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var numArr = [...nums1,...nums2]
    numArr.sort(function(a,b){return a-b})
    if(numArr.length%2==1){
        return numArr[parseInt(numArr.length/2)]
    }
    else{
        var index = numArr.length/2
        return (numArr[index-1]+numArr[index])/2
    }
};

var r = findMedianSortedArrays([1,2],[3,4])
console.log(r);