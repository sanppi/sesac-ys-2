import { useState } from "react";

export function Money({ amount, accountDeposit, accountWithdraw }) {
  const [input, setInput] = useState("");

  const plus = () => {
    accountDeposit(Number(input));
    setInput("");
  };

  const minus = () => {
    accountWithdraw(Number(input));
    setInput("");
  };

  return (
    <>
      <h1>코딩온 은행</h1>
      <h2>잔액 : {amount}원</h2>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={plus}>입금</button>
      <button onClick={minus}>출금</button>
    </>
  );
}
