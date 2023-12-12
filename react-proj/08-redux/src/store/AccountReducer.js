const DEPOSIT = "account/DEPOSIT";
const WITHDRAW = "account/WITHDRAW";

export const deposit = () => ({ type: DEPOSIT });
export const withdraw = () => ({ type: WITHDRAW });

const initialValue = 0;

const accountReducer = (state = initialValue, action) => {
  const { payload, type } = action;
  console.log(`Action type: ${type}, Payload: ${payload}`);

  switch (type) {
    case DEPOSIT: // 입금
      return state + payload;
    case WITHDRAW: // 출금
      return state - payload;
    default:
      return state;
  }
};

export default accountReducer;
