//_____________case 3)______________
//파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
// 특정 식별자(여기서는 add , minus)만 필요한 경우 객체구조분해 할당 문법을 통해 받아올 수 있다. 
const { add, minus } = require("./math.js"); // const{}안에는 키값 그대로 받아와야 함

const sum = add(2, 3);
console.log(sum);
// console.log(PI); // 위에서 PI 없으면 오류 발생

//_____________case 2)______________
//파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
// 모듈을 받아올 때 객체를 그대로 math라는 식별자로 받음. (add minus PI 모든 걸 받아옴)
//const math = require("./math.js");

//const sum = math.add(3, 5);
//console.log(sum);
//console.log(math.PI);

//_____________case 1)______________
//파일에서 한개의 식별자만 내보내는 경우
//const add = require("./math.js");

// require: module을 불러오는 함수
// add -> math의 index 변수랑 상관없음.


