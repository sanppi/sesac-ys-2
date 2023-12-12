import "./App.css";
// import { useDispatch, useSelector } from "react-redux";
// import { increase, decrease } from "./store/counterReducer";
// import { deposit, withdraw } from "./store/AccountReducer";
import { Box1Container } from "./containers/BoxesContainer";
import { MoneyContainer } from "./containers/MoneyContainer";

// containers 폴더
// redux store에 직접적으로 접근하는 컴포넌트를 모아두기 위해서.

// components 폴더 (보통 presentational 컴포넌트만 저장)
// redux store에 직접적으로 접근하지 안흔 컴포넌트들만 모아둠.
// 컴포넌트 개별적으로 작동한다든지, ui적인 부분들 컴포넌트

function AppRedux3() {
  return (
    <div>
      <Box1Container />
      <MoneyContainer />
    </div>
  );
}

export default AppRedux3;
