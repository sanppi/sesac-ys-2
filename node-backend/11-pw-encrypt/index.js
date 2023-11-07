const crypto = require("crypto");


function createHashedPw(pw) {
    return crypto.createHash("sha512").update(pw).digest("base64");
}

console.log("pw 1234: ", createHashedPw("1234"));
console.log("pw 5678: ", createHashedPw("5678"));

const input = '1234' // 사용자가 입력한 값
const dbPw = 
"1ARVn2Auq2/WAqx2gNrL+q3RNjAzXpUfCXrzkA6d4Xa22yhRLy4AC50E+6UTPoscbo31nbOoq51gvkuXzJ6B2w=="

console.log("compare result: ", createHashedPw(input) == dbPw)


function createHashedPwWithSalt(pw) {
    const salt = crypto.randomBytes(16).toString("base64"); // salt를 db에 저장
    console.log("salt: ", salt);
    const iterations = 100;
    const keylen = 64;
    const digest = "sha512";
    return crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, digest)
    .toString("base64");
    // 순서 : 암호화할 문자열, salt, 반복횟수, 키의 길이, 알고리즘 
}

function comparePw (pw,salt) {
    const iterations = 100;
    const keylen = 64;
    const digest = "sha512";
    return crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, digest)
    .toString("base64");
}

const dbPwSalt = 
"sS8XkmwuTQuvAra0o9furE6XpEnXA9Guj8+uOdNRxi/ZRPe+C/Jrovuqykg8fWlONASu+qm8RZAN2idLYUkVtw==" // 회원가입 했을 때
const dbSalt ="QCXgCgzLNJk/d2ALnXs6lA=="
console.log("compare result with salt: ", comparePw(input, dbSalt) == dbPwSalt)


// console.log("pw 1234 with salt: ", createHashedPwWithSalt("1234") );
