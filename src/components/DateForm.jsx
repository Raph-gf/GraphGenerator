export default function DateForm({ dates }) {
  return (
    <div className="form">
      <label>Date de début :</label>
      <input
        className="datepicker"
        type="date"
        value={dates?.fromDate}
        onChange={e => dates?.setFromDate(e.target.value)}
      />

      <label>Date de fin :</label>
      <input
        className="datepicker"
        type="date"
        value={dates?.toDate}
        onChange={e => dates?.setToDate(e.target.value)}
      />
    </div>
  );
}
