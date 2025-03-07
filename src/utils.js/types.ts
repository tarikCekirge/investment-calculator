export type InvestmentParams = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

export type InvestmentResult = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
};

export type InvestmentItem = InvestmentParams & {
  results: InvestmentResult[];
};

export type InvestmentState = {
  items: InvestmentItem[];
};
