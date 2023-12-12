// if isDataReducer에도 increment 있으면 dispatch에서 둘다 실행시키거나.. 원하는 결과를 내지 못할 수 있으니
// key값을 counter/INCREMENT 이렇게 붙여줘서 구분 할 수 있게 하는 것.
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// 발생할 수 있는 action을 return 하는 함수
// 왜 ? 액션 타입의 이름이 바뀐다라고 가정하면, 액션을 발생시키는 모든 곳에서(dispatch 함수를 사용한 모든 곳들)
// action.type을 전부 다 바꿔줘야 함. 이를 해결하기 위해 만듦.
// 이렇게 함수를 만들어 두면 위의 상수들만 바꾸면 가능
// const INCREMENT = "counter/INCREMENT";
// const DECREMENT = "counter/DECREMENT"; -> 얘네만 변경하면 된다.

export const increase = () => ({ type: INCREMENT }); // 미리 발생할 액션을 함수로 정의해둠.객체를 return 할 것임
export const decrease = () => ({ type: DECREMENT });

const initialValue = { number: 100 }; // 초기값

const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "INCREMENT": // 상수선언전 ver.3. 원래라면 아래줄만 하면 되는데 AppRedux2.js에서 INCREMENT 쓴거있었어서 살려두는 것.
    case INCREMENT: // 상수선언후 ver 3-1. (근데 이렇게 두면 둘다 처리 가능함. )
      return { number: state.number + 1 };
    case "DECREMENT":
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state; // initialValue로 state가 초기화됨.
  }
};

export default counterReducer;
