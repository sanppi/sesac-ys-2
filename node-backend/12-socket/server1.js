const http = require("http");
const express = require("express");
const app = express();
// 소켓이 http 모듈로 생성된 서버에서만 동작함. 그래서 server 만들어 준 것.
const server = http.createServer(app);
const PORT = 8000;

//소켓 객체
const io = require("socket.io")(server);
// const Socket = require("socket.io")
// const io = Socket(server)

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("client1");
});

// 클라이언트들이 들어오면 어떤 이벤트 할것인지
io.on("connection", (socket) => {
  // 콜백함수의 매개변수에 들어와 있는 윗줄 socket 객체는?
  // 접속한 클라이언트의 소켓이다.
  console.log("socket id", socket.id);

  // on을 이용해, 클라이언트에서 socket을 이용해서 보내준 데이터를
  // 받을 이벤트를 등록함.
  socket.on("hello", (res) => {
    // res: socket을 이용해 보내준 데이터를 받아올 수 있음.
    console.log(res);
    socket.emit("bye", { msg: "안녕히 가세요~" });
  });

  socket.on("entry", (res) => {
    console.log(res);
    io.emit("notice", { msg: `${socket.id}님이 입장했습니다.` });
  });

  socket.on("hello1", (res) => {
    console.log(res);
    socket.emit("hellores", { msg: "hello: 안녕하세요" });
  });

  socket.on("study", (res) => {
    console.log(res);
    socket.emit("studyres", { msg: "study: 공부하세요" });
  });

  socket.on("bye", (res) => {
    console.log(res);
    socket.emit("byeres", { msg: "bye: 잘가~" });
  });
});

server.listen(PORT, function () {
  console.log(`Server Open: ${PORT}`);
});
