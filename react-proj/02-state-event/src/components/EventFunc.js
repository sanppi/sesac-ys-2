import { useState } from "react";

function Eventfunc() {
  const [msg, setMsg] = useState("hello");

  const handleOnClick = (e) => {
    console.log(e.target);
    setMsg("bye");
  };

  function handleOnClickHello() {
    setMsg("hello");
  }

  const handleOnClickTest = (message) => {
    setMsg(message);
  };

  const [name, setName] = useState("");

  const handleEnter = (e) => {
    if (e.key == "Enter") {
      console.log("엔터가 눌렸습니다!");
    }
  };

  return (
    <>
      <h3>함수형 컴포넌트 event handling 공부</h3>
      <div>
        {msg}
        <button onClick={handleOnClick}>잘가</button>
        <button onClick={handleOnClickHello}>안녕</button>

        {/* 함수에서 매겨변수를 받고 싶으면 어떻게 하나요? */}
        {/* 1. onClick에서 익명함수를 선언하고, 그 내부에서 함수를 실행시킨다. */}
        {/* 
        <button
          onClick={() => {
            handleOnClickTest("안녕?"); // 익명함수 하나 만들어서 실행시키고 싶은 것 넣기. 
          }}
        >
          테스트
        </button> */}

        {/* 2. bind를 이용한다. */}
        {/* bind의 첫 번째 매개변수는 .앞에 있는 함수(handleOnClickTest)의 this를 결정하는 걸로 정해져 있음. */}
        {/* 여기서는 this를 설정할 필요 없으니깐 그냥 null값을 넣은 것.  */}
        {/* 두번째 인자로 원하는 값을 넘겨주면 된다.  */}
        <button onClick={handleOnClickTest.bind(null, "안녕?")}>테스트</button>

        <br />

        {/* input 태그에서 엔터를 누르면 "엔터가 눌렀습니다!"라는 문구가 콘솔에 찍히도록  */}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onKeyDown={handleEnter}
        />
      </div>
    </>
  );
}

export default Eventfunc;
