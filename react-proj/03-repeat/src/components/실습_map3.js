import { useState } from "react";

function Practice3() {
  const userInfo = [];
  const [list, setList] = useState(userInfo);
  const [newNumber, setNewNumber] = useState(1);
  const [newWriter, setNewWriter] = useState("");
  const [newTitle, setNewTitle] = useState("");

  const searchInfo = [];
  const [slist, setsList] = useState(searchInfo);
  const [sNumber, setsNumber] = useState(1);
  const [sWriter, setsWriter] = useState("");
  const [sTitle, setsTitle] = useState("");

  const addNew = () => {
    const newObj = { number: newNumber, wrtier: newWriter, title: newTitle };
    const newList = list.concat(newObj);
    setList(newList);
    setNewNumber(newNumber + 1);
    setNewWriter("");
    setNewTitle("");
  };

  const Search = () => {
    const newObj1 = { snumber: sNumber, wrtier: sWriter, stitle: sTitle };
    const newList1 = slist.concat(newObj1);
    setsList(newList1);
    setsNumber(sNumber + 1);
    setsWriter("");
    setsTitle("");
  };

  const showAll = () => {};

  const showSearchData = () => {};

  return (
    <>
      <div style={{ border: "1px solid black", padding: "15px" }}>
        <label>작성자 : </label>
        <input
          type="text"
          placeholder="작성자"
          value={newWriter}
          onChange={(e) => {
            setNewWriter(e.target.value);
          }}
        />
        <label>제목 : </label>
        <input
          type="text"
          placeholder="제목"
          value={newTitle}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
        <button onClick={addNew}> 작성</button>
      </div>

      <br />
      <div>
        <select name="writer">
          <option value="작성자">작성자</option>
          <option value="제목">제목</option>
        </select>
        <input type="text" placeholder="검색어" />
        <button onClick={Search}>검색</button>
        <button onClick={showAll}>전체</button>
      </div>
      <br />

      <div>{}</div>
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

      <table width={400}>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
        </tr>

        {list.map((value) => {
          return (
            <tr key={value.snumber}>
              <td>{value.snumber}</td>
              <td>{value.swrtier}</td>
              <td>{value.stitle}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default Practice3;
