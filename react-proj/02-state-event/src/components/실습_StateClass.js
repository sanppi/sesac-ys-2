import { Component } from "react";

class StateClass1 extends Component {
  state = {
    number: 0,
  };

  render() {
    return (
      <>
        <div>
          숫자: {this.state.number}
          <button
            onClick={() => {
              this.setState((prevState) => ({ number: prevState.number + 1 }));
              this.setState((prevState) => ({ number: prevState.number + 1 }));
            }}
          >
            +2
          </button>
          <button
            onClick={() => {
              this.setState((prevState) => ({
                number: prevState.number - 1,
              }));
            }}
          >
            {" "}
            -1{" "}
          </button>
        </div>
      </>
    );
  }
}

export default StateClass1;
