function deepClone(data, hash = new WeakMap()) {
  if (typeof data !== "object" || data === null) return data;
  if (hash.has(data)) return data;
  if (Object.prototype.toString.call(data) === "[object Array]") {
    const newObj = [];
    for (const key in data) {
      newObj[key] = deepClone(data[key], hash);
    }
    return newObj;
  }
  if (Object.prototype.toString.call(data) === "[object Object]") {
    const newObj = {};
    hash.set(data, data);
    for (const key of Object.getOwnPropertyNames(data)) {
      newObj[key] = deepClone(data[key], hash);
    }
    return newObj;
  }

  const Constructor = Object.getPrototypeOf(data).constructor;
  return new Constructor(data);
}

const symbolName = Symbol();
const obj = {
  objNumber: new Number(1),
  number: 1,
  objString: new String("ss"),
  string: "stirng",
  objRegexp: new RegExp("\\w"),
  regexp: /w+/g,
  date: new Date(),
  function: function () {},
  array: [{ a: 1 }, 2],
  [symbolName]: 111,
};
obj.d = obj;

const o = deepClone(obj);
console.log(o.objNumber === obj.objNumber);
console.log(o.number === obj.number);
console.log(o.objString === obj.objString);
console.log(o.string === obj.string);
console.log(o.objRegexp === obj.objRegexp);
console.log(o.regexp === obj.regexp);
console.log(o.date === obj.date);
console.log(o.function === obj.function);
console.log(o.array[0] === obj.array[0]);
console.log(o[symbolName] === obj[symbolName]);
