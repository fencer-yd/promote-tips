/*
 * @Author: fencer yangd@mshutech.com
 * @Date: 2022-12-16 13:10:02
 * @LastEditors: fencer yangd@mshutech.com
 * @LastEditTime: 2022-12-16 13:20:00
 * @FilePath: /promote-tips/step46/index.js
 * @Description: step 46
 */
/**
 * @description 面试题
 * 密码检查： 1 长度在6~12位
 *          2 至少有大写字母，数字 小写字母特殊符号 $@,_.
 */

const reg =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@,_.])[a-zA-Z0-9$@,_.]{6,12}$/;

console.log(reg.test("123,123Aa"));
