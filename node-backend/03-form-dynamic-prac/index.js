const express = require("express");
const app = express();
const PORT = 8002;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", function(req,res) {
    res.render("index")
})

app.get("/axios", function(req,res) {
    console.log(req.query);
    res.send(req.query);
});

// app.post("/axios", function(req,res){
//     console.log(req.body);
//     const id = "sanppi";
//     const pw = "1234";
//         // req.body와 id, pw를 비교하는 코드 작성
//         // 일치 X - > "로그인 실패" 결과 보내고
//         // 일치 0 -> "로그인 성공" 결과 보내는 형태로 하기. 
//     const data = {
//         ...req.body,
//         msg: "반가워요",
//         };

//     res.send(data);
//     })

app.post("/axios", function(req, res) {
    console.log(req.body);

    const id = "sanppi";
    const pw = "1234";

    if (req.body.id == id && req.body.pw == pw) {
        res.send("success");
    }  else res.send("faild");
});
    
    

app.listen(PORT, function(){
    console.log(`Server Open: ${PORT}`);
});