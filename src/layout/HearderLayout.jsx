import DateReport from "../components/DateReport";
import { Stat } from "../components/Stat";
import Stats from "../components/Stats";

export default function HearderLayout({ dates, data }) {
  return (
    <header>
      <DateReport dates={dates} />
      <Stats data={data}>
        <Stat />
      </Stats>
    </header>
  );
}
