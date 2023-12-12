import { useSelector, useDispatch } from "react-redux";
import { Money } from "../components/Money";
import { deposit, withdraw } from "../store/AccountReducer";

export function MoneyContainer() {
  const amount = useSelector((state) => state.amount);
  const dispatch = useDispatch();
  return (
    <Money
      amount={amount}
      accountDeposit={(payload) => dispatch({ ...deposit(), payload: payload })}
      accountWithdraw={(payload) =>
        dispatch({ ...withdraw(), payload: payload })
      }
    />
  );
}
