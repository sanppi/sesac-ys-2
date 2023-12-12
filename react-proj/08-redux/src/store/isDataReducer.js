const initialValue = false;

const isDataReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "CHANGE":
      return !state; // false면 true로, true면 false로 return
    default:
      return state;
  }
};

export default isDataReducer;
