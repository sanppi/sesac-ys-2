import { useState } from "react";
import { useRef } from "react";

function Practice4() {
  const input = useRef();
  const titleInput = useRef();

  const userInfo = [];
  const [list, setList] = useState(userInfo);
  const [newNumber, setNewNumber] = useState(1);
  const [newWriter, setNewWriter] = useState("");
  const [newTitle, setNewTitle] = useState("");

  const addNew = () => {
    const newObj = { number: newNumber, wrtier: newWriter, title: newTitle };
    if (newWriter == "") {
      input.current.focus();
    } else if (newTitle == "") {
      titleInput.current.focus();
    } else {
      const newList = list.concat(newObj);
      setList(newList);
      setNewNumber(newNumber + 1);
      setNewWriter("");
      setNewTitle("");
    }
  };

  return (
    <>
      <div style={{ border: "1px solid black", padding: "15px" }}>
        <label>작성자 : </label>
        <input
          type="text"
          ref={input}
          placeholder="작성자"
          value={newWriter}
          onChange={(e) => {
            setNewWriter(e.target.value);
          }}
        />
        <label>제목 : </label>
        <input
          type="text"
          ref={titleInput}
          placeholder="제목"
          value={newTitle}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
        <button onClick={addNew}> 작성</button>
      </div>

      <br />

      <table width={400}>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
        </tr>

        {list.map((value) => {
          return (
            <tr key={value.number}>
              <td>{value.number}</td>
              <td>{value.wrtier}</td>
              <td>{value.title}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default Practice4;
