const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
// req.body 해석하기 위한 두 줄 (아래)
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// use는 미들웨어 걸때 사용

// [before] - "/"까지는 모델이 - router, 뒤는 controller로 나뉨.
//     res.render("index")
// }); => 이게 아래 문단이랑 똑같은 것. 

// 이부분이 가장 중요 ********** => 기본으로 걸려 있는 미들웨어 
// const router = require("./routes/index"); 아래랑 같은 의미
// index.js를 불러오고 싶다면 폴더 이름까지만 접근해도 됨.
const router = require("./routes"); 
// routes 폴더로 이동을 하는 것. 그럼 알아서 index.js에 접근해줌. 다만 이름이 index일때만.
app.use("/", router); // router를 미들웨어로 걸어둔 것.
// localhost:8000/comment/~~~~~ => / comment 이후부터 뭐가 오든 다 라우터 객체로 들어감. 
// 여기서 요청이 있는지 확인함.
// comments 삭제해둠. 일단 기본으로.


// 마지막에 적을 것!! 위치 조심. 
// 존재하지 않는 get 요청에 대해서 (원래는 cannot GET 어쩌구로 나옴) 
// *을 적은 이유 :  위에서 걸러져서 아무도 특정한 get 요청을 받아주지 않았을 때,
// *은 어떠한 라우터든 상관없다는 것. 
// 404 not found 안 보이게 처리하기 위해서 만든 것. 
app.get("*", function(req, res){
    res.send("페이지를 찾을 수 없습니다.");
});

app.listen(PORT, function(){
    console.log(`Server Open: ${PORT}`);
});

// routes안의 index.js(모듈로서 내보내져야 함)와 그냥 index.js를 연결시켜줘야 함. 