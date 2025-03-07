import { configureStore } from "@reduxjs/toolkit";
import { calculateSlice } from "./calculate-slice";

export const store = configureStore({
  reducer: {
    calculate: calculateSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
