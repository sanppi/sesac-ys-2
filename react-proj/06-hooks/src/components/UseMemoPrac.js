import { useState, useMemo } from "react";

export default function UseMemoPrac() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const count = useMemo(() => {
    if (text.trim() && search.trim()) {
      const words = text.split(" ");
      return words.filter((w) => w.includes(search)).length;
    }
    return 0;
  }, [text, search]);

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>
        {search} 단어의 빈도수: {count}
      </p>
    </>
  );
}
