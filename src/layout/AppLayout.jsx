import { useEffect, useState } from "react";
import DateForm from "../components/DateForm";
import Graph from "../components/Graph";
import HearderLayout from "./HearderLayout";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";

export default function AppLayout() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const dates = {
    fromDate,
    setFromDate,
    toDate,
    setToDate,
  };

  useEffect(() => {
    const controller = new AbortController();

    const reqBody = {
      from: fromDate,
      to: toDate,
      timezone_id: 58,
      currency_id: "EUR",
      columns: [
        { column: "offer" },
        { column: "affiliate" },
        { column: "revenue" },
        { column: "payout" },
        { column: "profit" },
      ],
    };

    if (!reqBody.from && !reqBody.to) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.post("http://localhost:8000/report", reqBody, {
          signal: controller.signal,
        });

        setData(res.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
          return;
        } else {
          alert(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchData();
    }, 5000);

    return () => {
      clearTimeout(
        setTimeout(() => {
          fetchData();
        }, 3000)
      );
      controller.abort();
    };
  }, [fromDate, toDate]);

  return (
    <>
      <HearderLayout dates={dates} data={data} />
      <DateForm dates={dates} />
      {isLoading ? <LoadingSpinner /> : <Graph data={data} />}
    </>
  );
}
