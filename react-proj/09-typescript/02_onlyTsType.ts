// or
type gender = "Men" | "Women";
// const lily:gender = "abcd" => error 뜸
const lily: gender = "Women";

// [상품명, 가격]
type productInfo = [string, number];
const cola: productInfo = ["cola", 2500];

// 객체에 대한 타입을 지정할 경우, interface라는 키워드를 많이 사용함.
interface ProductInfo2 {
  productName: string;
  price: number;
}

const cider: ProductInfo2 = { productName: "cider", price: 2500 };
// const cider: ProductInfo2 = {productName: "cider", price: 2500, sale: 10}

type ProductInfo3 = {
  productName: string;
  price: number;
  sale?: number; // 있어도 되고 없어도 되는 키값 = optional한 값
};
const beer: ProductInfo3 = { productName: "beer", price: 2500 };
console.log(beer.sale);

interface Seller {
  name: string;
}

interface ProductInfo4 {
  productName: string;
  price: number;
  sale?: object;
  seller?: Seller;
}
const soju: ProductInfo4 = {
  productName: "soju",
  price: 2000,
  seller: { name: "lily" },
};

// console.log(soju.seller.name);
// soju.seller -> seller는 optional한 키 -> undefined가 될 수 있음
// undefined에는 aaa 함수 속성이 없습니다.

// 옵셔널 체이닝
console.log(soju.seller?.name);

interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  studentID: string;
  eat: () => void;
  // () -> 매개변수가 없는 함수를 넘겨줌, return값도 없는 함수임
  // 함수의 return값이 없으면 함수 자체는 void라는 걸 return한다고 생각하면 됨.
}

const person: Person = {
  name: "lily",
  age: 88,
};

// 상속받은 키값들까지 다 적어줘야 함.
const stu: Student = {
  name: "lily",
  age: 88,
  studentID: "0000000000",
  eat: () => console.log("밥을 먹는다."), // return 값이 없을 때
};

interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};
