/*
 * @Author: fencer yangd@mshutech.com
 * @Date: 2022-12-05 12:57:35
 * @LastEditors: fencer yangd@mshutech.com
 * @LastEditTime: 2022-12-05 13:24:31
 * @FilePath: /promote-tips/step40/index.js
 * @Description: step 40
 */

/**
 * 实现 a[1][2][3] + 4 = 10;
 */

const add = new Proxy(
  {
    _store: 0,
  },
  {
    get(target, param, receiver) {
      if (param === Symbol.toPrimitive) {
        return () => {
          return target._store;
        };
      }
      target._store += +param ?? 0;
      return receiver;
    },
  }
);

console.log(add[1][2][3] + 4);
