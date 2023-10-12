const add = (a, b) => a + b; // return값이 있는 함수
const minus = (a, b) => a - b;
const PI = 3.14;

// 1) 하나만 내보낼 경우
// module.exports = add
// export default add

// 2) 여러 개 내보낼 경우
// module.exports = {
//    add, 
//    minus,
//} -> common js 문법으로 한다면

// export default PI;
export { add, minus };