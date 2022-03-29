function m() {
  console.log(a) // undefined 变量提升
  var a = 10;
}
m()


function m3() {

  var a = 10;
  var a = 5
  console.log(a)  // 5 
}
m3()

function m2() {
  console.log(b) // 报错程序不再往下执行
  let b = 10;
}
//m2()

// const SB; // 报错 常量一旦声明 需要被赋值
const ST = 'hello'
//const ST = 'world' // 报错 不能同时声明同一个变量
// ST = 'world'  // 报错 常量值一般情况不能被修改

let str = 'hello'
str = 'world' // str = world 值被覆盖

const arr = []
arr[0] = '少林寺'
console.log(arr) // ['少林寺'] 常量除数组对象之外可以被修改
// arr

var name = '张三' // 全局 name 
function m4() {
  console.log(name)
}
m4()

