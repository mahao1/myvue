function aa(){
  console.log('引入外部a.js里的aa函数');
}
function cc(){
  console.log('引入外部a.js里的cc函数');
}
export {
  aa, cc
}
