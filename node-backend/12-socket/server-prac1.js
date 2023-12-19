// 서버 측 코드

const http = require("http");
const express = require("express");
const app = express();
// 소켓이 http 모듈로 생성된 서버에서만 동작함. 그래서 server 만들어 준 것.
const server = http.createServer(app);
const PORT = 8000;

// cors 이슈 : 다른 서버에서 보내는 요청을 제한함.
// 클라이언트, 백엔드 서버를 따로 두면 다른 서버가 되니깐, 프론트엔드 서버는 요청 허용해도 된다는 권한을 주는 모듈.
const cors = require("cors");
app.use(cors()); // cors 사용할 수 있게끔 등록하는 과정

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000", // 허용할 주소
    // methods: ["GET", "POST"], // 어떤 요청을 허용할 것인지 적어주기
  },
});

io.on("connection", (socket) => {
  console.log("socket id", socket.id);
  socket.on("hello", (res) => {
    console.log(res);
    socket.emit("resHello", { msg: "안녕하세요" });
  });
});

server.listen(PORT, function () {
  console.log(`Server Open: ${PORT}`);
});
