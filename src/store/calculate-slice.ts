import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  InvestmentParams,
  InvestmentResult,
  InvestmentState,
} from "../utils.js/types";
import { calculateInvestmentResults } from "../utils.js/investment";

const initialState: InvestmentState = {
  items: [],
};

export const calculateSlice = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    calculateInvestment: (state, action: PayloadAction<InvestmentParams>) => {
      const result: InvestmentResult[] = calculateInvestmentResults(
        action.payload
      );
      state.items.push({
        ...action.payload,
        results: result,
      });
    },
  },
});

export const { calculateInvestment } = calculateSlice.actions;
export default calculateSlice.reducer;
