const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

// req.body를 해석하기 위한 코드 (req에 body라는 객체가 존재)
app.use(express.urlencoded({extended: true}));
// x-www-form-urlencoded 형태의 데이터를 해석
// extended : true일 경우 qs 모듈(외부 모듈)을 이용한다. false일 경우, 내장 모듈인 queryString 모듈을 사용한다. 
// ~~~~~?name=lily
app.use(express.json());
// application/json 형태의 데이터 해석


// localhost:8000 url 접속에 대한 응답을 위해 만든 코드
app.get("/", function(req, res){
    res.render("index");
});

// get 요청은 url로 접속이 가능하다.
// get 요청은 req.query라는 공간에 데이터가 담겨서 온다. 
// 데이터 전송 시에 form 태그를 이용할 경우, method를 get으로 해놓으면 get 요청
// client가 get 요청으로 데이터로 보낼 때 url에 직접 query를 만들어서 전송이 가능하다.
// url 에 정송되는 데이터가 노출된다. 즉, 개인정보를 위한 전송은 get으로 하지 않는다.
// 정보를 조회하는 요청에 사용함(CRUD중에서 Read를 의미하는 요청에 사용)
// get이라는 주소의 요청을 받는 코드
// localhost:8000/get => 이게 여기에서의 기본 주소
// localhost:8000/get?id=산하&pw=1234
app.get("/get", function(req, res){
    console.log(req.query); // { id: '산하', pw: '1234' } 이게 찍힘.
    console.log(req.query.id); // '산하'만 찍힘
    // req.query : get 요청에 대해 client 가 보낸 데이터를 담고 있다.
    // url에서 기본 주소 뒤에 오는 ?id=산하&pw=1234 이런 주소를 의미. 이게 query.
    // 기본주소?id=산하&pw=1234rs

    res.send("get 요청 성공!");
});

// send는 특정 값을 보내는 것. 객체나 문자열.. 등등 보낼 수 있음.

app.get("/gaip", function(req, res){
    console.log(req.query); 
    res.send("get 요청 성공!");
});

// localhost:8000/post => 이 주소로 post 요청을 받기 위한 준비.
// post 요청은 url로 직접 요청하는 건 불가능 함. => localhost:8000/post 이렇게 직접 치고 들어가는 건 불가능하단 말. 
// post 요청에 대한 데이터는 req.body에 담아서 옴. 
// 정보가 숨겨짐. (url이 노출되지 않음.) 
// 데이터를 새로 생성하는 요청에 주로 사용 
// (CRUD중에서 Create를 의미하는 요청에 사용)
app.post("/post", function(req, res){
    console.log(req.body);
    res.send("post 요청 성공!");
});

app.post("/post/ver2", function(req, res){
    console.log(req.body);
    res.render("result", {
        name: req.body.name,
        email: req.body.email,
    }); // result라는 파일을 렌더하겠다. {}이 안은 데이터들. 
});

// cff)
// 조회, 데이터 저장(db에 데이터 삽입), 원래 있던 데이터를 변경하기 위해, 데이터 삭제
// CRUD (create, read, update, delete)

app.listen(PORT, function(){
    console.log(`Server Open: ${PORT}`);
});

// 이 코드가 기본적으로 index.js에 있어야 한다.