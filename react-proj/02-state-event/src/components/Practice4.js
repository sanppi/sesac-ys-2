import ColorSelect from "./ColorSelect";
import { useState } from "react";

function Practice4() {
  const [fruit, setFruit] = useState("사과");
  const [bgColor, setBgColor] = useState("black");
  const [color, setColor] = useState("white");
  const [content, setContent] = useState("text");

  return (
    <>
      <label>과일</label>
      <select
        onChange={(e) => {
          setFruit(e.target.value);
        }}
      >
        <option value="사과">사과</option>
        <option value="바나나">바나나</option>
        <option value="포도">포도</option>
        <option value="복숭아">복숭아</option>
      </select>

      <ColorSelect
        mode="배경"
        onChangeHandler={(e) => {
          setBgColor(e.target.value);
        }}
      />

      <ColorSelect
        mode="글자"
        onChangeHandler={(e) => {
          setColor(e.target.value);
        }}
      />

      <br />
      <label>내용: </label>
      <input
        type="text"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />

      <br />

      <img src={`/image/${fruit}.jpg`} width={200} />

      <div style={{ backgroundColor: bgColor, color: color }}>{content}</div>
    </>
  );
}

export default Practice4;
