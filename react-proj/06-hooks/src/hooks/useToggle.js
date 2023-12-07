import { useState } from "react";

// toggle 기능이 자주 쓰이는데, true -> false, false -> true로 변화시켜
// 이에 따라 처리할 일이 자주 생긴다 라고 가정.
// 그 로직 자체를 hook으로 만들어 둘 것.

export default function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle]; // 배열로 return하고 있음.
}
