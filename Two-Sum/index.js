// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

//Solution:
// Assuming same index cannot be used twice

// nums = [3, 2, 4], target = 6
// nums[0] = 3
// target = 6
// diff = 6 - 3 = 3
// nums.indexOf[3] = 0 // FAILURE case because it's the same index

// // move to next iteration
// nums[1] = 2
// target = 6
// diff = 6 - 2 = 4
// nums.indexOf(4) = 2 // SUCCESS '4' exists in the array nums
// break the loop

var twoSum = function (nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const diff = target - nums[index];
    const diffIndex = nums.indexOf(diff);
    // "diffIndex !== index" takes care of same index not being reused
    if (diffIndex !== -1 && diffIndex !== index) {
      return [index, diffIndex];
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 7, 11, 15], 9));
