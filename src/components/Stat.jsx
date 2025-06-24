export function Stat({ type, value }) {
  return (
    <div className="stat">
      <h4>{type}</h4>
      <p>{value.toFixed(2)}</p>
    </div>
  );
}
