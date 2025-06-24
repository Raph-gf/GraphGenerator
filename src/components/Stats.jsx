import { Stat } from "./Stat";

export default function Stats({ data }) {
  const profits = data?.data?.table?.map(row => row.reporting?.profit ?? 0) || [];
  const payout = data?.data?.table?.map(row => row.reporting?.payout ?? 0) || [];
  const revenue = data?.data?.table?.map(row => row.reporting?.revenue ?? 0) || [];
  const cv = data?.data?.table?.map(row => row.reporting?.cv ?? 0) || [];
  const margin = data?.data?.table?.map(row => row.reporting?.margin ?? 0) || [];
  const epc = data?.data?.table?.map(row => row.reporting?.epc ?? 0) || [];

  const sumProfit = profits.reduce((sum, val) => sum + val, 0);
  const sumPayout = payout.reduce((sum, val) => sum + val, 0);
  const sumRevenue = revenue.reduce((sum, val) => sum + val, 0);
  const sumCv = cv.reduce((sum, val) => sum + val, 0);
  const avgMargin = margin.reduce((sum, val) => sum + val, 0) / margin.length;
  const avgEpc = epc.reduce((sum, val) => sum + val, 0) / epc.length;

  return (
    <section className="stats">
      <Stat type="Sum of profit(€)" value={sumProfit} />
      <Stat type="Sum of payout" value={sumPayout} />
      <Stat type="Sum of revenue" value={sumRevenue} />
      <Stat type="Sum of cv" value={sumCv} />
      <Stat type="Average of margin" value={avgMargin ? avgMargin : 0} />
      <Stat type="Average of epc" value={avgEpc ? avgEpc : 0} />
    </section>
  );
}
