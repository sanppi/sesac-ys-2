const http = require("http");
const express = require("express");
const app = express();
// 소켓이 http모듈로 생성된 서버에서만 동작
const server = http.createServer(app);
const PORT = 8000;

// cors 이슈 : 다른 서버에서 보내는 요청을 제한함
const cors = require("cors");
app.use(cors());

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const userIdArr = {};
// { "socket.id": "userIda", "socket.id": "userIdb" ,"socket.id": "userIdc"  }

const updateUserList = () => {
  io.emit("userList", userIdArr);
};

io.on("connection", (socket) => {
  console.log("socket id", socket.id);
  // abcdjfkladjflaksjrlew
  // [실습 3번] socket id를 이용해 입장 공지
  // io.emit("notice", { msg: `${res.userId}님이 입장하셨습니다.` });
  // io.emit("notice", { msg: `${socket.id}님이 입장하셨습니다.` });

  // [실습 3-3]: 퇴장시키기 -> 누가 입장했는지 기록해놔야 하니깐, 그걸 저장하기 위해 만들었던 것.
  // 해당 정보를 전체적으로 저장할 필요가 있었다.
  // userIdArr[socket.id] = res.userId;

  // [실습 3-1번] 입장 시에 받은 user id로 입장 공지
  socket.on("entry", (res) => {
    // [실습 3-2]
    // value만 모아서 배열을 만들 수 있는 메소드.
    // => Object.values(userIdArr) => ["userIda", "userIdb", "userIdc"]
    // includes: 문자열이나 배열에서 인자로 넘겨준 값이 존재하는지 안하는지 찾을 수 있음.
    // indexOf : 배열에서 인자로 넘겨준 값의 인덱스를 추출, 없다면 -1을 반환하는 함수. -> include 대신 이걸 사용할 수도 있음.

    if (Object.values(userIdArr).includes(res.userId)) {
      // 닉네임이 중복될 경우에
      socket.emit("error", {
        msg: "중복된 아이디가 존재하여 입장이 불가합니다.",
      });
    } else {
      // 중복되지 않을 경우에 (정상적으로 입장)
      io.emit("notice", { msg: `${res.userId}님이 입장하셨습니다.` });
      // 성공했을 때. io아닌 socket사용하는 이유는 한 사람한테만 알려주면 되니깐.
      socket.emit("entrySuccess", { userId: res.userId });
      userIdArr[socket.id] = res.userId;
      updateUserList();
    }
    console.log(userIdArr);
  });

  // [실습 3-3] 퇴장시키기
  socket.on("disconnect", () => {
    io.emit("notice", { msg: `${userIdArr[socket.id]}님이 퇴장하셨습니다.` });
    delete userIdArr[socket.id];
    updateUserList();
  });

  // [실습 4, 5번]
  socket.on("sendMsg", (res) => {
    if (res.dm === "all")
      io.emit("chat", { userId: res.userId, msg: res.msg }); // 전체에게 메세지
    else {
      // io.to(소켓아이디).emit() => 원하는 특정 사람 선택하기, res.dm이 소켓아이디를 담고 있음
      io.to(res.dm).emit("chat", {
        userId: res.userId,
        msg: res.msg,
        dm: true,
      });
      // 서버에서 client에게 다시 메세지를 보낼때는 dm인 메세지라는 걸 표시하가 위해서 true로
      // 아래는 나에게 보내는 dm임
      socket.emit("chat", { userId: res.userId, msg: res.msg, dm: true });
    }
  });
});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
