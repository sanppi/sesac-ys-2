import PropTypes from "prop-types";

function FoodPropsEx({ food, reason, book, author, price, type }) {
  return (
    <>
      <div className="Food__section">
        <h3 className="Food__title">{food}</h3>
        <div>{reason}</div>
      </div>

      <div className="Book__section">
        <div className="Book__best">이번주 베스트셀러</div>
        <img src="/cat.jpg" />
        <h2 className="Book__title">{book}</h2>
        <div>
          저자: {author} <br />
          판매가: {price} <br />
          구분: {type}
        </div>
      </div>
    </>
  );
}

FoodPropsEx.defaultProps = {
  food: "카레",
  reason: "굉장히 맛있고 먹으면 건강해집니다^^",
};

FoodPropsEx.propTypes = {
  food: PropTypes.string,
  reason: PropTypes.string,
};

export default FoodPropsEx;
