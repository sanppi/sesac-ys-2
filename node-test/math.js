//_____________case 2), case 3)______________
//파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
// 여러 식별자를 객체로 내보낸다.

module.exports.add = (a, b) => a + b;
module.exports.minus = (a, b) => a - b;
module.exports.PI = 3.14; 

//이게 위랑 똑같은 것.
//const data = {
//    add: add, // add라는 key로 add라는 함수를 넘긴 것.
//    minus: minus, // minus라는 key로 minus라는 함수를 넘긴 것.
//    PI: PI

//_____________case 2), case 3)______________
//파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
//module.exports = {
//    add,
//    minus,
//    PI,
//};

//_____________case 1)______________
//파일에서 한개의 식별자만 내보내는 경우

//const add = (a, b) => a + b;
//const minus = (a, b) => a - b;
//const PI = 3.14; // 상수

// module.exports = add;

// 위랑 똑같
//const data = {
//    add: add, // add라는 key로 add라는 함수를 넘긴 것.
//    minus: minus, // minus라는 key로 minus라는 함수를 넘긴 것.
//    PI: PI
//}

// 함수 넘길경우 함수의 이름만 넘긴다. add() 이렇게 x

// 원래 우리가 알고 있는 딕셔너리 형태
//{
//    name: "lily";
//    gender: "여"
//}


//똑같
//const add2 = (a, b) => {
//   return  a + b;
//};