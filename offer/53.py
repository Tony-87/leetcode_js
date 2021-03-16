class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        i,j =0, len(nums)-1
        while i <= j:
            m = (i+j)//2