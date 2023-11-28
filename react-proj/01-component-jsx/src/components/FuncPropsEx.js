// 1. props 매개변수
// function FuncPropsEx(props) {
//   // props = {
//   //     title: "SeSAC",
//   //     content: "hello world",
//   // };

//   return (
//     <>
//       <div>함수형 컴포넌트를 이용 (Props) </div>
//       <div>
//         제목은 {props.title}, 내용은 {props.content}
//       </div>
//     </>
//   );
// }

// 2. 컴포넌트 내에서 props 매개변수 구조 분해
// function FuncPropsEx(props) {
//   const { title, content } = props;
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용 (Props) </div>
//       <div>
//         제목은 {props.title}, 내용은 {props.content}
//       </div>
//     </>
//   );
// }

// 3. 매개변수로 props를 받아올 때부터 구조 분해
// function FuncPropsEx({ title, content }) {
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용 (Props) </div>
//       <div>
//         제목은 {props.title}, 내용은 {props.content}
//       </div>
//     </>
//   );
// }

// 4. prototype을 이용해서 어떤 props가 넘어올지 명시 방법
// 유연한 js의 특징으로 인해 예기치 못한 오류가 발생
import PropTypes from "prop-types";

function FuncPropsEx({ title, content, number }) {
  return (
    <>
      <div>함수형 컴포넌트를 이용 (Props) </div>
      <div>
        제목은 {title}, 내용은 {content}, 숫자는 {number}
      </div>
    </>
  );
}

FuncPropsEx.defaultProps = {
  title: "코딩온",
};

FuncPropsEx.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  number: PropTypes.number,
};

export default FuncPropsEx;
