import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// as -> 타입 단언
// ts 컴파일러가 null, undefined가 가능하다라고 해석하고 있고,
// 여러분들은 #root가 존재한다고 단언할 수 있는 상황이라서 타입 단언한 것임.

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
