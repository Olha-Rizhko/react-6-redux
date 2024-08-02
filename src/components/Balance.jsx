import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, reset } from "../redux/balanceSlice";
import { useState } from "react";

export default function Balance() {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const credits = useSelector((state) => state.balance.value);

  const handleDeposit = () => {
    dispatch(deposit(value));
  };

  const handleWithdraw = () => {
    dispatch(withdraw(value));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <p>Balance: {credits} credits</p>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={handleDeposit}>Deposit {value} credits</button>
      <button onClick={handleWithdraw}>Withdraw {value} credits</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
