const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", function(req,res) {
    res.render("index")
})

app.get("/ajax", function(req,res) {
    console.log(req.query);
    // { key: value, key: value } => query는 객체니깐 응답이 이런 형태일 것.
    res.send(req.query);
})

app.post("/ajax", function(req,res) {
    console.log(req.body);
    // { key: value, key: value } => query는 객체니깐 이런 형태일 것.
    res.send(req.body);
})

app.get("/axios", function(req,res) {
    console.log(req.query);
    res.send(req.query);
});

app.post("/axios", function(req,res) {
    console.log(req.body);
    const data = {
        ...req.body,
        msg: "반가워요",
    };

    // { id:...
    // 
    // msg: ...   
    // }; => 형태

    res.send(data);
});

app.get("/fetch", function(req,res) {
    console.log(req.query);
    res.send(req.query);
});

app.post("/fetch", function(req,res) {
    console.log(req.body);
    res.send(req.body);
})

// 실습 2번 참고
// app.post("/----url---", function(req,res){
//     // 정답 data
//     const id = "sanppi";
//     const pw = "1234";
//     // req.body와 id, pw를 비교하는 코드 작성
//     // 일치 X - > "로그인 실패" 결과 보내고
//     // 일치 0 -> "로그인 성공" 결과 보내는 형태로 하기. 
// })


app.listen(PORT, function(){
    console.log(`Server Open: ${PORT}`);
});