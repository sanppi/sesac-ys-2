const express = require("express");
const app = express();
const port = 8000;
const session = require("express-session");
app.set("view engine", "ejs");

// 미들웨어 session 걸기
app.use(session({
    secret: "secret key",
    resave: false, // 모든 요청마다 session을 다시 저장할 거냐? 아니요.
    saveUninitialized: true, // 클라이언트가 처음 접속할 때, 세션을 한 번 초기화 할 건지 말 건지.  
    cookie: {
        httpOnly: true, // document.cookie로는 접속 불가
        maxAge: 30000,
    },
    // secure: true, // https에서만 동작하도록 함. 
}))

// session을 저장하는 방법, 클라이언트별로 session id 생김
// app.get("/", (req, res) => {
//     res.send("hello world");
// })

app.get("/", (req, res) => {
    res.render("index", {user: req.session.user});
})

// 로그인 라우터
app.post('/login', (req, res) => {
    res.redirect('/');
  });
  
  // 로그아웃 라우터
  app.get('/logout', (req, res) => {
    // 세션 초기화
    req.session.destroy();
    res.redirect('/');
  });

app.get("/set", (req, res) => {
    console.log("1: ", req.session)
    // 로그인 성공한 시점에 req.session.user에 user를 식별할 수 있는 고유한 값을 담아놔야 함. 
    req.session.user = "lily"
    console.log("2: ", req.session)
    res.send("set session");
})

// 세션 삭제하는 방법
// app.get("/logout", (req,res) => {
//     req.session.destroy((err)=>{
//         if(err) throw err;
//         res.send({result: true, msg: "로그아웃 성공"})
//     })
// })

// 보낸 응답에 따라 user나옴.
// app.get("/get", (req,res)=>{
//     if(req.session.user) { // req.session.user이 존재하면 render하기
//         res.render("profile")
//     } else {
//         res.redirect("/login") // 없으면 로그인페이지로 다시 돌아가기 
//     }
//     console.log("user : ",req.session.user);
//     res.send({user: req.session.user});
// });


app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});
