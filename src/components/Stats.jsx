export default function Stats() {
  const statsOptions = [
    "Sum of profit",
    "Sum of payout",
    "Sum of revenu",
    "Sum of cv",
    "Average margin",
    "Average of epc",
  ];

  return (
    <section className="stats">
      {statsOptions.map(stat => (
        <Stat type={stat} key={stat} />
      ))}
    </section>
  );
}

function Stat({ type }) {
  return (
    <div className="stat">
      <h4>{type}</h4>
      <p>200$</p>
    </div>
  );
}
