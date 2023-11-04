const express = require("express");
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(cookieParser()); // 쿠키를 해석하고 사용할 수 있게 해 줌. 미들웨어 걺.

// 쿠키 설정 주기
const cookieConfig = {
    httpOnly: true, // document.cookie로 접근 불가. 서버에서만 쿠키에 접근할 수 있다. 저장은 여전히 브라우저에 존재. 
    maxAge: 24 * 60 * 60 * 1000  
    // ms단위로 보존하고자 하는 기간을 설정. 언제 만료가 될지
    // expires: "2023-11-04T18:00"
    // path: "/" (이게 디폴트값), // "/test" -> localhost:8000은 안되고, http://localhost:8000/test/에서는 쿠키가 존재하게 됨 
    // secure: true, // https 보안 서버에서만 쿠키를 동작하게 한다. 
    // signed: true, // 쿠키를 암호화한다. -> 아래에서 req.cookies가 아니라 req.signedCookies에서 조회해야 함. 
} 

app.get("/", (req, res)=> {
    res.render("index");
})

// 쿠키를 설정하겠다는 라우터
app.get("/set", (req, res)=> {
    // 서버가 쿠키를 만들어서 응답을 보낸다.
    // key: key1 / value: value1 / 
    // res.cookie("key1", "value1", cookieConfig)
    if (req.cookies.popup !=="1") {
        res.cookie("popup", "1", cookieConfig)
    }
    // 서버가 응답보낼때 쿠키도 응답 함께 보냄. 이부분은 쿠키만 응답 보냄.
    // res.cookie("popup", "1", cookieConfig)
    res.send("set cookie"); // 일반적인 응답 보내기
}) // 쿠키를 설정하겠다는 라우터, 

// 쿠키를 get하기. 가져오는 방법.
app.get("/get", (req, res)=> {
    console.log("cookie:", req.cookies)
    res.send(req.cookies)
}) 


app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});
