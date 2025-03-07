import { useCalculateSElector } from "../store/hooks";
import { InvestmentItem } from "../utils.js/types";

const Results = () => {
    const calculateItems = useCalculateSElector<InvestmentItem[]>(
        state => state.calculate.items
    ); // ✅ Şimdi Hook, bileşenin içinde

    return (
        <div>
            <h2>Results</h2>
            <pre>{JSON.stringify(calculateItems, null, 2)}</pre>
        </div>
    );
};

export default Results;
