// const FuncComponent = () => {
//     return <div>함수형 컴포넌트입니다.</div>;
// };

import image from "./react-logo.png";

function FuncComponent() {
  const text = "hello?";
  const name = "richard";
  const name1 = "꽁지";
  const animal = "고양이";
  const a = 10;
  const b = 3;
  const title = "hello world";

  const ifRenderTest = () => {
    if (name === "lily") {
      return <div>안녕하세요!</div>;
    } else if (name === "richard") {
      return "안녕하세요....";
    } else {
      return "누구세요?";
    }
  };

  const style = { fontSize: "20px", color: "red" };

  return (
    <>
      {/* 1. 하나의 태그로 감싸서 return */}
      <div>함수형 컴포넌트입니다.1</div>
      <div>함수형 컴포넌트입니다.2</div>

      {/* 2. js 문법 사용 가능 (변수) */}
      <h3>코딩온 {text} </h3>

      {/* 2. js 문법 사용 가능 (삼항 연산자를 조건에 따른 렌더링 - 간단한 것만) */}
      <h4>{name === "lily" ? "안녕하세요!" : "누구세요?"}</h4>

      {/* 2-1. 복잡한 조건을 이용하고 싶다면? -> 위에서 함수로 만들어 사용 */}
      <h4>{ifRenderTest()}</h4>

      {/* 2-2. 조건에 따른 렌더링 ( && ) */}
      <h5>{name === "richard" && "안녕하세요!"}</h5>

      {/* 3. inline style 적용 방법 > style 속성값으로 객체(중괄호) 전달 */}
      {/* <div style="font-size:'20px; color: red"></div> */}
      <div style={{ fontSize: "20px", color: "red" }}>hello</div>
      <div style={style}>hello</div>

      {/* 4. class와 onclick을 jsx에서 사용하기 */}
      {/* <div class="" onclick="함수();"> 원래 html에서 하던 방식. 이게 호출한 것. */}
      <div className="test-css">jsx에서 css사용하기(className)</div>

      {/* html에서는 함수를 '호출', jsx에서는 함수를 '선언'*/}
      <button
        onClick={() => {
          // 함수();
          console.log("hello");
        }}
      >
        버튼
      </button>

      {/* 5. 종료 태그 필수! */}
      <br />
      {/* / 경로가 public 폴더(정적 파일 경로) 안이다. */}
      <img src="/logo192.png" />

      {/* src 내부에 있는 이미지 사용할 때 -> 위에서 이미지를 import 해오기 */}
      <img src={image} />

      {/* 리액트실습 */}
      <h2>
        제 반려 동물의 이름은 {name1}입니다. <br />
        {name1}는 {animal}입니다.
      </h2>

      <h2>{3 + 5 == 8 ? "정답입니다!" : "오답입니다!"}</h2>

      <h5>{name === "richard" && "안녕하세요!"}</h5>

      <h2>{a > b && "a가 b보다 큽니다."}</h2>

      <h2 className="title">{title}</h2>
      <div>
        아이디<input></input>
      </div>
      <div>
        비밀번호<input></input>
      </div>
    </>
  );
}

export default FuncComponent;
