/*
 * @Author: fencer 982039620@qq.com
 * @Date: 2022-09-10 14:59:07
 * @LastEditors: fencer 982039620@qq.com
 * @LastEditTime: 2022-11-01 10:04:35
 * @FilePath: /promote-tips/step19/index.js
 * @Description: step19
 */
// 阿里面试题

let a = { c: 1 }; // step1
const b = a; // step2
a.d = a = { c: 2 }; // step3
console.log(a.d);
console.log(b.d);

// const a = b = 1 -> const a = 表达式(b = 1)的返回值是1
// step1 a -> object { c: 1 }
// step2 b -> object { c: 1 }
// step3 a.d = 表达式 (new a -> new object { c: 2 })返回值 object { c: 2}
// 现在a -> { c: 2 }
// 现在b -> old a -> { c: 1, d: { c: 2 } }

// a.d undefined
// b.d { c: 2 }
