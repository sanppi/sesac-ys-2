import { useState } from "react";
import "./App.css";
import UseCallbackEx from "./components/UseCallbackEx";
import UseMemoEx from "./components/UseMemoEx";
import UseCallbackEx2 from "./components/UseCallbackEx2";
import UseReducer from "./components/UseReducer";
import CustomHookEx from "./components/CustomHookEx";
import UseMemoPrac from "./components/UseMemoPrac";

function App() {
  const [postId, setPostId] = useState(1);
  return (
    <div>
      <UseMemoEx />
      <hr />
      <UseCallbackEx />
      <hr />
      <UseCallbackEx2 postId={postId} />
      <button onClick={() => setPostId(postId + 1)}>+1</button>
      <hr />
      <UseReducer />
      <hr />
      <CustomHookEx />
      <hr />
      <UseMemoPrac />
    </div>
  );
}

export default App;
