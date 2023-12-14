// js에서 하던 방식
// function abc () {
//     console.log("abc")
// }

// 함수 자체의 type -> 함수가 실행되어 결국 return되는 값
function sum(a: number, b: number): number {
  return a + b;
  // return "hello" => string이니깐 오류남
}
console.log(sum(1, 2));

// 옵셔널 매개변수
const sum3 = (a: number, b?: number): number => {
  if (b) return a + b;
  return a;
}; // return a 안 적으면 number에 에러남. number로 return되어야 되는데 안 될 수도 있으니깐.

interface Calculator {
  sum: (a: number, b: number) => number;
  sub?: () => void;
}
const calc: Calculator = { sum: sum };

// 함수가 끝에 도달할 수 없을 것 같을 때?
function goingOn(): never {
  while (true) {
    console.log("go");
  }
}

// void: 함수 자체의 return 값이 없을 때 사용
// 오버로딩 ? -> 함수의 이름은 같으나, 형태가 다른 함수를 중복해서 선언하는 것.
// (형태가 다르다는 것? 매개변수의 갯수나 타입, 혹은 반환값이 다른 것을 의미 )
function hello(num: number): number;
function hello(str: string, str2: string): string;

// 위에서 선언을 하고, 여기서 한 번에 구현.
function hello(param: any, param2?: any) {
  console.log(param);
  console.log(param2);
  return param;
}

hello(1);
hello("hello", "world");

// function hello() {
//   // void => 함수의 return값이 없을 때 사용하면 됨.
//   console.log("hello");
//   // return "hello"
// };

// // 함수 오버로딩
// function hello(a:string, b:string): void {
//     // void => 함수의 return값이 없을 때 사용하면 됨.
//     console.log("hello");
//     // return "hello"
//   };

function sum1(a: number, b: number) {
  console.log(a + b);
}
sum1(5, 11);

// ...numbers: 함수에 전달된 모든 인수를 배열로 수집
// number[]: 배열의 요소들이 숫자
function sum2(...numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}
console.log(sum2(1, 2, 3, 4, 10));
