const fruits = ["apple", "banana", "grape"];

const [ apple2, banana2, grape2, strawberry = "strawberry" ] = fruits;
console.log(apple2, strawberry);

// 사실상 아래의 코드와 동일한 작업을 하고 있음
// const apple2 = fruits[0]
// const banana2 = fruits[1]
// const grape2 = fruits[2]

let x = 1, 
    y = 3;
// x = 3, y = 1
[x, y] = [y , x];

console.log(x, y)

// let temp = x; // temp = 1
// x = y // x = 3, y = 3
// y = x // y = 3
// y = temp;

const obj = {
    name: "lily",
    gender: "여",
    age: 99,
};

// const { age, name, test = "test"} = obj;
// console.log(age, test);

// key 이름을 바꾸는 방법
const { age, name: name2 } = obj;
console.log(age, name2);

// const age = obj.age;
// const name = obj.name;


const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c", "d", "e"];

// [1, 2, 3, 4, 5, "a", "b", "c", "d", "e"] -> 이렇게 만들고 싶은 것

// 하드코딩: const arr3 = [arr1[0]~~~~~~, arr2[0], arr2[1], ~~~]
// for문 돌려서 하기 for()

const arr3 = [...arr1, ...arr2];
console.log("arr3", arr3)

// spread 연산자: ...[1, 2, 3, 4, 5] => 1, 2, 3, 4, 5 => 배열을 해재하는 것. 배열을 풀어둔다 생각하면 됨.
const hello = [..."hello"]
// hello = ["h", "e", "l", "l", "o"]
console.log("hello", hello);


const word1 = "abc";
const word2 = "xyz";

const word3 = [...word1, ...word2];
console.log("word3", word3)

const obj2 = {
    name: "lily",
    gender: "여",
    age: 99,
};

const obj3 = {
    ...obj2, 
    test: "test",
};
console.log("obj3", obj3);

const values = [10, 20, 30]
function get(a, ...rest) {
    console.log("a", a); // 10
    console.log("rest", rest); // [20, 30]
}

get(...values)

// ...[10, 20, 30] => 10, 20, 30
// get(10, 20, 30);





