import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";

export default function DateForm() {
  return (
    <div className="form">
      <Flatpickr
        className="datepicker"
        options={{ mode: "range", dateFormat: "j-M-Y" }}
        placeholder="Sélectionnez une plage"
      />
    </div>
  );
}
