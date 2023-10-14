// -------------------------문제 발생 코드!!------------------------

// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살지 고민한다.");
// }

// let product;
// let price;

// function pickDrink() {
//   setTimeout(function () {
//     console.log("고민 끝!!");
//     product = "제로 콜라";
//     price = 2000;
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// goMart();
// pickDrink();
// pay(product, price);

// -------------------------callback 함수로 해결한 코드!!----------- 

//function goMart(){
//    console.log('마트에 가서 어떤 음료를 살지 고민한다.');
//}

//let product;
//let price;

//function pickDrink(callback) {
//    setTimeout(function() {
//       console.log('고민 끝!!');
//      product = '제로 콜라';
//        price = 2000;
//        callback(product, price);
//        // pay(product, price);
//    }, 3000);
//}

//function pay(product, price) {
//    console.log(`상품명:${product}, 가격: ${price}`);
//}

//goMart();
//pickDrink(pay);

// pay(product, price); -> 여기서 더이상 실행시키지 않음. 

// -------------------------promise로 해결한 코드!!----------- 

// function goMart(){
//     console.log('마트에 가서 어떤 음료를 살지 고민한다.');
// }

// let product;
// let price;

// function pickDrink() {
//     return new Promise(function (resolve, reject){
//         setTimeout(function() {
//             console.log('고민 끝!!');
//             product = '제로 콜라';
//             price = 2000;
//             resolve(true); // resolve를 만나는 순간에 then으로 넘어간다. 그리고 그 때 pay가 실행됨.
//         }, 3000);
//     });
// }

// function pay(product, price) {
//     console.log(`상품명:${product}, 가격: ${price}`);
// }

// goMart();
// pickDrink().then(()=> {
//     pay(product, price); 
// });
// pay(product, price)


// --------------------------async/await------------------------

function goMart(){
    console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

let product;
let price;

function pickDrink() {
    return new Promise(function (resolve, reject){
        setTimeout(function() {
            console.log('고민 끝!!');
            product = '제로 콜라';
            price = 2000;
            resolve(); // resolve를 만날 때까지 await이 기다림
        }, 3000);
    });
}

function pay(product, price) {
    console.log(`상품명:${product}, 가격: ${price}`);
}

// goMart();
// pickDrink().then(()=> {
//     pay(product, price); 
// });

async function exec() {
    goMart();
    await pickDrink();
    pay(product, price);
}

exec();





