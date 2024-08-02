//Slice = actions + reducers

// import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "balance",
  initialState: { value: 0 },
  reducers: {
    deposit(state, action) {
      state.value += action.payload;
    },
    withdraw(state, action) {
      state.value -= action.payload;
    },
    reset(state) {
      state.value = 0;
    },
  },
});

export const { deposit, withdraw, reset } = slice.actions;
export default slice.reducer;

//Ми створили createSlice замість окремого створення екшенів і редюсерів
// export const deposit = createAction("balance/deposit");

// export const deposit = (value) => {
//   return { type: "balance/deposit", payload: value };
// };

// export const withdraw = createAction("balance/withdraw");

// export const withdraw = (value) => {
//   return { type: "balance/withdraw", payload: value };
// };

// export const reset = createAction("balance/reset");

// export const reset = () => {
//   return { type: "balance/reset" };
// };

// export const balanceReducer = createReducer({ value: 0 }, (builder) => {
//   builder
//     .addCase(deposit, (state, action) => {
//       state.value += action.payload;
//     })
//     .addCase(withdraw, (state, action) => {
//       state.value -= action.payload;
//     })
//     .addCase(reset, (state) => {
//       state.value = 0;
//     });
// });

// export const balanceReducer = (state = { value: 0 }, action) => {
//   switch (action.type) {
//     case deposit.type:
//       return {
//         value: state.value + action.payload,
//       };
//     case withdraw.type:
//       return {
//         value: state.value - action.payload,
//       };
//     case reset.type:
//       return {
//         value: 0,
//       };
//     default:
//       return state;
//   }
// };
