/**
 * @description 1.将一个树状结构的数组转成扁平化数组
 * @description 2.将一个扁平化数组转成树状结构数组
 */

const  data1 = [
  {
    id: '1',
    name: '父节点1',
    children: [
      {
        id: '1-1',
        name: '子节点1-1',
        children: [
          {
            id: '1-1-1',
            name: '子节点1-1-1'
          },
          {
            id: '1-1-2',
            name: '子节点1-1-2'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: '父节点2',
    children: [
      {
        id: '2-1',
        name: '子节点2-1'
      }
    ]
  }
]

const result1 = data1.reduce(function (acc, cur) {
  acc.push({
    id: cur.id,
    name: cur.name,
    parentId: cur.parentId
  });
  cur.children && cur.children.forEach(child => {
    child.parentId = cur.id;
    arguments.callee(acc, child);
  })
  return acc;
}, []);

console.log(result1);

const data2 = [
  { id: '1', name: '父节点1', parentId: undefined },
  { id: '1-1', name: '子节点1-1', parentId: '1' },
  { id: '1-1-1', name: '子节点1-1-1', parentId: '1-1' },
  { id: '1-1-2', name: '子节点1-1-2', parentId: '1-1' },
  { id: '2', name: '父节点2', parentId: undefined },
  { id: '2-1', name: '子节点2-1', parentId: '2' }
];


const result2 = data2.reduce(function (acc, cur, idx, arr) {
  // 检索当前元素的子元素
  cur.cildren = arr.filter(item => item.parentId === cur.id);
  // 判断是否为根元素
  if (!cur.parentId) {
    acc.push(cur)
  }
  return acc;
}, [])

console.log(JSON.stringify(result2, null, 2));

