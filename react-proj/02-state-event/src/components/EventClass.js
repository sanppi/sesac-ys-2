import { Component } from "react";

class EventClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // class의 this
      msg: "hello",
    };

    //  함수 선언문을 사용하여 메소드를 만들 때,
    //  메소드 내부에서 클래스의 this를 사용하고 싶을 경우에, 생성자 내에서
    //  함수에 this를 직접 바인드 해주는 작업을 거쳐야 함.
    //  정리: 함수선언문을 이용하여 선언된 메소드는 this객체를 직접 바인딩 해줘야지
    //  handleOnClick 내부에서 클래스를 가리키고 있는 this를 사용할 수 있다.
    this.handleOnClick = this.handleOnClick.bind(this); // bind는 함수에 인자를 넘겨줌. 여기선 클래스의 this임.
  }

  //   함수선언문!!!!!!!!!!!!을 사용하여 메소드를 정의함
  //   함수 내부에서 "자체적인 this"를 만들 수 있고,this가 클래스의 this가 아니게 됨
  //   클래스의 this로 가져오기 위해선 함수선언문에서는 바인딩이 필수임.
  //   해결법1. 생성자 내부에서 this를 원하는 것으로 바인딩
  //   해결법2. 함수표현식을 사용한다.
  //   함수 선언문은 동적 바인딩을 하기 때문에 함수가 사용될 때 this가 결정 된다.

  handleOnClick() {
    this.setState({ msg: "bye" }); // setState는 클래스의 메소드이기 때문에 여기서 this를 사용한 것. 클래스의 this임.
  }

  //   함수 표현식!!!!!!!!!!!!!!!
  //   함수 표현식은 함수가 선언될 때(함수가 이 코드를 읽고 있을 때) this를 결정지음.
  //   handleOnClick = () => {}
  //   this는 부모의 this라 얘는 클래스의 this임.
  //   handleOnClick2 = () => {
  //   console.log(this)
  //   this.setState({ msg: "bye" });
  //   };
  //    바인딩 필요하지 않음. 정적 바인딩 됨.
  handleOnClickHello = (e) => {
    console.log(e);
    this.setState({ msg: "hello" });
  };

  render() {
    return (
      <>
        <h3>클래스형 컴포넌트 event handling 공부</h3>

        {this.state.msg}
        <button onClick={this.handleOnClick}>잘 가</button>
        <button onClick={this.handleOnClickHello}>안녕</button>

        <button
          onClick={(e) => {
            // e는 리액트 합성 이벤트 객체. 합성이벤트에 대한 모든 정보를 담고 있음.
            // 그 중에 target이라는 것에 접근을 하면, 이벤트가 걸린 태그를 확인할 수 있음.
            console.log(e.target);
            console.log(e.type);
          }}
        >
          test
        </button>
      </>
    );
  }
}

export default EventClass;
