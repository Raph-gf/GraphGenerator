import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const profitPerOferOptions = {
  responsive: true,
  plugins: {
    legend: {
      //   position: 'top' as const
    },
    title: {
      display: true,
      text: "Profit par offre (€)",
    },
  },
};
const profitPerAffiliateOptions = {
  responsive: true,
  plugins: {
    legend: {
      //   position: 'top' as const
    },
    title: {
      display: true,
      text: "Profit par affilition (€)",
    },
  },
};

export default function Graph({ data }) {
  const offer =
    data.data?.table?.map(
      row => row.columns.find(col => col.column_type === "offer")?.label
    ) || [];

  const revenue = data.data?.table?.map(row => row.reporting?.revenue ?? 0) || [];
  const profit = data.data?.table?.map(row => row.reporting?.profit ?? 0) || [];

  const profitPerOferdatas = {
    labels: offer,
    datasets: [
      {
        label: "Revenue",
        data: revenue,
        backgroundColor: revenue.map(val =>
          val > 100 ? "rgba(75, 192, 192, 0.7)" : "rgba(255, 99, 132, 0.7)"
        ),
      },
      {
        label: "Profit",
        data: profit,
        backgroundColor: profit.map(val =>
          val > 50 ? "rgba(54, 162, 235, 0.7)" : "rgba(255, 206, 86, 0.7)"
        ),
      },
      {
        label: "Revenue > 100",
        data: profit,
        backgroundColor: "rgba(75, 192, 192, 0.7)",
      },
      {
        label: "Profit > 50",
        data: profit,
        backgroundColor: "rgba(54, 162, 235, 0.7)",
      },
    ],
  };

  const profitPerAffiliatedatas = {
    labels: offer,
    datasets: [
      {
        label: "Revenue",
        data: revenue,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <section className="graph">
      {" "}
      <Bar
        className="graph-ofer"
        options={profitPerOferOptions}
        data={profitPerOferdatas}
      />{" "}
      <Bar
        className="graph-affiliate"
        options={profitPerAffiliateOptions}
        data={profitPerAffiliatedatas}
      />{" "}
    </section>
  );
}
