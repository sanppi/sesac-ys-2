import { useState } from "react";

function EventFunc1() {
  const [msg, setMsg] = useState("검정색 글씨");
  const [textcolor, setColor] = useState("");
  function red() {
    setMsg("빨간색 글씨");
    setColor("red");
  }
  function blue() {
    setMsg("파란색 글씨");
    setColor("blue");
  }

  return (
    <>
      <h3>이벤트 핸들링 실습2</h3>
      <div>
        <h2 style={{ color: textcolor }}>{msg}</h2>
        <button onClick={red}>빨간색</button>
        <button onClick={blue}>파란색</button>
      </div>
    </>
  );
}

export default EventFunc1;
