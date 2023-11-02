// 서버 실행시키는 코드

const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
// app.use( "/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));
app.use( express.json() );

const router = require("./routes"); // index.js라 폴더이름까지만 쓴 것
app.use('/', router);

app.get('*', (req,res) =>{
    res.send("접근할 수 없는 주소입니다.");
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});
