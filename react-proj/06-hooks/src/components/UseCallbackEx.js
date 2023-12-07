import { useCallback, useState } from "react";

// useCallback : 함수를 기억함.
// 컴포넌트가 렌더링 될 때, 컴포넌트 내부에 있는 함수도 다시 선언하게 됨.
// 다시 선언할 필요가 없는 함수는 다시 선언하지 않고, 이전에 선언한 함수를 사용할 수 있으면 좋음
// 이걸 도와주는 게 useCallback 이다.

export default function UseCallbackEx() {
  const [text, setText] = useState("");

  // 의존성 배열이 빈값일 경우, 처음 마운트 될 때 선언된 함수를 계속 기억하고 있다가,
  // update 될 때 다시 선언하지 않고 기억하고 있는 함수를 사용함.
  // 컴포넌트 내부에서 변경될 수 있는 값은? 대표적으로 state, props가 있음.
  // handleOnChange라는 함수에서는 UseCallbackEx 컴포넌트에서 유일하게 변경될 수 있는 값인 text를 활용하고 있지 않음.
  const handleOnChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <>
      <h3>useCallback 공부</h3>

      <input type="text" value={text} onChange={handleOnChange} />
    </>
  );
}
