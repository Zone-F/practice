// new Promise((resolve,reject)=>{
//   console.log('第一个 promise');
//   resolve()
// })
// .then(()=>{
//   console.log('外部第一个then');
//   new Promise((resolve,reject)=>{
//     console.log('内部 promise');
//     resolve()
//   })
//   .then(()=>{
//     console.log('内部第一个then');
//   })
//   .then(()=>{
//     console.log('内部第二个then');
//   })
// })
// .then(()=>{
//   console.log('外部第二个then');
// })
// new Promise((resolve,reject)=>{
//   console.log('第三个 promise');
//   resolve()
// }).then(()=>{
//   console.log('第三个外部promise 第一个then');
// })
// .then(()=>{
//   console.log('第三个外部promise 第二个then');
// })
// new Promise((resolve,reject)=>{
//   console.log('第一个 promise');
//   resolve()
// })
// .then(()=>{
//   return new Promise((resolve,reject)=>{
//     console.log('内部 promise');
//     reject('错误')
//   })
// })
// .then((res)=>{
//   console.log('外部第二个then',res);
// })
// .catch((err)=>{
//   console.log('捕获错误',err);
// })
// function get(t = true){
//   let name = t
// }
// get(22)
// console.log(typeof name);
