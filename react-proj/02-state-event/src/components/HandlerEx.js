import { Component } from "react";

class EventClass1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Hello World!",
    };
  }
  handleOnClickBye = () => {
    this.setState({ msg: "Goodbye World!" });
  };

  render() {
    return (
      <>
        {this.state.msg}
        <button onClick={this.handleOnClickBye}>button</button>
      </>
    );
  }
}

export default EventClass1;
