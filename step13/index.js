/*
 * @Author: fencer 982039620@qq.com
 * @Date: 2022-09-10 13:50:45
 * @LastEditors: fencer 982039620@qq.com
 * @LastEditTime: 2022-11-01 10:09:30
 * @FilePath: /promote-tips/step13/index.js
 * @Description: step13
 */
// 数组nums中包含1个或多个正整数
// 其他的数字都出现2次
// 只有一个数字出现了1次
// 找出只出现1次的数字

function uniqueNum(nums) {
  return nums.reduce((a, b) => a ^ b, 0);
}

console.log(uniqueNum([1, 2, 2, 3, 1]));

// a^b^c === c^b^a
// a^a === 0
// 0^a === a
