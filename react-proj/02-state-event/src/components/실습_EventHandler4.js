import { useState } from "react";

function EventFunc3() {
  const [fruit, setFruit] = useState("");
  const [backgroundColor, setBc] = useState("");
  const [textcolor, setColor] = useState("");
  const [content, setContent] = useState("");

  const selectFruit = (e) => {
    setFruit(e.target.value);
  };

  const selectBc = (e) => {
    setBc(e.target.value);
  };

  const selectColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div>
        과일:
        <select name="fruit" onChange={selectFruit}>
          <option value="사과">사과</option>
          <option value="바나나">바나나</option>
          <option value="복숭아">복숭아</option>
        </select>
        배경색:
        <select name="backgroundcolor" onChange={selectBc}>
          <option value="black">검정색</option>
          <option value="red">빨간색</option>
          <option value="blue">파란색</option>
        </select>
        글자색:
        <select name="textcolor" onChange={selectColor}>
          <option value="orange">주황색</option>
          <option value="purple">보라색</option>
          <option value="white">흰색</option>
        </select>
        <br />
        내용:
        <input
          type="text"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <br />
        <div>
          <img src={`/image/${fruit}.jpg`} alt={fruit} />
        </div>
        <br />
        <div
          style={{
            backgroundColor: backgroundColor,
            color: textcolor,
          }}
        >
          {content}
        </div>
      </div>
    </>
  );
}

export default EventFunc3;
