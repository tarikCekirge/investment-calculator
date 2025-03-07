import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  InvestmentParams,
  InvestmentResult,
  InvestmentState,
} from "../utils.js/types";
import { calculateInvestmentResults } from "../utils.js/investment";

const initialState: InvestmentState = {
  item: null, // Başlangıçta item null
};

export const calculateSlice = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    calculateInvestment: (state, action: PayloadAction<InvestmentParams>) => {
      const result: InvestmentResult[] = calculateInvestmentResults(
        action.payload
      );
      state.item = { ...action.payload, results: result };
    },
    resetInvestment: (state) => {
      state.item = null;
    },
  },
});

export const { calculateInvestment, resetInvestment } = calculateSlice.actions;
export default calculateSlice.reducer;
