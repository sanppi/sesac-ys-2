const express = require("express");
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(cookieParser()); // 쿠키를 해석하고 사용할 수 있게 해 줌. 미들웨어 걺.

// 쿠키 설정 주기
const cookieConfig = {
    httpOnly: true, 
    maxAge:  24 * 60 * 60 * 1000 
} 

app.get("/", (req, res)=> {
    const noPopup = req.cookies.popup;
    res.render("index", {noPopup}); // ejs에 noPopup을 보낸 것
})

app.post("/setCookie", (req, res)=>{
    res.cookie("popup", "y", cookieConfig) // cookie만들고
    res,send({result: true}) // 응답까지 보냄. 
})

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});