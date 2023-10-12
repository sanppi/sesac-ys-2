const express = require('express'); // express 모듈 import
const app = express(); // server 객체
const PORT = 8000; // 포트
// 1 ~ 65536 존재. 1~1023까지는 정해진 기능이 있음. 
// 3000, 8000, 8080, 8010, 3010,, 3001 ... 다 가능한데 보통 3000대 아니면 8000대 사용한다.
// 3306 : mysql에서 사용함.  

// app 객체의 view engine 설정을 ejs로 변경
app.set("view engine", "ejs");
// app 객체의 view 폴더 설정. 기본값 : ./views 라는 폴더
// 만약 ./view로 바꾸고 싶다면 아래처럼 작성하면 됨. 
//app.set('views', './views') -> 기본값
//app.set('views', './view') 

app.use("/static", express.static(__dirname + '/static'));
// 정적 파일을 등록할 수 있는 메소드가 static
// __dirname: c:/users/~~~~/01-express/static에 클라이언트가 /static 주소로 들어올 수 있다. 

// app.use("/public", express.static(__dirname + '/static'));
// c:/users/~~~~/01-express/static에 클라이언트가 /public 이라는 이름으로 들어올 수 있다. 

// get 메소드 (http 메소드) : 클라이언트가  요청할 수 있는 방법들을 정의함. 
// localhost:8000/  ==> 이 주소에 대한 get 요청을 받겠다. 요청을 받았을 때 뭘 할 건지는 콜백함수로 정의한 것. 

// send : 값을 보냄
app.get('/', function (req,res) {
    // 응답 객체 내의 send 메소드 실행. 'hello express' 문자열을 응답으로 전송하겠다. 
    res.send('hello expresssss');
});
// http 메소드의 두번쨰 인자로 넘겨주는 콜백함수의 매개변수 2개
// 첫번쨰 매개번수 :  request 객체 (요청)
// 두번째 매개변수 :  response 객체 (응답)

// localhost:8000/test
app.get('/test', function (req, res) {
    // 응답 객체 내의 send 메소드 실행. 'hello express' 문자열을 응답으로 전송하겠다. 
    // res.send('<div style= color:red'> 안녕 </div>');
  console.log(__dirname)  // C:\Users\SBA\Desktop\github\sesac-ys-2\node-backend\01-express
  res.sendFile(__dirname + "/index.html");
 // res.sendFile("/.index.html"); -> 이게 상대경로
});

// localhost:8000/ejs
app.get("/ejs", function(req, res){ 
    // render 메소드의 기본 dir "./views" 이기 때문에 그냥 바로 아래에 있는 index.ejs 쓰면 됨
    // res render("index")
    res.render("test/index")
})

// localhost:8000/ejs2
app.get("/ejs2", function(req, res){ 
    // render 메소드의 기본 dir "./views" 이기 때문에 그냥 바로 아래에 있는 index.ejs 쓰면 됨
    // res render("index")
    res.render("index")
})

// localhost:8000/lily
app.get("/lily", function (req, res) {
    res.render("lily", { 
        name: "lily", 
        product: ["운동화", "후드집업", "스웨터"] 
    }); // name이라는 변수로 lily를 보낸 것
})


// 서버를 연다. 열고 어떤 함수를 불러올 건지? 콜백함수
// 서버를 열게 되면 localhost:8000
// 127.0.0.1:8000  (127.0.0.1는 내 컴퓨터를 가리킴)
app.listen(PORT, function() {
    console.log(`server open ${PORT}`);
});


