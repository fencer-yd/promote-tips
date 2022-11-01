/*
 * @Author: fencer 982039620@qq.com
 * @Date: 2022-11-01 09:44:12
 * @LastEditors: fencer 982039620@qq.com
 * @LastEditTime: 2022-11-01 09:55:52
 * @FilePath: /promote-tips/step28/index.js
 * @Description: step28
 */
var a;
if (true) {
  console.log(a); // function
  a = 10;
  function a() {} // function to local
  function b() {}
  a = 5; // block var
  console.log(a); // 5
}
console.log(a); // 10
console.log(b); // function
