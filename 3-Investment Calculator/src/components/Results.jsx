import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ input }) {
  const reultsData = calculateInvestmentResults(input);

  console.log(reultsData);
  return <div></div>;
}
