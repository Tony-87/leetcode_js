/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
      console.log(left,right);
    if (nums[left] % 2 != 0) {
      left++;
      continue
    }
    if (nums[right] % 2 != 1) {
      right--;
      continue
    }
    if (nums[left] % 2 == 0 && nums[right] % 2 == 1) {
        console.log('ch',left,right);
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }
  return nums;
};

// console.log(exchange([1, 2, 3, 4]));
console.log(exchange([11, 9, 3, 7, 16, 4, 2, 0]));
