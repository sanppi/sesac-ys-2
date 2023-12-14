// Generic
// 선언할 때, 함수든 객체든 변수든 선언할 때 type을 기본적으로 지정해 줌.
// but, 사용하다보면 type이 다양한 경우를 처리해 줘야 할 수 있음.
// 호출하거나 사용할 때 타입을 넘겨서 해당 타입으로 지정할 수 있는 방법

// 함수에서의 예시 1
// 오버로딩
function printXY(x: number, y: number): void;
function printXY(x: string, y: string): void;

function printXY(x: number | string | object, y: number | string | object) {
  console.log(x, y);
}
printXY(1, 2);
printXY("a", "b");
// printXY("a", 2) => 이건 오버로딩 저위에 거 주석처리 하면 가능해짐.
// 오버로딩 한 이유는 number+number, string+string 만 되게 한 거임.

// 선언하는 게 아니라 제너릭을 이용해서, printXYByGeneric 호출할 때 T에다가 자료형을 받아올 것이라는.
function printXYByGeneric<T>(x: T, y: T) {
  console.log(x, y);
}
printXYByGeneric<string>("a", "b");
printXYByGeneric<number>(1, 2);

// 예시 2
// function numArrLength(arr: number[]): number {
//   return arr.length;
// }

// 함수 표현식 사용
const numArrLength = (arr: number[]) => arr.length; // 이렇게 써도 아래랑 똑같음.
function strArrLength(arr: string[]): number {
  // number는 결과값에 대한 type이니깐 length는 number이니깐 안 바꿔도 됨
  return arr.length;
}

// 만약? 객체 배열, 이 외 다른 타입의 배열도 length를 구하는 함수를 만들고 싶다면?

function arrLength<T>(arr: T[]): number {
  return arr.length;
}

arrLength<string>(["a", "b"]);

function exampleGeneric<T, U>(x: T, y: U) {
  console.log(x, y);
}

exampleGeneric<string, number>("a", 1);
// exampleGeneric<string, number>(1, "a",) => 안됨

let a: string[];
let b: Array<string>;

// interface에서 제너릭 활용하기
interface Phone<T> {
  company: string;
  model: string;
  option: T;
  // option에는 뭐가 들어올 지 모름. 여기서 선언할 때 option을 정할 수가 없다. 이 때 제너릭을 활용할 수 있음.
}

interface SamsungOption {
  a: string;
  b: number;
}

const samsung23: Phone<SamsungOption> = {
  company: "samsung",
  model: "samsung S23",
  option: { a: "aaaa", b: 123 },
};

interface IphoneOption {
  a: string;
  c: number;
}

const iphone15: Phone<IphoneOption> = {
  company: "apple",
  model: "iphone 15",
  option: { a: "aaaa", c: 456 },
};

// 제네릭 이용해서 함수 arrElement 선언하기
// 배열과 인덱스 번호를 매개변수로 받고, Arr[index]에 대한 요소를 리턴하는 함수 만들기
// 함수의 리턴 타입까지 작성하기
// 실행 예시) console.log(arrElement<string>(["a"], 0));

function arrElement<T>(Arr: T[], index: number) {
  return Arr[index];
}
console.log(arrElement<string>(["a", "b", "c", "d"], 3));

// 첫번째 인자로 들어간 배열의 길이보다 큰 index 수(두번째 인자)가 전달된다면 return false 시키기!

function arrElement2<T>(Arr: T[], index: number) {
  if (Arr.length < index) return false;
  return Arr[index];
}

console.log(arrElement2<string>(["a", "b"], 3));
