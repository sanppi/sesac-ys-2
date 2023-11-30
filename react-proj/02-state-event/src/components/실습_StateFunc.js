import { useState } from "react";

function StateFunc1() {
  const [number, setNumber] = useState(0);
  function increase() {
    setNumber((prevNumber) => prevNumber + 1);
  }
  function decrease() {
    setNumber((prevNumber) => prevNumber - 2);
  }

  return (
    <>
      <div>
        숫자: {number}
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-2</button>
      </div>
    </>
  );
}

export default StateFunc1;
