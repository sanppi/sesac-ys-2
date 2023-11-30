import { useState } from "react";

function EventFunc2() {
  const [msg, setMsg] = useState("안녕하세요");
  const [btn, setBtn] = useState("사라져라");

  function button() {
    if (msg === "안녕하세요") {
      setMsg("");
      setBtn("보여라");
    } else {
      setMsg("안녕하세요");
      setBtn("사라져라");
    }
  }

  return (
    <>
      <h3>이벤트 핸들링 실습3</h3>
      <div>
        {msg}
        <button onClick={button}>{btn}</button>
      </div>
    </>
  );
}

export default EventFunc2;
