export default function DateForm() {
  return (
    <form>
      <label for="start">Date de début :</label>
      <input type="date" id="start" name="start" />

      <label for="end">Date de fin :</label>
      <input type="date" id="end" name="end" />
    </form>
  );
}
