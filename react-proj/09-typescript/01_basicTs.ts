// let str = 'hello'   => js로 변환되었을 때 이렇게 될 것.
// 초록색 글씨 = 자료형
// 값 할당할 땐 const도 당연히 가능 let 대신.
let str: string = "hello";
// str = 5; // error 뜸. string 이어야 되니깐~!
console.log(str); // hello 잘 떠야 됨.

let num: number;
num = 5;

let undef: undefined;
// undef = 3 : 에러남
let nu: null = null;
// nu = 3 : 에러남

// 숫자로 이루어진 배열의 type number[]
let arr: number[] = [1, 2, 3, 4]; // 숫자 배열이 됨 'aaa' 이런 건 못 들어감

let strArr: string[] = ["abc", "def", "ghi"];
let strArr2: Array<string> = ["abc", "def", "ghi"];

let numStrArr: (number | string)[] = [1, "a"];
let numStrArr2: Array<number | string> = [1, "a"];

let abc: number | string = "a";
abc = 5; // 5로 바꾸는 것도 가능.

// typescript 에서 any를 사용하는 건 지양해야 함.
let anyArr: any[] = [1, "a", null, undefined, {}];

// 객체. 객체 안에 들어올 수 있는 key값을 지정할 수 있음.
// interface, type와 같은 키로 js에 존재하지 않는 타입을 customizing해서 넣을 수 있음.
let obj: object = {
  name: "lily",
};

// Tuple
let drink: [string, number] = ["cola", 2500];
console.log(drink[0]);
drink[0] = "cider";
console.log(drink[0]);

// drink[2] = 'aaa' -> 2번째 원소는 없어야 돼서 안됨.
drink.push("aaa"); // 근데 또 push는 또 돼서 [ 'cider', 2500, 'aaa' ] 이렇게 되어 버림.
console.log(drink);

// 읽기만 가능.
let drink2: readonly [string, number] = ["cola", 2500];
// drink2[0] = 'aaaa' => error 못바꿈.
// drink2.push("aaa") => readonly라 push안 됨.

// Enum
// sun, rain, cloud
enum Weather {
  sun,
  rain,
  cloud,
}

console.log(Weather.sun);

const weather = 0;

if (weather == Weather.sun) {
  console.log("맑은 날씨");
}

let aaaaa: Weather = 2; // 얘는 정상적으로 잘 나옴.
// let aaaaa: Weather = 3 -> 오류 발생. 3번째 존재하지 않음.

// 문자열로도 할당 가능
enum Weather2 {
  sun = "sun",
  rain = "rain",
  cloud = "cloud",
}

console.log(Weather2.sun);

let olympic_newgame: readonly [object, boolean] = [
  { name: "쇼트트랙", type: "혼성 계주" },
  true,
];

// olympic_newgame[1] = false;
