import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import balanceReducer from "./balanceSlice";
import localeReducer from "./localeSlice";

const persistedBalanceReducer = persistReducer(
  {
    key: "balance",
    storage,
    whiteList: ["value"],
  },
  balanceReducer
);

const persistedLocaleReducer = persistReducer(
  {
    key: "locale",
    storage,
  },
  localeReducer
);

export const store = configureStore({
  reducer: {
    balance: persistedBalanceReducer,
    locale: persistedLocaleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Так робиться один кореневий редюсер, в якому описуються всі операції. Ми замінили цей один кореневий редюсер на різні balanceReducer і localeReducer і зробили композицію
// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         ...state,
//         balance: {
//           value: state.balance.value + action.payload,
//         },
//       };
//     case "balance/withdraw":
//       return {
//         ...state,
//         balance: {
//           value: state.balance.value - action.payload,
//         },
//       };
//     case "balance/reset":
//       return {
//         ...state,
//         balance: {
//           value: 0,
//         },
//       };
//     case "locale/changeLang":
//       return {
//         ...state,
//         locale: {
//           lang: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
