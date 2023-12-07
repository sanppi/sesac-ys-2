import { useMemo, useState } from "react";

// useMemo : Rendering 할 때, 불필요한 연산을 방지해주는 hook

export default function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  //   const [list, setList] = useState([]); -> 이런 경우에도 예를 들어 이 list의 sum을 calc처럼 함수로 해서 값 계산.

  //   [before]
  //   count state가 변경되지 않아도, rendering 될 때마다 다시 연산을 함. text 바뀔때도 calc 연산함.  => 비효율
  //   => count가 변경될 때만 연산을 하도록 하고 싶음.
  //   const calc = () => {
  //     console.log("calc.......");
  //     return count * 2;
  //   };

  //   [after]
  //   useMemo(콜백함수, 의존성 배열), 특정값을 기억하고 있다가 변경이 없으면 그 값을 다시 사용하고, 변경이 있으면 다시 연산
  //   useMemo : 불필요한 연산을 방지, 값을 기억함. count의 변경이 있을 때만 다시 연산하여 calc에 담음.
  //   의존성배열에 담긴 count 변수가 변할 때만 다시 연산.
  const calc = useMemo(() => {
    console.log("calc.......");
    return count * 2;
  }, [count]);

  return (
    <>
      <h3> useMemo 공부</h3>
      <div>
        count: {count} <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
      {/* useMemo를 사용하지 않을 경우 */}
      {/* <div>calc : {calc()} </div>*/}
      <div>calc : {calc} </div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}
