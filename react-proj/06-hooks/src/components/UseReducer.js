import { useReducer, useState, useCallback } from "react";

const initialValue = { value: 0 }; // 초기값
// useState 저기에 넣으려고 선언, action에 따라 state값으르 변경시킬 것.
// action의 타입이 plus이면 다음 state값을 return할 예정. state 객체로 선언해놨었음. const initialValue = { value: 0 };
const reducer = (prevState, action) => {
  switch (
    action.type // action은 객체로 넘길 예정
  ) {
    case "PLUS":
      return { value: prevState.value + 1 }; // +1 해서 다음 state값으로 만들 것임.
    case "MINUS":
      return { value: prevState.value - 1 };
    case "RESET":
      return initialValue;
    case "MULTIPLY":
      return { value: prevState.value * action.number };
    case "DIVIDE":
      return { value: prevState.value / action.number };
    default:
      return { value: prevState.value };
  }
};

// state: 상태, 변수명 바꾸는 것 가능.
// dispatch: 액션을 발생시키는 함수.
// reducer: 상태를 업데이트 하는 함수
// 결국 dispatch가 실행시키는 함수는 reducer.

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [number, setNumber] = useState(0);

  const handleChangeNumber = useCallback((e) => setNumber(e.target.value), []);

  const plus = () => dispatch({ type: "PLUS" }); //   plus를 발생시킬 함수를 정의한 것..?
  const minus = () => dispatch({ type: "MINUS" });
  const reset = () => dispatch({ type: "RESET" });
  const multiply = () => dispatch({ type: "MULTIPLY", number: number });
  const divide = () => dispatch({ type: "DIVIDE", number: number });
  // 그냥 number 쓸수는 없고 액션과 같이 넘겨주면 됨.

  // 지금은  +, -, 초기화만 하고 있지만,
  // 만약에 곱하기, 나누기 등등 더 많은 연산을 이용한다고 하면?
  // 또 컴포넌트 자체가 복잡해져서 코드가 길어진다면?
  // state의 변화를 추적하고 싶음 -> setState 검색해서 일일이 확인해야 함. (+1도 되고.. -1 되고 있구나.)
  // but,  reducer를 사용한다면 reducer로 걸어둔 함수만 읽으면 한번에 다 추적할 수 있음. (+1, -1, *1 등등 다 되는구나!)
  //   const [state, setState] = useState(initialValue);
  //   const plus = () => {
  //     setState({ value: state.value + 1 });
  //   };
  //   const minus = () => {
  //     setState({ value: state.value - 1 });
  //   };
  //   const reset = () => {
  //     setState(initialValue);
  //   };

  return (
    <>
      <h3>UseReducer 공부</h3>
      <div>
        {state.value}
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
        <button onClick={reset}>reset</button>
        <br />
        <input type="number" value={number} onChange={handleChangeNumber} />
        <button onClick={multiply}>곱하기</button>
        <button onClick={divide}>나누기</button>
      </div>
    </>
  );
}
