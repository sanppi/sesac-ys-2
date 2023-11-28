import { Component } from "react";
import PropTypes from "prop-types";

class ClassPropsEx extends Component {
  render() {
    return (
      <>
        <div>클래스형 컴포넌트를 이용 (Props) </div>
        <div>
          제목은 {this.props.title}, 내용은 {this.props.content}, 숫자는{" "}
          {this.props.number}
        </div>

        <div>
          <h3>{this.props.text}</h3>
          <button type="button" onClick={this.props.valid}>
            valid
          </button>
          <br />
          <br />
          <br />
        </div>
      </>
    );
  }
}

//   static defaultProps = {
//     name: "코딩온",
//   };

//   static propTypes = {
//     title: PropTypes.string,
//     content: PropTypes.string.isRequired,
//     number: PropTypes.number,
//   };
// }

ClassPropsEx.defaultProps = {
  name: "코딩온",
  text: "이건 기본 text props입니다.",
};

ClassPropsEx.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  number: PropTypes.number,
  text: PropTypes.string.isRequired,
};

export default ClassPropsEx;
