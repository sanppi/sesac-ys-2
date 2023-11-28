import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FuncComponent from "./components/FuncComponent";
import FuncPropsEx from "./components/FuncPropsEx";
import Section from "./components/Section";
import ClassPropsEx from "./components/ClassPropsEx";
import FoodPropsEx from "./components/FoodPropsEx";

function App() {
  return (
    <div>
      {/* <FuncComponent /> */}
      {/* <FuncComponent></FuncComponent> */}
      {/* <ClassComponent /> */}
      <FuncPropsEx title="SeSAC" content="hello world" number={5} />
      {/* <FuncPropsEx number={5} /> */}

      <ClassPropsEx
        title="SeSAC"
        content="hello world"
        number={5}
        text="text입니다"
        valid={() => {
          console.log('"콘솔띄우기 성공!"');
        }}
      />

      <Section title="SeSAC 영역">
        <div>SeSAC 영역의 content입니다.</div>
      </Section>
      <Section title="코딩온 영역">
        <h5>코딩온 영역의 content입니다.</h5>
      </Section>

      <FoodPropsEx
        book="고양이가 세상을 구한다"
        author="이산하"
        price="5조"
        type="자기계발서"
      />
    </div>
  );
}

export default App;
