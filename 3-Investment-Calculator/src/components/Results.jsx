import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ input }) {
  const reultsData = calculateInvestmentResults(input);
  const initialInvestment =
    reultsData[0].valueEndOfYear -
    reultsData[0].interest -
    reultsData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr key="">
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {reultsData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountinvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountinvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
