import { useCalculateSElector } from "../store/hooks";
import { formatter } from "../utils.js/investment";
import { InvestmentItem } from "../utils.js/types";

const Results = () => {
    const calculateItem = useCalculateSElector<InvestmentItem | null>(
        state => state.calculate.item
    );

    if (!calculateItem) {
        return null;
    }

    return (
        <div className="px-6">
            <table className="table-fixed w-full mx-auto">
                <thead>
                    <tr className="text-lg font-bold text-[#003A72]">
                        <td>Year</td>
                        <td>Investment Value</td>
                        <td>Interest(Year)</td>
                        <td>Total Interest</td>
                        <td>Investment Capital</td>
                    </tr>
                </thead>
                <tbody>
                    {calculateItem.results.map((result) => {
                        const totalInterest = result.valueEndOfYear - (result.annualInvestment * result.year + calculateItem.initialInvestment);
                        const totalAmountInvested = result.valueEndOfYear - totalInterest;
                        return (
                            <tr key={result.year}>
                                <td>{result.year}</td>
                                <td>{formatter.format(result.valueEndOfYear)}</td>
                                <td>{formatter.format(result.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Results;
