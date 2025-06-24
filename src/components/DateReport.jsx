export default function DateReport({ dates }) {
  const dateIsTrue = dates.fromDate && dates.toDate;
  const fromDate = dateIsTrue
    ? new Date(dates.fromDate).toLocaleDateString("fr-FR")
    : null;

  const toDate = dateIsTrue ? new Date(dates.toDate).toLocaleDateString("fr-FR") : null;

  return (
    <div className="date">
      <h2>
        {dateIsTrue
          ? `Rapport du ${fromDate} au ${toDate}`
          : `Today's date : ${new Date().toLocaleDateString("fr-FR")}`}
      </h2>
    </div>
  );
}
