// 프론트엔드 측 코드
import io from "socket.io-client";
import { useEffect, useRef } from "react";

// autoConnect: false => 계속 연결되는 거 방지하기 위해서 fasle로 일단 두기
const socket = io.connect("http://localhost:8000/", { autoConnect: false });
export default function Practice1() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    initSocketConnect();

    // mount되는 시점에 이벤트 등록하려고 여기에 적음
    socket.on("resHello", (res) => {
      console.log(res);
      resultMsg(res); // resultMsg 호출하기
    });
  }, []);

  const resultMsg = (res) => {
    result.current.innerText = res.msg;
  };

  const hello = () => {
    socket.emit("hello", { msg: "hello" });
  };
  const study = () => {
    socket.emit("study", { msg: "study" });
  };
  const bye = () => {
    socket.emit("bye", { msg: "bye" });
  };

  const result = useRef(null);

  return (
    <>
      <h3>소켓 실습 1</h3>
      <button onClick={hello}>hello</button>
      <button onClick={study}>study</button>
      <button onClick={bye}>bye</button>
      <p ref={result}></p>
    </>
  );
}
