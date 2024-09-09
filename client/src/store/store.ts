import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import apiService from "../api/api";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: apiService,
      },
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = any; //typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

// No puedo usar AppDispatch ni RootState porque produce una referencia ciclica
export type ThunkApi = {
  dispatch: (action: any) => any;
  getState: () => any;
  extra: any;
  requestId: string;
  signal: AbortSignal;
  rejectWithValue: (value: any) => any;
  fulfillWithValue: (value: any) => any;
};

export default store;
