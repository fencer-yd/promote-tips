/*
 * @Author: fencer 982039620@qq.com
 * @Date: 2022-10-31 18:22:51
 * @LastEditors: fencer 982039620@qq.com
 * @LastEditTime: 2022-10-31 18:25:36
 * @FilePath: /promote-tips/step26/index.js
 * @Description: step26
 */
// 设置私有变量

class A {
  // _abc = 1;
  #abc = 1;

  // _method() {
  #method() {
    console.log(this.#abc);
  }

  method() {
    this.#method();
  }
}

const a = new A();
// console.log(a.#abc);
// a.#method();
a.method();
