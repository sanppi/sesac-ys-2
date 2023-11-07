const bcrypt = require("bcrypt");

const salt = 10;

function bcryptPw (pw) {
    return bcrypt.hashSync(pw, salt);
}

function comparePw(pw, dbPw) {
    return bcrypt.compareSync(pw, dbPw)    //dbPw = 디비에 있는 실제 암호화된 값
}

const dbPw = bcryptPw("1234");

console.log("pw 1234: ", dbPw);
console.log("compare pw: ", comparePw("1234", dbPw));
