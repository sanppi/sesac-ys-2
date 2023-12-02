import { useState } from "react";

function Practice1() {
  const infoList = [
    { name: "코디", email: "codi@gmail.com" },
    { name: "이산하", email: "sanha@gmail.com" },
  ];

  const [list, setList] = useState(infoList);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const addInfo = () => {
    const newObj = { name: newName, email: newEmail };
    const newList = list.concat(newObj);
    setList(newList);
    setNewName("");
    setNewEmail("");
  };

  const deleteProduct = (name) => {
    const newList = list.filter((value) => value.name != name);
    setList(newList);
  };

  return (
    <>
      <input
        type="text"
        placeholder="이름"
        value={newName}
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="이메일"
        value={newEmail}
        onChange={(e) => {
          setNewEmail(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addInfo();
          }
        }}
      />
      <button onClick={addInfo}>등록</button>
      <br />

      <ul>
        {list.map((value) => {
          return (
            <li
              style={{ cursor: "pointer" }}
              key={value.name}
              onDoubleClick={() => {
                deleteProduct(value.name);
              }}
            >
              {value.name} : {value.email}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Practice1;
