import { Component, createRef } from "react";

class ClassRef extends Component {
  input2 = createRef();

  // 콜백함수를 이용하여 ref를 지정했을 때, ref 변수를 사용하는 방법
  focusInput = () => {
    this.input.focus();
  };

  focusInput2 = () => {
    this.input2.current.focus();
  };

  render() {
    return (
      <>
        {/* 콜백함수를 이용하여 ref 지정 */}
        <input
          type="text"
          //ref라는 속성 만들기, 그리고 그 속성의 값으로 콜백함수를 넘김.
          ref={(ref) => {
            // ref에 콜백함수를 넘길 때 첫번째 매개변수는
            // 현재 ref가 걸려 있는 요소를 담고 있다. -> 이 (ref)를 어디다 담아둬야 사용할 수 있음
            // 그래서 this.input에 ref를 넣어준 것.
            this.input = ref;
          }}
        />
        <button type="button" onClick={this.focusInput}>
          버튼
        </button>

        <input type="text" ref={this.input2} />
        <button type="button" onClick={this.focusInput2}>
          버튼
        </button>
      </>
    );
  }
}

export default ClassRef;
