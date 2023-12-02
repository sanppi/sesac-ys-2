import "./App.css";
import ClassRef from "./components/ClassRef";
import FuncRef from "./components/FuncRef";
import ListMap from "./components/ListMap";
import Practice1 from "./components/실습_map1";
import Practice3 from "./components/실습_map3";
import ScrollBox from "./components/ScrollBox";
import Practice4 from "./components/실습_ref";

function App() {
  return (
    <div>
      <ListMap />
      <Practice1 />
      <Practice3 />
      <FuncRef />

      <br />
      <ClassRef />
      <br />
      <ScrollBox />
      <br />
      <Practice4 />
    </div>
  );
}

export default App;
